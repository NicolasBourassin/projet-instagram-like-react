import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoComponent from "../postings/VideoComponent";

export default function Home() {
    const [postings, setPostings] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        loadPostings();
        loadUsers();
        loadComments();
    }, []);

    const loadPostings = async () => {
        try {
            const resultPostings = await axios.get("http://localhost:8080/postings");
            console.log(resultPostings.data); // Log the data to check if it's loaded correctly
            // Add a like status property to each posting
            const postingsWithLikes = resultPostings.data.map((posting) => ({
                ...posting,
                isLiked: false, // Initialize as not liked
            }));
            setPostings(postingsWithLikes);
        } catch (error) {
            console.error("Error loading postings:", error);
        }
    };

    const loadUsers = async () => {
        const resultUsers = await axios.get("http://localhost:8080/users");
        setUsers(resultUsers.data);
    };

    const loadComments = async () => {
        const resultComments = await axios.get("http://localhost:8080/comments");
        setComments(resultComments.data);
    };

    const getUserId = (user) => {
        return user ? user.id : null;
    };

    const getPostingAuthorUsername = (authorId) => {
        const author = users.find((user) => user.id === authorId);
        return author ? author.username : "Unknown";
    };

    const getPostingAuthorPhotoUrl = (authorId) => {
        const author = users.find((user) => user.id === authorId);
        return author ? author.photoUrl : "";
    };

    // Toggle the like status (allow switch between two images)
    const toggleLike = (posting) => {
        setPostings((prevPostings) =>
            prevPostings.map((prevPosting) =>
                prevPosting.id === posting.id
                    ? { ...prevPosting, isLiked: !prevPosting.isLiked }
                    : prevPosting
            )
        );
    };

    return (
        <div className="container">
            <div className="py-4">
                <table className="table bg-body-secondary">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Username</th>
                        <th scope="col">Content</th>
                        <th scope="col">Like comment</th>
                    </tr>
                    </thead>
                    <tbody>
                    {postings.length > 0 &&
                        postings.map((posting, index) => (
                            <tr key={posting.id}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    {posting.author ? (
                                        <img
                                            src={getPostingAuthorPhotoUrl(getUserId(posting.author))}
                                            alt="profile pic"
                                            width="50"
                                        />
                                    ) : (
                                        <img src="/character.png" alt="profile pic" width="50" />
                                    )}
                                </td>
                                <td>
                                    {posting.author
                                        ? getPostingAuthorUsername(getUserId(posting.author))
                                        : "Unknown author"}
                                </td>

                                <td>
                                    {posting.videoType ? (
                                        <iframe
                                            width="560"
                                            height="315"
                                            src={posting.urlContent}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <img src={posting.urlContent} alt="Image" width="200" />
                                    )}
                                </td>
                                <td>
                                    <button className="btn" onClick={() => toggleLike(posting)}>
                                        {posting.isLiked ? (
                                            <img src="./thumb-up_reverse.png" width="30" />
                                        ) : (
                                            <img src="./thumb-up.png" width="30" />
                                        )}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}