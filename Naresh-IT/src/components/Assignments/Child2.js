import React from "react";

export default function Child2({nums}){

    return (
        <>
        <h2>Child 2</h2>
        <h3>{nums}</h3>
        </>
    )
}


// const Child2 = () => {
//     console.log('ChildComponent2 re-rendered');
//     return (
//         <div>
//             <h3>Child Component 2</h3>
//             <p>This component does not depend on props.</p>
//         </div>
//     );
// };

// export default Child2;
