
import React from 'react';
import logo from './logo.svg';
import './pages.css';
import { useNavigate } from 'react-router-dom';


function Welcome() {
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap')
    </style>
    
    const navigate = useNavigate();

    return (
        <div className="Welcomepage">
            <h1>Welcome to GHOSTED</h1>
            <p>Local finds, simplified with GHOSTED.</p>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}

export default Welcome;
