import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home(){

    const navigate = useNavigate();


    return(
        <>
        <h2>This is Home component</h2>
        <button onClick={() => navigate(1)}>Go to next</button>
        </>
    )
}