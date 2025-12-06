import { useState } from "react";

export default function EventList() {
  const [events, setEvents] = useState([
    { id: 1, name: "Music Festival", date: "2025-04-20" },
    { id: 2, name: "Tech Conference", date: "2025-05-15" }
  ]);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const addEvent = () => {
    if (!name || !date) return;

    setEvents([...events, { id: Date.now(), name, date }]);
    setName("");
    setDate("");
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>Event List</h1>

      <div style={styles.form}>
        <input
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={styles.input}
        />
        <button onClick={addEvent} style={styles.button}>Add</button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Event</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {events.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.date}</td>
              <td>
                <button onClick={() => deleteEvent(e.id)} style={styles.delete}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: { padding: "30px", color: "white" },
  form: { display: "flex", gap: "10px", marginBottom: "20px" },
  input: { padding: "10px", borderRadius: "8px", border: "none" },
  button: { padding: "10px", background: "#1e40af", color: "white", border: "none", borderRadius: "8px" },
  table: { width: "100%", borderCollapse: "collapse" },
  delete: { background: "#dc2626", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px" }
};
