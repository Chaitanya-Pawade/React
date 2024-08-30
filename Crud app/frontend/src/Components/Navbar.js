import React from "react"
import "./Navbar.css"

export default function Navbar() {

    return (
        <>
            <div className="navbar">
                <div className="bar">
                    <h1>🎬Movie Booking</h1>
                </div>
                <div>
                    <input type="search" placeholder="Search movie here..." />
                </div>



                <div className="btns">
                    <button className="btn btn-primary">Book Now</button>
                    <button className="btn btn-info">Registration</button>
                    <button className="btn btn-danger">Log Out</button>

                </div>
            </div>


        </>
    )
}