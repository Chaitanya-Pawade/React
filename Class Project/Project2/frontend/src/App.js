
import './App.css';
import LoginPage from "../src/Components/Pages/LoginPage"
import SignupPage from "../src/Components/Pages/SignupPage"
import Home from './Components/Pages/Home';

import { Navigate, Route, Routes } from 'react-router-dom';
import MovieDetail from './Components/Pages/MovieDetail';
import Payment from './Components/Pages/Payment';
import Confirmation from './Components/Pages/Confirmation';
import BookingStatus from './Components/Pages/BookingStatus';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/confirmation' element={<Confirmation />} /> 
        <Route path="/booking-status" element={<BookingStatus />} />
      </Routes>
    </div>
  );
}

export default App;
