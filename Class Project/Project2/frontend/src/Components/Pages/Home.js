// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Navbar.css';
// import { useNavigate } from 'react-router-dom';

// export default function Home() {

//     const [loggedInUser, setLoggedInUser] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         setLoggedInUser(localStorage.getItem('loggedInUser'))
//     })

//     const handleLogOut = (e) => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('loggedInUser');
//         setTimeout(() => {
//             navigate('/login');
//         },1000)
//     }
//     return (
//         <>

//             {/* <h2>Welecome Home</h2> */}
//             <div className="navbar">
//                 <div className="bar">
//                     <h1>🎬Movie Booking</h1>
//                 </div>
//                 <div>
//                     <input type="search" placeholder="Search movie here..." />
//                 </div>

//                 <h3>Welcome , {loggedInUser}</h3>

//                 <div className="btns">

//                     <button className="btn btn-info">Help</button>
//                     <button onClick={handleLogOut} className="btn btn-danger">Log Out</button>

//                 </div>
//             </div>


//         </>
//     )
// }





















// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Navbar.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Home() {
//     const [loggedInUser, setLoggedInUser] = useState('');
//     const [movies, setMovies] = useState([]);
//     const navigate = useNavigate();
//     const API_KEY = 'b38dec54'; // Replace with your OMDb API key

//     useEffect(() => {
//         const user = localStorage.getItem('loggedInUser');
//         setLoggedInUser(user);

//         const token = localStorage.getItem('token');
//         if (token) {
//             // Fetch movies from OMDb API
//             axios.get(`http://www.omdbapi.com/?s=batman&apikey=${API_KEY}`)
//                 .then(response => {
//                     if (response.data.Response === "True") {
//                         setMovies(response.data.Search);
//                     } else {
//                         console.error('No movies found');
//                     }
//                 })
//                 .catch(error => {
//                     console.error('There was an error fetching the movies!', error);
//                 });
//         }
//     }, []);

//     const handleLogOut = (e) => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('loggedInUser');
//         setTimeout(() => {
//             navigate('/login');
//         }, 1000)
//     }

//     return (
//         <>
//             <div className="navbar">
//                 <div className="bar">
//                     <h1>🎬Movie Booking</h1>
//                 </div>
//                 <div>
//                     <input type="search" placeholder="Search movie here..." />
//                 </div>

//                 <h3>Welcome , {loggedInUser}</h3>

//                 <div className="btns">
//                     <button className="btn btn-info">Help</button>
//                     <button onClick={handleLogOut} className="btn btn-danger">Log Out</button>
//                 </div>
//             </div>

//             <div className="movie-list">
//                 {movies.length > 0 ? (
//                     movies.map(movie => (
//                         <div key={movie.imdbID} className="movie">
//                             <h2>{movie.Title}</h2>
//                             <p>Year: {movie.Year}</p>
//                             <img src={movie.Poster} alt={movie.Title} />
//                         </div>
//                     ))
//                 ) : (
//                     <p>No movies found</p>
//                 )}
//             </div>
//         </>
//     )
// }











import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);
    const navigate = useNavigate();
    const API_KEY = '1e4a48ff'; // Replace with your OMDb API key

    useEffect(() => {
        const user = localStorage.getItem('loggedInUser');
        setLoggedInUser(user);

        const token = localStorage.getItem('token');
        if (token) {
           
            axios.get(`http://www.omdbapi.com/?s=joker&apikey=${API_KEY}`)
                .then(response => {
                    if (response.data.Response === "True") {
                        setMovies(response.data.Search);
                        setFilteredMovies(response.data.Search);
                    } else {
                        console.error('No movies found');
                    }
                })
                .catch(error => {
                    console.error('There was an error fetching the movies!', error);
                });
        }
    }, []);

    const handleLogOut = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    }

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        const filtered = movies.filter(movie =>
            movie.Title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredMovies(filtered);
    }

    const handleBook = (id) => {
        navigate(`/movie/${id}`)
    }
    return (
        <>
            <div className="navbar">
                <div className="bar">
                    <h1>🎬Movie Booking</h1>
                </div>
                <div>
                    <input
                        type="search"
                        placeholder="Search movie here..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>

                <h3>Welcome, {loggedInUser}</h3>

                <div className="btns">
                    <button className="btn btn-info" style={{color:'white'}}>MyTickets</button>
                    <button onClick={handleLogOut} className="btn btn-danger">Log Out</button>
                </div>
            </div>
            
            <div className="movie-list">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map(movie => (
                        <div key={movie.imdbID} className="movie">
                            <h2>{movie.Title}</h2>
                            <p>Year: {movie.Year}</p>
                            <img src={movie.Poster} alt={movie.Title} />
                            <button onClick={() => handleBook(movie.imdbID)} className='btn button-book'>Book now</button>
                        </div>
                    ))
                ) : (
                    <p>No movies found</p>
                )}
            </div>
            
        </>
    );
}














// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Navbar.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Home() {
//     const [loggedInUser, setLoggedInUser] = useState('');
//     const [movies, setMovies] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [filteredMovies, setFilteredMovies] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const user = localStorage.getItem('loggedInUser');
//         setLoggedInUser(user);

//         const token = localStorage.getItem('token');
//         if (token) {
//             axios.get('https://api.sampleapis.com/movies/')
//                 .then(response => {
//                     setMovies(response.data);
//                     setFilteredMovies(response.data);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching movie data:', error);
//                 });
//         }
//     }, []);

//     const handleLogOut = (e) => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('loggedInUser');
//         setTimeout(() => {
//             navigate('/login');
//         }, 1000);
//     }

//     const handleSearch = (e) => {
//         setSearchQuery(e.target.value);
//         const filtered = movies.filter(movie =>
//             movie.title.toLowerCase().includes(e.target.value.toLowerCase())
//         );
//         setFilteredMovies(filtered);
//     }

//     return (
//         <>
//             <div className="navbar">
//                 <div className="bar">
//                     <h1>🎬Movie Booking</h1>
//                 </div>
//                 <div>
//                     <input
//                         type="search"
//                         placeholder="Search movie here..."
//                         value={searchQuery}
//                         onChange={handleSearch}
//                     />
//                 </div>

//                 <h3>Welcome, {loggedInUser}</h3>

//                 <div className="btns">
//                     <button className="btn btn-info">Help</button>
//                     <button onClick={handleLogOut} className="btn btn-danger">Log Out</button>
//                 </div>
//             </div>
//             <div className="movie-list">
//                 {filteredMovies.length > 0 ? (
//                     filteredMovies.map(movie => (
//                         <div key={movie.id} className="movie">
//                             <h2>{movie.title}</h2>
//                             <img 
//                                 src={movie.poster_url || 'default-image-url.jpg'} 
//                                 alt={movie.title} 
//                                 className="movie-poster" 
//                             />
//                         </div>
//                     ))
//                 ) : (
//                     <p>No movies found</p>
//                 )}
//             </div>
//         </>
//     );
// }
