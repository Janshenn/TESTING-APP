import Sidebar from "../components/Sidebar";
import { participants } from "../data/events";

export default function EventTransaction() {
  return (
    <div style={{ display:'flex', background:'#0a1f44', minHeight:'100vh' }}>

      <Sidebar />

      <div style={{ padding:30, width:'100%' }}>
        <h2>Event Transactions</h2>

        <table border="1" cellPadding="8">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Event</th>
          </tr>
          {participants.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.email}</td>
              <td>{p.event}</td>
            </tr>
          ))}
        </table>

      </div>
    </div>
  );
}
