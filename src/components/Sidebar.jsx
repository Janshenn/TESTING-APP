import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Event List", path: "/event-list" },
    { name: "Event Transaction", path: "/event-transaction" }
  ];

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>Testing App</h2>

      {menu.map((item, i) => (
        <button
          key={i}
          onClick={() => navigate(item.path)}
          style={styles.menu}
        >
          {item.name}
        </button>
      ))}

      <button
        onClick={() => {
          localStorage.removeItem("isLogin");
          window.location.href = "/";
        }}
        style={styles.logout}
      >
        Logout
      </button>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "230px",
    height: "100vh",
    background: "#050f2c",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    color: "white"
  },
  logo: {
    marginBottom: "40px",
    textAlign: "center"
  },
  menu: {
    background: "transparent",
    border: "1px solid #1e3a8a",
    color: "white",
    padding: "12px",
    borderRadius: "10px",
    marginBottom: "10px",
    cursor: "pointer"
  },
  logout: {
    marginTop: "auto",
    background: "#7f1d1d",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    color: "white",
    cursor: "pointer"
  }
};
