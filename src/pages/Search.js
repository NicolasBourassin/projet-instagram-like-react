import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    // Function to handle the search button click
    const handleSearch = () => {
        setLoading(true);

        // Make a request to your API to search for users by username
        axios
            .get(`/api/users/search?username=${searchTerm}`)
            .then((response) => {
                setSearchResults(response.data);
            })
            .catch((error) => {
                console.error("Error searching for users:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // useEffect to handle initial loading or other actions (optional)
    useEffect(() => {
        // You can add additional logic here if needed.
        // For example, you might want to load some default data when the component mounts.
        // This code will run only once when the component first renders.

        // Example:
        // setLoading(true);
        // axios.get(`/api/initial-data`)
        //   .then((response) => {
        //     // Handle the initial data
        //   })
        //   .catch((error) => {
        //     console.error("Error loading initial data:", error);
        //   })
        //   .finally(() => {
        //     setLoading(false);
        //   });
    }, []);

    return (
        <div>
            <h2>Search for Users by Username</h2>
            <div>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {searchResults.length > 0 ? (
                        <ul>
                            {searchResults.map((user) => (
                                <li key={user.id}>{user.username}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No users found.</p>
                    )}
                </div>
            )}
        </div>
    );
}