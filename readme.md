# JobPilot Backend

JobPilot Backend is a Node.js/Express REST API for a job portal application. It manages user authentication, job postings, and employer setup, and connects to a database for persistent storage.

## Features
- User authentication (login/signup)
- Employer setup and management
- Job posting, editing, and deletion
- Secure API endpoints with middleware

## Project Structure
```
jobpilot-backend/
├── config/           # Database configuration
├── controllers/      # Route controllers
├── middleware/       # Authentication middleware
├── models/           # Mongoose models
├── routes/           # API routes
├── server.js         # Entry point
├── package.json      # Dependencies
└── .env              # Environment variables
```

## Getting Started

### Prerequisites
- Node.js (v16 or above)
- MongoDB

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your `.env` file with the required environment variables (see `.env.example` if available)
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints
- `/api/auth` - Authentication routes
- `/api/employer` - Employer setup routes
- `/api/jobs` - Job management routes

## License
MIT
