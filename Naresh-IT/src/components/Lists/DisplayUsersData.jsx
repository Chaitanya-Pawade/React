import React from "react";
import {UsersData} from '../Lists/UsersData';


export default function DisplayUsersData(){
    console.log(UsersData);
  const headings = Object.keys(UsersData[0]).map((key) => <th>{key}</th>);
  
    return (
         <>
         <h2>Employee List</h2>
         <table className="table table-dark table-striped-columns">
            <thead>
                <tr>
                    {/* dynamically we can are receving headings */}
                    {headings}      

                    {/* this is noraml way   */}

                    {/* <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Job Role</th> */}
                </tr>
            </thead>
            <tbody>
                {
                    UsersData.map((user,ind) => {
                        return <tr key = {ind} >
                         {Object.values(user).map((val) => {
                            return <td>{val}</td>
                         })}
                        {/* <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.Salary}</td>
                        <td>{user.JobRole}</td> */}
                        </tr>
                    })
                }
            </tbody>
         </table>
         </>
    )
}