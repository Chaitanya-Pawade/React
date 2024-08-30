import { useContext } from "react"
import { data } from "./GlobalContext"


export default function Child2(){

const {name , lname} = useContext(data);

    return (
        <>
        <h2>My Fullname is  {name} {lname}</h2>
        </>
    )
}