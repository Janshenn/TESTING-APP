import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // hanya admin@gmail.com dengan password 123456 bisa login
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("role", "admin");
      navigate("/dashboard"); // redirect ke dashboard
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Testing App</h1>
        <p style={styles.subtitle}>Sign in to continue</p>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #050b2c, #0d1b4c)",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontFamily: "Arial"
  },
  card: {
    background: "#081235",
    padding: "40px",
    borderRadius: "15px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 15px 30px rgba(0,0,0,0.4)"
  },
  title: {
    marginBottom: "10px"
  },
  subtitle: {
    marginBottom: "20px",
    opacity: 0.7,
    fontSize: "14px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "14px"
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#1e40af",
    color: "white",
    fontSize: "15px",
    cursor: "pointer"
  }
};
