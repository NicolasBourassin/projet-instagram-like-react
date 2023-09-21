import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("/login", formData)
            .then((response) => {
                // If successful login
                if (response.status === 200) {
                    console.log("Login successful");
                    // You can redirect to a different page or update state accordingly
                }
            })
            .catch((error) => {
                // If login failure :
                if (error.response) {
                    // Request sent but server responded with error status code
                    if (error.response.status === 401) {
                        console.log("Invalid username or password");
                    } else {
                        console.log("An error occurred during login");
                    }
                } else if (error.request) {
                    console.log("No response received from server");
                } else {
                    // other cases
                    console.log("Error:", error.message);
                }
            });
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;