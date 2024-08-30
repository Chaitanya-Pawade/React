import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFilm } from 'react-icons/fa';
import './BookingStatus.css'; // Custom styles

export default function BookingStatus() {
    const location = useLocation();
    const navigate = useNavigate();
    const { movie, selectedSeats, totalPrice, city, theatre, showTime, date } = location.state || {};
    const noofSeats = selectedSeats.join(', ');
    

    // useEffect(() => {
        
    // }, [movie, selectedSeats, totalPrice, city, theatre, showTime, date]);

    return (
        <div className="background-container">
            <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="card p-4 shadow-lg booking-card">
                    <div className="card-header bg-dark text-white">
                        <h2 className='heading'>Booking Confirmed!</h2>
                    </div>
                    <div className="card-body text-light">
                        <FaFilm size={60} className="text-warning mb-4" />
                        <h4 className="card-title mb-4">Enjoy Your Movie!</h4>
                        <h3 className="mb-3">Movie: {movie?.Title}</h3>
                        <p><strong>City:</strong> {city}</p>
                        <p><strong>Theatre:</strong> {theatre}</p>
                        <p><strong>Date:</strong> {date}</p>
                        <p><strong>Show Time:</strong> {showTime}</p>
                        <p><strong>Seats:</strong> {noofSeats}</p>
                        <p><strong>Total Price:</strong> ${totalPrice}</p>
                        <button className="btn btn-primary mt-3" onClick={() => navigate('/home')}>Go to Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
