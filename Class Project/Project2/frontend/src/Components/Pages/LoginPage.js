import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css';

import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from "../../utils";





export default function LoginPage() {


    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('email and password are required')
        }
        try {
            const url = `http://localhost:5000/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/home')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100 login-container">
            <div className="card p-5 shadow-lg login-card">
                <h2 className="text-center mb-4 login-header">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group mb-3">
                        <label htmlFor="username" className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={loginInfo.email}
                            id="username"
                            className="form-control"
                            placeholder="Username" />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={loginInfo.password}
                            id="password"
                            className="form-control"
                            placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <span className="span-msg">Doesn't have an account?
                    <Link to='/signup'>Signup</Link>
                    </span>
                    
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}
