import React, { useEffect, useState } from "react";
import axios from "axios";
import instance from "./api";

 export default function Http2(){
    const [users , setUsers] = useState([]);

  
    const fetchUsers = async() => {
        
      const response = await instance.get('/users');
      setUsers(response.data)

    //   const comments = await instance.get('/comments');
    //   setUsers(comments.data)
    }
    useEffect(() => {
        fetchUsers();
    },[])
    return (
        <>
        <h2>Http data with Axios-Instance</h2>
        <ul>
        {
            users.map((user , ind) => {
              return <li key={ind}>
                 {user.name}
              </li>
            })
        }
        </ul>
        </>
    )
 }