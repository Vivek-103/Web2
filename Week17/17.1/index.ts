
import { Client } from 'pg';

// Ideally, these should be environment variables
const POSTGRES_URL = "postgres://postgres:your_password@localhost:5432/postgres";

async function signup(username: string, email: string) {
    const client = new Client({
        connectionString: POSTGRES_URL
    });

    try {
        await client.connect();
        console.log("Connected to PostgreSQL database");

        // Create table if it doesn't exist
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        `;
        await client.query(createTableQuery);
        console.log("Verified 'users' table exists");

        // Insert new user
        const insertQuery = `
            INSERT INTO users (username, email) 
            VALUES ($1, $2) 
            RETURNING id, username, email, created_at;
        `;
        const values = [username, email];

        const res = await client.query(insertQuery, values);
        console.log("User created successfully:", res.rows[0]);

    } catch (err: any) { // Type 'any' used here for simplicity in error handling
        if (err.code === '23505') {
            console.error("Error: User with this username or email already exists.");
        } else {
            console.error("Error signing up user:", err);
        }
    } finally {
        await client.end();
        console.log("Connection closed");
    }
}

// Example usage
signup("new_user_123", "user123@example.com");
