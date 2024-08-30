import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignupPage.css';
import { ToastContainer } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../../utils";

export default function SignupPage() {

    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name , value);
        const copyOfSignupInfo = { ...signupInfo };
        copyOfSignupInfo[name] = value;

        setSignupInfo(copyOfSignupInfo);
    }
    console.log(signupInfo);

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password)
            return handleError('name , email and password are required')
        try {
            const url = 'http://localhost:5000/auth/signup';
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });

            const result = await response.json();
            console.log(result);

            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message)
            }

        } catch (error) {
            handleError(error)
        }

    }
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100 signup-container">
            <div className="card p-5 shadow-lg signup-card">
                <h2 className="text-center mb-4 signup-header">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="form-group mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" onChange={handleChange} id="name" name="name" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" onChange={handleChange} id="email" name="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" onChange={handleChange} id="password" name="password" className="form-control" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">SignUp</button>
                    <span className="span-msg">Already have an account?
                        <Link to="/login">Login</Link>
                    </span>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}
