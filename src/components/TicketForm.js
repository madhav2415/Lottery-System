import React, { useState } from 'react';
import './TicketForm.css'; // Import a CSS file for styling

function TicketForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email) {
            setMessage('Please fill in all fields.');
            return;
        }
        fetch('/api/tickets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        }).then(response => response.json())
          .then(data => {
              setMessage('Ticket purchased successfully!');
              setName('');
              setEmail('');
          })
          .catch(error => setMessage('Error purchasing ticket.'));
    };

    return (
        <form onSubmit={handleSubmit} className="ticket-form">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <button type="submit">Buy Ticket</button>
            {message && <p className="message">{message}</p>}
        </form>
    );
}

export default TicketForm; 