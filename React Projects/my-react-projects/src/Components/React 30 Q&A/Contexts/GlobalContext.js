import { createContext } from "react";
import Child1 from "./child1";

const data = createContext();

export default function GlobalContext(){

    const name = "Chaitanya";
    const lname = "Pawade";

    return(
        <>
        <data.Provider value={{name , lname}}>
        <Child1/>
        </data.Provider>
        </>
    )
}

export {data};