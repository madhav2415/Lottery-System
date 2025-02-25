import React, { useState, useEffect } from 'react';
import './Results.css'; // Import a CSS file for styling

function Results() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch('/api/results')
            .then(response => response.json())
            .then(data => setResults(data));
    }, []);

    return (
        <div className="results">
            <h2>Lottery Results</h2>
            <ul>
                {results.map(result => (
                    <li key={result.id}>
                        <span className="winner-name">Winner: {result.winnerName}</span> - 
                        <span className="draw-date"> Date: {new Date(result.drawDate).toLocaleDateString()}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Results; 