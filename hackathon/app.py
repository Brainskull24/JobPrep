from fastapi import FastAPI, Query, Depends, Request, Form
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
from typing import List, Dict, Optional
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Hackathon Terminology Service")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # sabko allow kar, hackathon demo ke liye theek hai
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------
# Mock vocabularies
# ---------------------------
NAMASTE_CODES = {
    "NAM-AY-001": "Amlapitta (Acid reflux in Ayurveda)",
    "NAM-AY-002": "Jwara (Fever)",
    "NAM-AY-003": "Prameha (Diabetes)",
}

ICD_CODES = {
    "TM2-1001": "Amlapitta pattern (TM2)",
    "MB-1001": "Gastroesophageal reflux disease (GERD, Biomedicine)",
    "MB-1002": "Fever, unspecified",
    "MB-1003": "Type 2 Diabetes mellitus",
}

# ConceptMap (mock bidirectional mappings)
MAPPINGS = {
    "NAM-AY-001": ["TM2-1001", "MB-1001"],
    "NAM-AY-002": ["MB-1002"],
    "NAM-AY-003": ["MB-1003"],
    "TM2-1001": ["NAM-AY-001"],
    "MB-1001": ["NAM-AY-001"],
    "MB-1002": ["NAM-AY-002"],
    "MB-1003": ["NAM-AY-003"],
}

# ---------------------------
# ABHA OAuth2 Dummy
# ---------------------------
def get_current_user(token: str = Query(..., description="ABHA Access Token")):
    # In real-world → verify with ABDM Consent Manager
    if token != "demo-abha-token":
        raise Exception("Invalid ABHA token")
    return {"abha_id": "1234-5678-9012"}

# ---------------------------
# Autocomplete Endpoint
# ---------------------------
@app.get("/ValueSet/$expand")
def expand(filter: str = Query(..., description="Search term")):
    results = []

    # Search NAMASTE
    for code, desc in NAMASTE_CODES.items():
        if filter.lower() in desc.lower():
            results.append({"system": "NAMASTE", "code": code, "display": desc})

    # Search ICD
    for code, desc in ICD_CODES.items():
        if filter.lower() in desc.lower():
            results.append({"system": "ICD-11", "code": code, "display": desc})

    return {"expansions": results}

# ---------------------------
# Translate Endpoint
# ---------------------------
@app.get("/translate")
def translate(code: str = Query(...), system: str = Query(...)):
    if code not in MAPPINGS:
        return {"message": "No mapping found"}

    mapped_codes = []
    for target_code in MAPPINGS[code]:
        mapped_codes.append({
            "code": target_code,
            "display": NAMASTE_CODES.get(target_code) or ICD_CODES.get(target_code),
            "system": "NAMASTE" if target_code in NAMASTE_CODES else "ICD-11"
        })

    return {"original": {"code": code, "system": system}, "mapped": mapped_codes}

# ---------------------------
# Encounter Upload
# ---------------------------
class ProblemEntry(BaseModel):
    system: str
    code: str
    display: str

class EncounterBundle(BaseModel):
    patient_abha: str
    problems: List[ProblemEntry]

# Local in-memory encounter storage
ENCOUNTERS: List[Dict] = []

@app.post("/Encounter/upload")
def upload_encounter(bundle: EncounterBundle, user=Depends(get_current_user)):
    ENCOUNTERS.append(bundle.dict())
    return {"message": "Encounter stored successfully", "count": len(ENCOUNTERS)}

# ---------------------------
# Serve HTML UI
# ---------------------------
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
