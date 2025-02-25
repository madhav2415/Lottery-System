const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cron = require('node-cron');

const app = express();
app.use(bodyParser.json());

const pool = new Pool({
    user: 'yourusername',
    host: 'localhost',
    database: 'lottery',
    password: 'yourpassword',
    port: 5432,
});

// Endpoint to get jackpot and countdown
app.get('/api/jackpot', async (req, res) => {
    try {
        // Fetch jackpot and countdown logic
        res.json({ jackpot: 1000, countdown: '23:59:59' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch jackpot information' });
    }
});

// Endpoint to purchase a ticket
app.post('/api/tickets', async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    try {
        await pool.query('INSERT INTO tickets (name, email) VALUES ($1, $2)', [name, email]);
        res.json({ message: 'Ticket purchased successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to purchase ticket' });
    }
});

// Endpoint to get results
app.get('/api/results', async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM results');
        res.json(results.rows);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch results' });
    }
});

// Cron job to select a winner every 24 hours
cron.schedule('0 0 * * *', async () => {
    try {
        const result = await pool.query('SELECT * FROM tickets ORDER BY RANDOM() LIMIT 1');
        const winner = result.rows[0];
        if (winner) {
            await pool.query('INSERT INTO results (winnerName, drawDate) VALUES ($1, NOW())', [winner.name]);
            console.log(`Winner selected: ${winner.name}`);
        } else {
            console.log('No tickets sold for this draw.');
        }
    } catch (error) {
        console.error('Error selecting winner:', error);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 