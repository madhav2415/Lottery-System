import React, { useState, useEffect } from 'react';
import './Homepage.css'; // Import a CSS file for styling

function Homepage() {
    const [jackpot, setJackpot] = useState(0);
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
        // Fetch jackpot and countdown from the backend
        fetch('/api/jackpot')
            .then(response => response.json())
            .then(data => {
                setJackpot(data.jackpot);
                setCountdown(data.countdown);
            });
    }, []);

    return (
        <div className="homepage">
            <h1>Lottery System</h1>
            <div className="jackpot-info">
                <p>Current Jackpot: <span className="jackpot-amount">${jackpot}</span></p>
                <p>Next Draw In: <span className="countdown">{countdown}</span></p>
            </div>
            <div className="rules">
                <h2>Rules</h2>
                <ul>
                    <li>Each ticket costs $10.</li>
                    <li>Draws occur every 24 hours.</li>
                    <li>Winners are selected randomly.</li>
                </ul>
            </div>
        </div>
    );
}

export default Homepage; 