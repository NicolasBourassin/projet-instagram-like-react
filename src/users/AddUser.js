import React, { useState } from "react";
import axios from "axios";

export default function AddUser() {
    const [user, setUser] = useState({
        username: "",
        password: "",
        photoUrl: "",
    });

    // Function to handle form submissions
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // add the user to the database
            await axios.post("http://localhost:8080/user", user);
            // Clear the form fields after each submission
            setUser({
                username: "",
                password: "",
                photoUrl: "",
            });
        } catch (error) {
            console.error("Error adding user:", error);
            alert("An error occurred while adding the user.");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
                    <h3>Add User</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                value={user.username}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="photoUrl" className="form-label">Photo URL</label>
                            <input
                                type="text"
                                className="form-control"
                                id="photoUrl"
                                name="photoUrl"
                                value={user.photoUrl}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-secondary">Add User</button>
                    </form>
                </div>
            </div>
        </div>
    );
}