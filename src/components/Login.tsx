import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
    onLogin: (role: "customer" | "colleague") => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [role, setRole] = useState<"customer" | "colleague" | "">("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (role) {
            onLogin(role as "customer" | "colleague");
            navigate("/dashboard");
        } else {
            alert("Please select a role");
        }
    };

    return (
        <div className="login-container">
            <h1>Starship Hire System</h1>
            <label>
                Select Role:
                <select value={role} onChange={(e) => setRole(e.target.value as "customer" | "colleague" | "")}>
                    <option value="">-- Select --</option>
                    <option value="customer">Customer</option>
                    <option value="colleague">Colleague</option>
                </select>
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;