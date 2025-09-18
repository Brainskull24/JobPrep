import requests
import base64
import time
import csv
import os

CLIENT_ID = "2e0c086e-8016-4a6a-aca7-d104f62f2ae0_7bc67a5a-3540-4cef-902d-092d3ae8196d"
CLIENT_SECRET = "pH69ilDKwWVSTIs0HGJm5tZBdZbiAV5KUpuTMr5WlQM="

TOKEN_CACHE = {"access_token": None, "expires_at": 0}

def get_access_token():
    """Get OAuth2 access token with caching."""
    if TOKEN_CACHE["access_token"] and time.time() < TOKEN_CACHE["expires_at"]:
        return TOKEN_CACHE["access_token"]

    token_url = "https://icdaccessmanagement.who.int/connect/token"
    credentials = f"{CLIENT_ID}:{CLIENT_SECRET}"
    encoded_credentials = base64.b64encode(credentials.encode()).decode()

    headers = {
        "Authorization": f"Basic {encoded_credentials}",
        "Content-Type": "application/x-www-form-urlencoded"
    }

    data = {
        "grant_type": "client_credentials",
        "scope": "icdapi_access"
    }

    response = requests.post(token_url, headers=headers, data=data)
    response.raise_for_status()
    token_data = response.json()

    TOKEN_CACHE["access_token"] = token_data["access_token"]
    TOKEN_CACHE["expires_at"] = time.time() + token_data.get("expires_in", 3600) - 30
    return TOKEN_CACHE["access_token"]

def extract_definition(detail_data):
    """Extract definition text from MMS detail JSON, if available."""
    definition = detail_data.get("definition")
    if not definition:
        return ""
    
    if isinstance(definition, dict) and "@value" in definition:
        return definition["@value"]

    if isinstance(definition, dict) and "en" in definition and isinstance(definition["en"], dict):
        return definition["en"].get("@value", "")

    return ""

def search_icd(term):
    """Search for ICD-11 codes in MMS, filter out irrelevant entities."""
    try:
        access_token = get_access_token()
        headers = {
            "Authorization": f"Bearer {access_token}",
            "Accept": "application/json",
            "Accept-Language": "en",
            "API-Version": "v2"
        }

        search_url = "https://id.who.int/icd/release/11/2024-01/mms/search"
        params = {"q": term, "flatResults": "true", "highlightingEnabled": "true"}

        print(f"Searching for: {term}")
        res = requests.get(search_url, headers=headers, params=params)
        res.raise_for_status()
        data = res.json()

        results = []
        for ent in data.get("destinationEntities", []):
            entity_id = ent["id"].split("/")[-1]
            if entity_id.lower() == "unspecified":
                continue

            detail = requests.get(f"https://id.who.int/icd/release/11/2024-01/mms/{entity_id}", headers=headers)
            if detail.status_code != 200:
                continue

            detail_data = detail.json()
            code = detail_data.get("theCode")
            title_obj = detail_data.get("title", {})
            title = title_obj.get("@value") or title_obj.get("en") if isinstance(title_obj, dict) else str(title_obj)

            if code or detail_data.get("code") or detail_data.get("codeRange"):
                results.append({
                    "title": title,
                    "code": code or detail_data.get("code") or detail_data.get("codeRange"),
                    "id": detail_data.get("@id"),
                    "source": "MMS" if code else "Entity (no MMS code)",
                    "definition": extract_definition(detail_data)
                })

        return results

    except Exception as e:
        print(f"Error in search: {e}")
        return []

def save_results_to_csv(results, term):
    """Save ICD search results to a CSV file in a folder called 'output'."""
    folder = "output"
    os.makedirs(folder, exist_ok=True)

    # Replace spaces in term for filename
    filename = f"{term.replace(' ', '_')}.csv"
    filepath = os.path.join(folder, filename)

    with open(filepath, mode='w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=["title", "code", "id", "source", "definition"])
        writer.writeheader()
        for row in results:
            writer.writerow(row)

    print(f"\nResults saved to: {filepath}")

if __name__ == "__main__":
    if CLIENT_ID == "your_client_id_here":
        print("Please set your CLIENT_ID and CLIENT_SECRET first!")
        print("You can get these by registering at: https://icd.who.int/icdapi")
    else:
        term = "TM2"
        results = search_icd(term)
        if results:
            print(f"\nFound {len(results)} results:")
            for result in results:
                print(f"Code: {result['code']}")
                print(f"Title: {result['title']}")
                print(f"Source: {result['source']}")
                print(f"ID: {result['id']}")
                if result.get('definition'):
                    print(f"Definition: {result['definition']}")
                print("-" * 50)

            # Save to CSV
            save_results_to_csv(results, term)
        else:
            print("No results found.")
