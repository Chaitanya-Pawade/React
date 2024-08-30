// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Confirmation.css'; // Custom styles

// export default function Confirmation() {
//     const navigate = useNavigate();
//     const [cardNumber, setCardNumber] = useState('');
//     const [cvv, setCvv] = useState('');
//     const [expiryDate, setExpiryDate] = useState('');
//     const [errors, setErrors] = useState({});

//     const { movie, selectedSeats, totalPrice, city, theatre, showTime, date } = location.state || {};
//     const formattedSeats = selectedSeats.join(', ');
//     const handleSubmit = (event) => {
//         event.preventDefault();

//         let formErrors = {};
//         if (!cardNumber) formErrors.cardNumber = 'Card number is required';
//         if (!cvv) formErrors.cvv = 'CVV is required';
//         if (!expiryDate) formErrors.expiryDate = 'Expiry date is required';

//         if (Object.keys(formErrors).length > 0) {
//             setErrors(formErrors);
//             return;
//         }
//         alert("Payment is Successfully done")
        
//     };

//     const handleBook = () => {
//         navigate('/booking-status', { state: { movie, selectedSeats, totalPrice, city, theatre, showTime, date } });
//     }
//     return (
//         <div className="container3">
//             <div className="payment-card mx-auto p-4 shadow-lg rounded">
//                 <div className="new-card-header">
//                     <h2>Confirm Payment</h2>
//                 </div>
//                 <div className="card-body">
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-group mb-3">
//                             <label htmlFor="cardNumber">Card Number</label>
//                             <input
//                                 type="text"
//                                 id="cardNumber"
//                                 className="form-control form-control-lg"
//                                 value={cardNumber}
//                                 onChange={(e) => setCardNumber(e.target.value)}
//                             />
//                             {errors.cardNumber && <div className="error mt-2">{errors.cardNumber}</div>}
//                         </div>
//                         <div className="form-group mb-3">
//                             <label htmlFor="cvv">CVV</label>
//                             <input
//                                 type="text"
//                                 id="cvv"
//                                 className="form-control form-control-lg"
//                                 value={cvv}
//                                 onChange={(e) => setCvv(e.target.value)}
//                             />
//                             {errors.cvv && <div className="error mt-2">{errors.cvv}</div>}
//                         </div>
//                         <div className="form-group mb-4">
//                             <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
//                             <input
//                                 type="text"
//                                 id="expiryDate"
//                                 className="form-control form-control-lg"
//                                 value={expiryDate}
//                                 onChange={(e) => setExpiryDate(e.target.value)}
//                             />
//                             {errors.expiryDate && <div className="error mt-2">{errors.expiryDate}</div>}
//                         </div>
//                         <button type="submit" onSubmit={handleBook}className="btn custom-btn w-100">Pay Now</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }












import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Confirmation.css'; // Custom styles
import axios from 'axios';

export default function Confirmation() {
    const navigate = useNavigate();
    const location = useLocation();
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [errors, setErrors] = useState({});

    // Access location.state using useLocation
    const { movie, selectedSeats, totalPrice, city, theatre, showTime, date } = location.state || {};
    const formattedSeats = selectedSeats ? selectedSeats.join(', ') : '';

    const handleSubmit = (event) => {
        event.preventDefault();

        let formErrors = {};
        if (!cardNumber) formErrors.cardNumber = 'Card number is required';
        if (!cvv) formErrors.cvv = 'CVV is required';
        if (!expiryDate) formErrors.expiryDate = 'Expiry date is required';

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        // If validation is successful, show the alert and navigate
        alert("Payment is Successfully done");
        createBooking()
        navigate('/booking-status', { state: { movie, selectedSeats, totalPrice, city, theatre, showTime, date } });
    };

    const createBooking=()=>{
        if (movie && selectedSeats && totalPrice && city && theatre && showTime && date) {
            const bookingData = {
                movie,
                selectedSeats,
                totalPrice,
                city,
                theatre,
                showTime,
                date
            };

            axios.post('http://localhost:5000/api/bookings', bookingData)
                .then(response => {
                    console.log('Booking saved successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error saving booking:', error);
                });
        }
    }

    return (
        <div className="container3">
            <div className="payment-card mx-auto p-4 shadow-lg rounded">
                <div className="new-card-header">
                    <h2>Confirm Payment</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="cardNumber">Card Number</label>
                            <input
                                type="text"
                                id="cardNumber"
                                className="form-control form-control-lg"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                            />
                            {errors.cardNumber && <div className="error mt-2">{errors.cardNumber}</div>}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="cvv">CVV</label>
                            <input
                                type="text"
                                id="cvv"
                                className="form-control form-control-lg"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                            />
                            {errors.cvv && <div className="error mt-2">{errors.cvv}</div>}
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
                            <input
                                type="text"
                                id="expiryDate"
                                className="form-control form-control-lg"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                            />
                            {errors.expiryDate && <div className="error mt-2">{errors.expiryDate}</div>}
                        </div>
                        <button type="submit" className="btn custom-btn w-100">Pay Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
