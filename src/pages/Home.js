import React, {useEffect, useState} from "react";
import axios from "axios";
export default function Home(){

    const [postings, setPostings]=useState([])
    const [users, setUsers]=useState([])
    const [comments, setComments]=useState([])

    useEffect(()=>{
        loadPostings();
        loadUsers();
        loadComments();
    }, []);

    const loadPostings=async()=>{
        const resultPostings=await axios.get("http://localhost:8080/postings");
        setPostings(resultPostings.data);
    }

    const loadUsers=async()=>{
        const resultUsers=await axios.get("http://localhost:8080/users");
        setUsers(resultUsers.data);
    }

    const loadComments=async()=>{
        const resultComments=await axios.get("http://localhost:8080/comments");
        setComments(resultComments.data);
    }

    const getUserId = (user) =>{
        return user ? user.id : null;
    }

    const getPostingAuthorUsername = (authorId) => {
        const author = users.find((user) => user.id === authorId);
        return author ? author.username : "Unknown";
    };

    const getPostingAuthorPhotoUrl = (authorId) => {
        const author = users.find((user) => user.id === authorId);
        return author ? author.photoUrl : "";
    };

    return(
        <div className='container'>
            <div className='py-4'>
                <table className="table bg-body-secondary">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Content</th>
                        <th scope="col">URL</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        postings.map((posting,index)=>(
                            <tr key={posting.id}>
                                <th scope="row">{index+1}</th>
                                <td>
                                    {posting.author ? getPostingAuthorUsername(getUserId(posting.author)): "Unknown author"}
                                    {posting.author
                                        ? <img src={getPostingAuthorPhotoUrl(getUserId(posting.author))}
                                               alt="profile pic" width="50"/>
                                        : ""}
                                </td>
                                <td>
                                    {posting.videoType ? (
                                        <video width="320" height="240" controls>
                                            <source src={posting.urlContent} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img src={posting.urlContent} alt="Image" width="200" />
                                    )}
                                </td>
                                <td>{posting.urlContent}</td>
                                {/*    TODO : affichage vidéo/image selon booléen*/}
                                {/*    TODO : récupération et affichage des commentaires*/}
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}