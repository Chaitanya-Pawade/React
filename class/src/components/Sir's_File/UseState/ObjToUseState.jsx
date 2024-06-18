import { useState } from "react";

export default function ObjToUseState() {
  const [fullName, setFullName] = useState({ fname: "", lname: "" });

  function changeName() {
    setFullName({ ...fullName , fname : 'Chaitanya' , lname : 'Pawade'});
  }

  return (
    <div>
      <button onClick={changeName}>Click for FullName </button>
      <h2>My FullName is : {fullName.fname} {fullName.lname}</h2>
    </div>
  );
}

//! 2 method 

// import React, { useState } from 'react'

// function ObjToUsestate() {
//     const [user, setUser] = useState({ firstName: '', lastName: '' });

//     console.log({ ...user });

//     const onChangeHandler = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value })
//     }

//     return (
//         <div>ObjectToUsestate
//             <form>
//                 <input type="text" onChange={onChangeHandler} name="firstName" value={user.firstName} />
//                 <input type="text" onChange={onChangeHandler} name="lastName" value={user.lastName} />
//             </form>
//             <h3> This is your First Name : {user.firstName}</h3>
//             <h3> This is your Last Name : {user.lastName}</h3>
//             <br />
//             <h6>{JSON.stringify(user)}</h6>
//         </div>
//     )
// }

// export default ObjToUsestate

