import React, {useEffect, useState} from "react";
import axios from "axios";
export default function Home(){

    const [postings, setPostings]=useState([])

    useEffect(()=>{
        loadPostings();
        loadUsers();
        loadComments();
    }, []);

    const loadPostings=async()=>{
        const resultPostings=await axios.get("http://localhost:8080/postings");
        console.log(resultPostings.data);
    }

    const loadUsers=async()=>{
        const resultUsers=await axios.get("http://localhost:8080/users");
        console.log(resultUsers.data);
    }

    const loadComments=async()=>{
        const resultComments=await axios.get("http://localhost:8080/comments");
        console.log(resultComments.data);
    }

    return(
        <div className='container'>
            <div className='py-4'>
                <table className="table bg-body-secondary">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        postings.map((posting,index)=>(
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                {/*<td>posting.author.username</td>*/}
                                <td>posting.urlContent</td>
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