import { useState } from "react";
import Home from "./pages/Home";
import Reminders from "./pages/Reminders";
import Caregiver from "./pages/Caregiver";

// "useState" remembers which tab is active and re-renders when it changes.
// This is the ONE React concept you need to understand first: state = data
// that can change, and the screen automatically updates when it does.
function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      {/* Show a different screen depending on which tab is active */}
      {activeTab === "home" && <Home />}
      {activeTab === "reminders" && <Reminders />}
      {activeTab === "caregiver" && <Caregiver />}

      {/* Bottom tab bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          background: "var(--card)",
          borderTop: "1px solid var(--line)",
        }}
      >
        <TabButton label="Home" active={activeTab === "home"} onClick={() => setActiveTab("home")} />
        <TabButton
          label="Reminders"
          active={activeTab === "reminders"}
          onClick={() => setActiveTab("reminders")}
        />
        <TabButton
          label="Caregiver"
          active={activeTab === "caregiver"}
          onClick={() => setActiveTab("caregiver")}
        />
      </div>
      {/* spacer so content isn't hidden behind the fixed tab bar */}
      <div style={{ height: "60px" }} />
    </div>
  );
}

// A small reusable component for each tab button
function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        padding: "14px",
        border: "none",
        background: "none",
        color: active ? "var(--teal)" : "var(--ink-soft)",
        fontWeight: active ? "bold" : "normal",
      }}
    >
      {label}
    </button>
  );
}

export default App;
