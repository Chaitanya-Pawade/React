import React, { createContext } from "react";
import Child1 from "./Child1";

const data = createContext();
const data1 = createContext();
 export default function Parent(){

    const name = "Chaitanya";
    const gender = "Male";
    return (
        <>
        <data.Provider value={name}>
            <data1.Provider value={gender}>
        <Child1/>
        </data1.Provider>
        </data.Provider>
        </>
    )
}

export {data , data1};