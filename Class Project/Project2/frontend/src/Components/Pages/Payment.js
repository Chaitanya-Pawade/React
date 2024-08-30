import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Payment.css';

export default function Payment() {
    const location = useLocation();
    const navigate = useNavigate(); // Initialize useNavigate
    const { movie, selectedSeats, totalPrice, city, theatre, showTime, date } = location.state || {};

    const formattedSeats = selectedSeats.join(', ');

    const handleConfirmPayment = () => {
        navigate('/confirmation', { state: { movie, selectedSeats, totalPrice, city, theatre, showTime, date } });
    };

    return (
        <div className="container2">
            <div className="payment-card">
                <div className="card">
                    <div className="card-header">
                        <h2>Booking Summary</h2>
                    </div>
                    <div className="card-body">
                        <h3>Movie Name : {movie?.Title}</h3>
                        <p><strong>Selected City:</strong> {city}</p>
                        <p><strong>Theatre:</strong> {theatre}</p>
                        <p><strong>Show Time:</strong> {showTime}</p>
                        <p><strong>Date:</strong> {date}</p>
                        <p><strong>Selected Seats:</strong> {formattedSeats}</p>
                        <p><strong>Total Price:</strong> ${totalPrice}</p>
                        <button className="btn btnl-primary" onClick={handleConfirmPayment}>Confirm Payment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
