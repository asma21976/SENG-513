
import React from 'react';
import line from './line.svg';
import circle from './circle.svg';
import './pages.css';
import { useNavigate } from 'react-router-dom';

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap')
</style>

function Verify() {
    return (
        <div className="verify">
            <div className="verify_logo">
                <img src={circle} className="App-circle" alt="circle" />
                <img src={line} className="App-line" alt="line" />
            </div>
            <div className="verify_information">
                <div className="verify_title">
                    <h1>Verifying Business</h1>
                </div>
                <div className="verify_description">
                    <p>This may take up to 24-48 hours.</p>
                </div>
            </div> 
        </div>    
    );
}

export default Verify;
