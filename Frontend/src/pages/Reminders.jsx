import { reminders } from "../data/mockData"; // Importing the reminders data from the mockData.js file

function Reminders() { // Defining the Reminders component
  return (
    <div style={{ padding: "24px", maxWidth: "420px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "22px", marginBottom: "16px" }}>Gentle reminders</h1>

      {reminders.map((r) => ( // Mapping over the reminders array to render each reminder.
        <div
          key={r.id}
          style={{
            background: "var(--card)",
            border: "1px solid var(--line)",
            borderRadius: "12px",
            padding: "12px 14px",
            marginBottom: "10px",
            display: "flex",
            gap: "12px",
          }}
        >
          <div style={{ color: "var(--brick)", fontWeight: "bold", minWidth: "48px" }}>
            {r.time}
          </div>
          <div>
            <b>{r.title}</b>
            <div style={{ fontSize: "12px", color: "var(--ink-soft)" }}>{r.note}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reminders; // Exporting the Reminders component as the default export of this module.
