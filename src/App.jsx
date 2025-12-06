import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EventList from "./pages/EventList";
import EventTransaction from "./pages/EventTransaction";
import Sidebar from "./components/Sidebar";

function App() {
  const isLogin = localStorage.getItem("isLogin");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            isLogin ? (
              <div style={{ display: "flex" }}>
                <Sidebar />
                <Dashboard />
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/event-list"
          element={
            isLogin ? (
              <div style={{ display: "flex" }}>
                <Sidebar />
                <EventList />
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/event-transaction"
          element={
            isLogin ? (
              <div style={{ display: "flex" }}>
                <Sidebar />
                <EventTransaction />
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
