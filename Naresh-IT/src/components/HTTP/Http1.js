import React, { useEffect, useState } from "react";
import axios from "axios";

 export default function Http1(){
    const [users , setUsers] = useState([]);

    // const fetchUsers = () => {
    //     const url = 'http://localhost:4000/employees/'
    //     axios.get(url).then(response => {
    //         console.log(response.data);
    //         setUsers([...response.data])
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }

    const fetchUsers = async() => {
        const url = 'http://localhost:4000/employees/';
      const response = await axios.get(url);
      setUsers(response.data)
    }
    useEffect(() => {
        fetchUsers();
    },[])
    return (
        <>
        <h2>Http data with Axios</h2>
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