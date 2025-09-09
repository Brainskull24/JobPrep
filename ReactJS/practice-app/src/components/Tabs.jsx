import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Home", content: "Welcome to the Home tab!" },
    { id: "tab2", label: "Profile", content: "This is your Profile tab." },
    { id: "tab3", label: "Settings", content: "Adjust your Settings here." },
  ];

  return (
    <div style={{ width: "300px", margin: "20px auto", fontFamily: "Arial" }}>
      {/* Tab Headers */}
      <div style={{ display: "flex", borderBottom: "2px solid #ccc" }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: "10px",
              cursor: "pointer",
              border: "none",
              borderBottom:
                activeTab === tab.id
                  ? "3px solid blue"
                  : "3px solid transparent",
              background: "transparent",
              fontWeight: activeTab === tab.id ? "bold" : "normal",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        style={{ padding: "15px", background: "#f9f9f9", borderRadius: "6px" }}
      >
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
