import React from "react";
import { Link, Outlet } from "react-router-dom";


export default function Careers(){

    return (
        <>
        <h2>This is Careers Component</h2>
        
        <div>
            <Link to="/careers/permanent">Permanent Jobs</Link><br/>
            <Link to="/careers/contract">Contract Jobs</Link>
        </div>
        <Outlet/>
        </>
    )
}