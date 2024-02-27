
import React from 'react';
import logo from './logo.svg';
import './pages.css';
import { useNavigate } from 'react-router-dom';

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap')
</style>

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
