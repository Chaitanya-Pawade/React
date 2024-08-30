

// import React, { useState } from 'react';

import { useState } from "react";
import { FaHandHolding } from "react-icons/fa";

// function Fourth() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [submittedData, setSubmittedData] = useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setSubmittedData({ name, email });
//     setName('');
//     setEmail('');
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Name:
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//           </label>
//         </div>
//         <div>
//           <label>
//             Email:
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           </label>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {submittedData && (
//         <div>
//           <h3>Submitted Data</h3>
//           <p>Name: {submittedData.name}</p>
//           <p>Email: {submittedData.email}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Fourth;




export default function Forth(){

    const [isVisible , setIsVisible] = useState(false);

    const toggleFunction = () => {
      setIsVisible(!isVisible)
    }
    return(
       <>
       <button onClick={toggleFunction}>Click here   </button>
       {isVisible ? <h3>Show</h3> : <h3>Hide</h3>}
    
       </>
    )
}