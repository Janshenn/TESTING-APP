import { useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (!isLogin) {
      window.location.href = "/login";
    }
  }, []);

  const data = [
    { name: "Users", value: 120 },
    { name: "Events", value: 45 },
    { name: "Tickets", value: 300 },
    { name: "Active", value: 85 }
  ];

  const COLORS = ["#1e40af", "#2563eb", "#3b82f6", "#60a5fa"];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard</h1>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

const styles = {
  container: { padding: "30px", color: "white" },
  title: { marginBottom: "20px" }
};
