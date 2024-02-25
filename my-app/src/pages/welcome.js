
import React from 'react';
import logo from './logo.svg';
import './pages.css';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        console.log("Get Started button clicked");
        navigate("/signup");
    };

    return (
        <div className="Welcomepage">
            <h1>Welcome to GHOSTED</h1>
            <p>Local finds, simplified with GHOSTED.</p>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}

export default Welcome;
