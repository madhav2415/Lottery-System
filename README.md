# Lottery-System

This is a simple lottery system web application built with React for the frontend and Node.js with Express for the backend. The application allows users to purchase lottery tickets, view the current jackpot, and see the results of previous draws. An admin panel is also available for managing the lottery draws.

## Features

- **Homepage**: Displays the current jackpot, rules, and countdown to the next draw.
- **Ticket Purchase**: Users can enter their name and email to purchase a lottery ticket.
- **Results Page**: Shows the winner and previous winning tickets.
- **Admin Panel**: Allows an admin to manually trigger a lottery draw and view all participants.
- **Automated Draws**: A cron job automatically selects a winner every 24 hours.

## Technologies Used

- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Task Scheduling**: node-cron

## Getting Started

### Prerequisites

- Node.js and npm
- PostgreSQL

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/lottery-system.git
   cd lottery-system
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the database**:
   - Create a PostgreSQL database named `lottery`.
   - Run the SQL scripts in `database.sql` to create the necessary tables.

4. **Configure the database connection**:
   - Update the `src/server.js` file with your PostgreSQL credentials.

5. **Run the application**:
   - Start the backend server:
     ```bash
     node src/server.js
     ```
   - Start the frontend:
     ```bash
     npm start
     ```

6. **Access the application**:
   - Open your browser and go to `http://localhost:3000`.

## Project Structure

- **src/components**: Contains React components for the frontend.
- **src/server.js**: The main server file for the backend.
- **public**: Contains static files and the HTML template.

## API Endpoints

- **GET /api/jackpot**: Fetches the current jackpot and countdown.
- **POST /api/tickets**: Purchases a lottery ticket.
- **GET /api/results**: Fetches the results of previous draws.
- **POST /api/draw**: Manually triggers a lottery draw (admin only).
- **GET /api/participants**: Fetches all participants (admin only).

## Admin Panel

To access the admin panel, navigate to `/admin` in your browser. From here, you can manually trigger a draw and view all participants.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## Contact

For any questions or issues, please contact [your-email@example.com].
