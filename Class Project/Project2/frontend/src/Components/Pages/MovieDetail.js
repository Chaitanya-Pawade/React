// // // import React, { useEffect, useState } from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import axios from 'axios';
// // // import 'bootstrap/dist/css/bootstrap.min.css';
// // // import './MovieDetail.css';

// // // export default function MovieDetail() {
// // //     const { id } = useParams();
// // //     const [movie, setMovie] = useState(null);
// // //     const [selectedSeats, setSelectedSeats] = useState([]);
// // //     const [seatPrice] = useState(100);
// // //     const API_KEY = '1e4a48ff'; // Replace with your OMDb API key

// // //     useEffect(() => {
// // //         axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
// // //             .then(response => {
// // //                 if (response.data.Response === "True") {
// // //                     setMovie(response.data);
// // //                 } else {
// // //                     console.error('Movie not found');
// // //                 }
// // //             })
// // //             .catch(error => {
// // //                 console.error('There was an error fetching the movie details!', error);
// // //             });
// // //     }, [id]);

// // //     const handleSeatSelection = (seatNumber) => {
// // //         setSelectedSeats(prev => {
// // //             const isSelected = prev.includes(seatNumber);
// // //             if (isSelected) {
// // //                 return prev.filter(seat => seat !== seatNumber);
// // //             } else {
// // //                 return [...prev, seatNumber];
// // //             }
// // //         });
// // //     };

// // //     const totalPrice = selectedSeats.length > 1 ? selectedSeats.length * seatPrice : seatPrice;;
// // //     return (
// // //         <div className="container mt-4">
// // //             <div className="row">
// // //                 <div className="col-md-6">
// // //                     {movie ? (
// // //                         <div className="movie-details">
// // //                             <h1>{movie.Title}</h1>
// // //                             <img src={movie.Poster} alt={movie.Title} className="img-fluid rounded" />
// // //                             <p><strong>Director:</strong> {movie.Director}</p>
// // //                             <p><strong>Actors:</strong> {movie.Actors}</p>
// // //                             <p><strong>Genre:</strong> {movie.Genre}</p>
// // //                             <p><strong>Rating:</strong> {movie.imdbRating}</p>
// // //                         </div>
// // //                     ) : (
// // //                         <p>Loading...</p>
// // //                     )}
// // //                 </div>
// // //                 <div className="col-md-6 booking-container">
// // //                     <div className="book-tickets">
// // //                         <h3>Book Your Tickets</h3>
// // //                         <form>
// // //                             <div className="form-group">
// // //                                 <label>Choose a City</label>
// // //                                 <select className="form-control">
// // //                                     <option>Select</option>
// // //                                     <option>Pune</option>
// // //                                     <option>Mumbai</option>
// // //                                     <option>Nanded</option>
// // //                                 </select>
// // //                             </div>
// // //                             <div className="form-group">
// // //                                 <label>Choose a Theatre</label>
// // //                                 <select className="form-control">
// // //                                     <option>Select</option>
// // //                                     <option>PVR</option>
// // //                                     <option>City Pride</option>
// // //                                     <option>INOX Cinemas</option>
// // //                                 </select>
// // //                             </div>
// // //                             <div className="form-group">
// // //                                 <label>Choose a ShowTime</label>
// // //                                 <select className="form-control">
// // //                                     <option>Select</option>
// // //                                     <option>9 AM</option>
// // //                                     <option>12 PM</option>
// // //                                     <option>3 PM</option>
// // //                                     <option>6 PM</option>
// // //                                     <option>9 PM</option>
// // //                                 </select>
// // //                             </div>
// // //                             <div className="form-group">
// // //                                 <label>Select a Date</label>
// // //                                 <input type="date" className="form-control" />
// // //                             </div>
// // //                         </form>
// // //                     </div>
// // //                     <div className="seating-arrangement mt-2">
// // //                         <h3>Choose Your Seats</h3>
// // //                         <div className="seat-map">
// // //                             {Array.from({ length: 5 }).map((_, rowIndex) => (
// // //                                 <div className="seat-row" key={rowIndex}>
// // //                                     {Array.from({ length: 10 }).map((_, seatIndex) => {
// // //                                         const seatNumber = rowIndex * 10 + seatIndex + 1;
// // //                                         return (
// // //                                             <div
// // //                                                 key={seatNumber}
// // //                                                 className={`seat ${selectedSeats.includes(seatNumber) ? 'selected' : 'available'}`}
// // //                                                 onClick={() => handleSeatSelection(seatNumber)}
// // //                                             >
// // //                                                 {seatNumber}
// // //                                                 <br/>

// // //                                             </div>
// // //                                         );
// // //                                     })}
// // //                                 </div>
// // //                             ))}
// // //                         </div>
// // //                     </div>

// // //                     <div className="total-price mt-2">
// // //                         <h4>Total Price: ${totalPrice}</h4>
// // //                         <button className="btn btn-primary">Book Now</button>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }















// // import React, { useEffect, useState } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import axios from 'axios';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './MovieDetail.css';

// // export default function MovieDetail() {
// //     const { id } = useParams();
// //     const [movie, setMovie] = useState(null);
// //     const [selectedSeats, setSelectedSeats] = useState([]);
// //     const [seatPrice] = useState(100);
// //     const navigate = useNavigate();
// //     const API_KEY = '1e4a48ff'; // Replace with your OMDb API key

// //     useEffect(() => {
// //         axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
// //             .then(response => {
// //                 if (response.data.Response === "True") {
// //                     setMovie(response.data);
// //                 } else {
// //                     console.error('Movie not found');
// //                 }
// //             })
// //             .catch(error => {
// //                 console.error('There was an error fetching the movie details!', error);
// //             });
// //     }, [id]);

// //     const handleSeatSelection = (seatNumber) => {
// //         setSelectedSeats(prev => {
// //             const isSelected = prev.includes(seatNumber);
// //             if (isSelected) {
// //                 return prev.filter(seat => seat !== seatNumber);
// //             } else {
// //                 return [...prev, seatNumber];
// //             }
// //         });
// //     };

// //     const totalPrice = selectedSeats.length > 1 ? selectedSeats.length * seatPrice : seatPrice;

// //     const handleBook = () => {
// //         navigate('/payment', { state: { selectedSeats, totalPrice } });
// //     }


// //     return (
// //         <div className="container mt-4">
// //             <div className="movie-details">
// //                 {movie ? (
// //                     <div>
// //                         <h1>{movie.Title}</h1>
// //                         <img src={movie.Poster} alt={movie.Title} className="img-fluid rounded" />
// //                         <p><strong>Director:</strong> {movie.Director}</p>
// //                         <p><strong>Actors:</strong> {movie.Actors}</p>
// //                         <p><strong>Genre:</strong> {movie.Genre}</p>
// //                         <p><strong>Rating:</strong> {movie.imdbRating}</p>
// //                     </div>
// //                 ) : (
// //                     <p>Loading...</p>
// //                 )}
// //             </div>
// //             <div className="booking-container">
// //                 <div className="book-tickets">
// //                     <h3>Book Your Tickets</h3>
// //                     <form>
// //                         <div className="form-group">
// //                             <label>Choose a City</label>
// //                             <select className="form-control">
// //                                 <option>Select</option>
// //                                 <option>Pune</option>
// //                                 <option>Mumbai</option>
// //                                 <option>Nanded</option>
// //                             </select>
// //                         </div>
// //                         <div className="form-group">
// //                             <label>Choose a Theatre</label>
// //                             <select className="form-control">
// //                                 <option>Select</option>
// //                                 <option>PVR</option>
// //                                 <option>City Pride</option>
// //                                 <option>INOX Cinemas</option>
// //                             </select>
// //                         </div>
// //                         <div className="form-group">
// //                             <label>Choose a ShowTime</label>
// //                             <select className="form-control">
// //                                 <option>Select</option>
// //                                 <option>9 AM</option>
// //                                 <option>12 PM</option>
// //                                 <option>3 PM</option>
// //                                 <option>6 PM</option>
// //                                 <option>9 PM</option>
// //                             </select>
// //                         </div>
// //                         <div className="form-group">
// //                             <label>Select a Date</label>
// //                             <input type="date" className="form-control" />
// //                         </div>
// //                     </form>
// //                 </div>
// //                 <div className="seating-arrangement mt-2">
// //                     <h3>Choose Your Seats</h3>
// //                     <div className="seat-map">
// //                         {Array.from({ length: 5 }).map((_, rowIndex) => (
// //                             <div className="seat-row" key={rowIndex}>
// //                                 {Array.from({ length: 10 }).map((_, seatIndex) => {
// //                                     const seatNumber = rowIndex * 10 + seatIndex + 1;
// //                                     return (
// //                                         <div
// //                                             key={seatNumber}
// //                                             className={`seat ${selectedSeats.includes(seatNumber) ? 'selected' : 'available'}`}
// //                                             onClick={() => handleSeatSelection(seatNumber)}
// //                                         >
// //                                             {seatNumber}
// //                                         </div>
// //                                     );
// //                                 })}
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //                 {selectedSeats.length > 0 && (
// //                     <div className="total-price mt-2">
// //                         <h4>Total Price: ${totalPrice}</h4>
// //                         <button className="btn btn-primary" onClick={handleBook}>Book Now</button>
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }







// // import React, { useEffect, useState } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import axios from 'axios';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './MovieDetail.css';

// // export default function MovieDetail() {
// //     const { id } = useParams();
// //     const [movie, setMovie] = useState(null);
// //     const [selectedSeats, setSelectedSeats] = useState([]);
// //     const [seatPrice] = useState(100);
// //     const [city, setCity] = useState('');
// //     const [theatre, setTheatre] = useState('');
// //     const [showTime, setShowTime] = useState('');
// //     const [date, setDate] = useState('');
// //     const navigate = useNavigate();
// //     const API_KEY = '1e4a48ff'; // Replace with your OMDb API key

// //     useEffect(() => {
// //         axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
// //             .then(response => {
// //                 if (response.data.Response === "True") {
// //                     setMovie(response.data);
// //                 } else {
// //                     console.error('Movie not found');
// //                 }
// //             })
// //             .catch(error => {
// //                 console.error('There was an error fetching the movie details!', error);
// //             });
// //     }, [id]);

// //     const handleSeatSelection = (seatNumber) => {
// //         setSelectedSeats(prev => {
// //             const isSelected = prev.includes(seatNumber);
// //             if (isSelected) {
// //                 return prev.filter(seat => seat !== seatNumber);
// //             } else {
// //                 return [...prev, seatNumber];
// //             }
// //         });
// //     };

// //     const totalPrice = selectedSeats.length > 1 ? selectedSeats.length * seatPrice : seatPrice;

// //     const handleBook = () => {
// //         navigate('/payment', { state: { movie, selectedSeats, totalPrice, city, theatre, showTime, date } });
// //     };

// //     return (
// //         <div className="container mt-4">
// //             <div className="movie-details">
// //                 {movie ? (
// //                     <div>
// //                         <h1>{movie.Title}</h1>
// //                         <img src={movie.Poster} alt={movie.Title} className="img-fluid rounded" />
// //                         <p><strong>Director:</strong> {movie.Director}</p>
// //                         <p><strong>Actors:</strong> {movie.Actors}</p>
// //                         <p><strong>Genre:</strong> {movie.Genre}</p>
// //                         <p><strong>Rating:</strong> {movie.imdbRating}</p>
// //                     </div>
// //                 ) : (
// //                     <p>Loading...</p>
// //                 )}
// //             </div>
// //             <div className="booking-container mt-6">
// //                 <div className="book-tickets">
// //                     <h3>Book Your Tickets</h3>
// //                     <form>
// //                         <div className="form-group">
// //                             <label>Choose a City</label>
// //                             <select className="form-control" value={city} onChange={(e) => setCity(e.target.value)}>
// //                                 <option value="">Select</option>
// //                                 <option value="Pune">Pune</option>
// //                                 <option value="Mumbai">Mumbai</option>
// //                                 <option value="Nanded">Nanded</option>
// //                             </select>
// //                         </div>
// //                         <div className="form-group">
// //                             <label>Choose a Theatre</label>
// //                             <select className="form-control" value={theatre} onChange={(e) => setTheatre(e.target.value)}>
// //                                 <option value="">Select</option>
// //                                 <option value="PVR">PVR</option>
// //                                 <option value="City Pride">City Pride</option>
// //                                 <option value="INOX Cinemas">INOX Cinemas</option>
// //                             </select>
// //                         </div>
// //                         <div className="form-group">
// //                             <label>Choose a ShowTime</label>
// //                             <select className="form-control" value={showTime} onChange={(e) => setShowTime(e.target.value)}>
// //                                 <option value="">Select</option>
// //                                 <option value="9 AM">9 AM</option>
// //                                 <option value="12 PM">12 PM</option>
// //                                 <option value="3 PM">3 PM</option>
// //                                 <option value="6 PM">6 PM</option>
// //                                 <option value="9 PM">9 PM</option>
// //                             </select>
// //                         </div>
// //                         <div className="form-group">
// //                             <label>Select a Date</label>
// //                             <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
// //                         </div>
// //                     </form>
// //                 </div>
// //                 <div className="seating-arrangement mt-2">
// //                     <h3>Choose Your Seats</h3>
// //                     <div className="seat-map">
// //                         {Array.from({ length: 5 }).map((_, rowIndex) => (
// //                             <div className="seat-row" key={rowIndex}>
// //                                 {Array.from({ length: 10 }).map((_, seatIndex) => {
// //                                     const seatNumber = rowIndex * 10 + seatIndex + 1;
// //                                     return (
// //                                         <div
// //                                             key={seatNumber}
// //                                             className={`seat ${selectedSeats.includes(seatNumber) ? 'selected' : 'available'}`}
// //                                             onClick={() => handleSeatSelection(seatNumber)}
// //                                         >
// //                                             {seatNumber}
// //                                         </div>
// //                                     );
// //                                 })}
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //                 {selectedSeats.length > 0 && (
// //                     <div className="total-price mt-2">
// //                         <h4>Total Price: ${totalPrice}</h4>
// //                         <button className="btn btn-primary" onClick={handleBook}>Book Now</button>
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }















// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './MovieDetail.css';

// export default function MovieDetail() {
//     const { id } = useParams();
//     const [movie, setMovie] = useState(null);
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const [seatPrice] = useState(100);
//     const [city, setCity] = useState('');
//     const [theatre, setTheatre] = useState('');
//     const [showTime, setShowTime] = useState('');
//     const [date, setDate] = useState('');
//     const navigate = useNavigate();
//     const API_KEY = '1e4a48ff'; // Replace with your OMDb API key

//     useEffect(() => {
//         axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
//             .then(response => {
//                 if (response.data.Response === "True") {
//                     setMovie(response.data);
//                 } else {
//                     console.error('Movie not found');
//                 }
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the movie details!', error);
//             });
//     }, [id]);

//     const handleSeatSelection = (seatNumber) => {
//         setSelectedSeats(prev => {
//             const isSelected = prev.includes(seatNumber);
//             if (isSelected) {
//                 return prev.filter(seat => seat !== seatNumber);
//             } else {
//                 return [...prev, seatNumber];
//             }
//         });
//     };

//     const totalPrice = selectedSeats.length > 1 ? selectedSeats.length * seatPrice : seatPrice;

//     const handleBook = () => {
//         navigate('/payment', { state: { movie, selectedSeats, totalPrice, city, theatre, showTime, date } });
//     };
//     console.log(movie)
//     return (
//         <div className="movie-detail-container">
//             <div className="movie-details">
//                 {movie ? (
//                     <div className="movie-info">
//                         <h1>{movie.Title}</h1>
//                         <img src={movie.Poster} alt={movie.Title} className="movie-poster img-fluid rounded" />
//                         <p><strong>Director:</strong> {movie.Director}</p>
//                         <p><strong>Actors:</strong> {movie.Actors}</p>
//                         <p><strong>Genre:</strong> {movie.Genre}</p>
//                         <p><strong>Rating:</strong> {movie.imdbRating}</p>
//                     </div>
//                 ) : (
//                     <p>Loading...</p>
//                 )}
//             </div>
//             <div className="booking-details">
//                 <div className="booking-form">
//                     <h3>Book Your Tickets</h3>
//                     <form>
//                         <div className="form-group">
//                             <label>Choose a City</label>
//                             <select className="form-control" value={city} onChange={(e) => setCity(e.target.value) } required>
//                                 <option value="">Select</option>
//                                 <option value="Pune">Pune</option>
//                                 <option value="Mumbai">Mumbai</option>
//                                 <option value="Nanded">Nanded</option>
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <label>Choose a Theatre</label>
//                             <select className="form-control" value={theatre} onChange={(e) => setTheatre(e.target.value)}>
//                                 <option value="">Select</option>
//                                 <option value="PVR">PVR</option>
//                                 <option value="City Pride">City Pride</option>
//                                 <option value="INOX Cinemas">INOX Cinemas</option>
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <label>Choose a ShowTime</label>
//                             <select className="form-control" value={showTime} onChange={(e) => setShowTime(e.target.value)}>
//                                 <option value="">Select</option>
//                                 <option value="9 AM">9 AM</option>
//                                 <option value="12 PM">12 PM</option>
//                                 <option value="3 PM">3 PM</option>
//                                 <option value="6 PM">6 PM</option>
//                                 <option value="9 PM">9 PM</option>
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <label>Select a Date</label>
//                             <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
//                         </div>
//                     </form>
//                 </div>
//                 <div className="seating-arrangement">
//                     <h3>Choose Your Seats</h3>
//                     <div className="seat-map">
//                         {Array.from({ length: 5 }).map((_, rowIndex) => (
//                             <div className="seat-row" key={rowIndex}>
//                                 {Array.from({ length: 10 }).map((_, seatIndex) => {
//                                     const seatNumber = rowIndex * 10 + seatIndex + 1;
//                                     return (
//                                         <div
//                                             key={seatNumber}
//                                             className={`seat ${selectedSeats.includes(seatNumber) ? 'selected-seat' : 'available-seat'}`}
//                                             onClick={() => handleSeatSelection(seatNumber)}
//                                         >
//                                             {seatNumber}
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 {selectedSeats.length > 0 && (
//                     <div className="total-price">
//                         <h4>Total Price: ${totalPrice}</h4>
//                         <button className="book-now-btn" onClick={handleBook}>Book Now</button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }















import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieDetail.css';

export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatPrice] = useState(100);
    const [city, setCity] = useState('');
    const [theatre, setTheatre] = useState('');
    const [showTime, setShowTime] = useState('');
    const [date, setDate] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const API_KEY = '1e4a48ff'; // Replace with your OMDb API key

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
            .then(response => {
                if (response.data.Response === "True") {
                    setMovie(response.data);
                } else {
                    console.error('Movie not found');
                }
            })
            .catch(error => {
                console.error('There was an error fetching the movie details!', error);
            });
    }, [id]);

    const validateForm = () => {
        const newErrors = {};
        if (!city) newErrors.city = 'City is required';
        if (!theatre) newErrors.theatre = 'Theatre is required';
        if (!showTime) newErrors.showTime = 'Showtime is required';
        if (!date) newErrors.date = 'Date is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSeatSelection = (seatNumber) => {
        setSelectedSeats(prev => {
            const isSelected = prev.includes(seatNumber);
            if (isSelected) {
                return prev.filter(seat => seat !== seatNumber);
            } else {
                return [...prev, seatNumber];
            }
        });
    };

    const totalPrice = selectedSeats.length > 1 ? selectedSeats.length * seatPrice : seatPrice;

    const handleBook = () => {
        if (validateForm()) {
            navigate('/payment', { state: { movie, selectedSeats, totalPrice, city, theatre, showTime, date } });
        }
    };

    return (
        <div className="movie-detail-container">
            <div className="movie-details">
                {movie ? (
                    <div className="movie-info">
                        <h1>{movie.Title}</h1>
                        <img src={movie.Poster} alt={movie.Title} className="movie-poster img-fluid rounded" />
                        <p><strong>Director:</strong> {movie.Director}</p>
                        <p><strong>Actors:</strong> {movie.Actors}</p>
                        <p><strong>Genre:</strong> {movie.Genre}</p>
                        <p><strong>Rating:</strong> {movie.imdbRating}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <div className="booking-details">
                <div className="booking-form">
                    <h3>Book Your Tickets</h3>
                    <form>
                        <div className="form-group">
                            <label>Choose a City</label>
                            <select
                                className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                                value={city}
                                onChange={(e) => { setCity(e.target.value); setErrors(prev => ({ ...prev, city: '' })); }}
                            >
                                <option value="">Select</option>
                                <option value="Pune">Pune</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Nanded">Nanded</option>
                            </select>
                            {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                        </div>
                        <div className="form-group">
                            <label>Choose a Theatre</label>
                            <select
                                className={`form-control ${errors.theatre ? 'is-invalid' : ''}`}
                                value={theatre}
                                onChange={(e) => { setTheatre(e.target.value); setErrors(prev => ({ ...prev, theatre: '' })); }}
                            >
                                <option value="">Select</option>
                                <option value="PVR">PVR</option>
                                <option value="City Pride">City Pride</option>
                                <option value="INOX Cinemas">INOX Cinemas</option>
                            </select>
                            {errors.theatre && <div className="invalid-feedback">{errors.theatre}</div>}
                        </div>
                        <div className="form-group">
                            <label>Choose a ShowTime</label>
                            <select
                                className={`form-control ${errors.showTime ? 'is-invalid' : ''}`}
                                value={showTime}
                                onChange={(e) => { setShowTime(e.target.value); setErrors(prev => ({ ...prev, showTime: '' })); }}
                            >
                                <option value="">Select</option>
                                <option value="9 AM">9 AM</option>
                                <option value="12 PM">12 PM</option>
                                <option value="3 PM">3 PM</option>
                                <option value="6 PM">6 PM</option>
                                <option value="9 PM">9 PM</option>
                            </select>
                            {errors.showTime && <div className="invalid-feedback">{errors.showTime}</div>}
                        </div>
                        <div className="form-group">
                            <label>Select a Date</label>
                            <input
                                type="date"
                                className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                                value={date}
                                onChange={(e) => { setDate(e.target.value); setErrors(prev => ({ ...prev, date: '' })); }}
                            />
                            {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                        </div>
                    </form>
                </div>
                <div className="seating-arrangement">
                    <h3>Choose Your Seats</h3>
                    <div className="seat-map">
                        {Array.from({ length: 5 }).map((_, rowIndex) => (
                            <div className="seat-row" key={rowIndex}>
                                {Array.from({ length: 10 }).map((_, seatIndex) => {
                                    const seatNumber = rowIndex * 10 + seatIndex + 1;
                                    return (
                                        <div
                                            key={seatNumber}
                                            className={`seat ${selectedSeats.includes(seatNumber) ? 'selected-seat' : 'available-seat'}`}
                                            onClick={() => handleSeatSelection(seatNumber)}
                                        >
                                            {seatNumber}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
                {selectedSeats.length > 0 && (
                    <div className="total-price">
                        <h4>Total Price: ${totalPrice}</h4>
                        <button className="book-now-btn" onClick={handleBook}>Book Now</button>
                    </div>
                )}
            </div>
        </div>
    );
}
