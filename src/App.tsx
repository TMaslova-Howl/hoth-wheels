import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./index.css";

const App: React.FC = () => {
    const [role, setRole] = useState<"customer" | "colleague" | null>(null);

    const handleLogin = (userRole: "customer" | "colleague") => {
        setRole(userRole);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login onLogin={handleLogin} />} />
                <Route
                    path="/dashboard"
                    element={role ? <Dashboard role={role} /> : <Navigate to="/" />}
                />
            </Routes>
        </Router>
    );
};

export default App;