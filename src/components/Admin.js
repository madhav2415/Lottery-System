import React, { useState, useEffect } from 'react';

function Admin() {
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        fetch('/api/participants')
            .then(response => response.json())
            .then(data => setParticipants(data));
    }, []);

    const triggerDraw = () => {
        fetch('/api/draw', { method: 'POST' })
            .then(response => response.json())
            .then(data => alert(data.message));
    };

    return (
        <div>
            <h2>Admin Panel</h2>
            <button onClick={triggerDraw}>Trigger Draw</button>
            <h3>Participants</h3>
            <ul>
                {participants.map(participant => (
                    <li key={participant.id}>{participant.name} - {participant.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default Admin; 