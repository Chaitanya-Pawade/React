import React, { useState } from "react";

export function Example(){
    const [num,setNum] = useState([1,2,3,4,5,6,7,8,9]);

    // const filterFun = () => {
    //     let filterd = num.filter((no) => no<=5)
    //     setNum(filterd)
    // }
    return (
    <>
    <div>
        {
           num.map((num) => num).filter((no,ind) => no<=5)
        }
        <br/>
        {/* <button onClick={filterFun}>Click here</button> */}
    </div>
    </>
    )
}