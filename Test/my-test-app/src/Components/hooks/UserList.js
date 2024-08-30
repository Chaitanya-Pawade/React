// import { useEffect, useState } from "react";

// export default function UserList() {
//   const [user, setUser] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         if (!response.ok) {
//           throw new Error("response not ok");
//         }
//         const data = await response.json();
//         setUser(data);
//       } catch (error) {
//         setError(error.message)
//       }finally{
//         setLoading(false);
//       }
//     };
//     fetchData()
//   },[]);
//   if(loading){
//     return <div>Loading...</div>
//   }
//   if(error){
//     return <div>Error : {error}</div>
//   }
//   return (
//     <div>
//       <h2>Fetching data of Users from api</h2>
//       <ul>
//         {
//             user.map(user => (
//                  <li key={user.id}>{user.id} {user.name}</li> 
//             ))
//         }
//       </ul>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';

function UserList() {
  const [value, setValue] = useState(() => {
    // Get initial state from local storage
    return localStorage.getItem('myValue') || '';
  });
// console.log(value); 

  useEffect(() => {
    // Update local storage whenever value changes
    localStorage.setItem('myValue', value);
  }, [value]);

  return (
    <div>
      <h1>Local Storage Sync</h1>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <p>Stored value: {value}</p>
    </div>
  );
}

export default UserList;
