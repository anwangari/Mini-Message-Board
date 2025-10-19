// populatedb.js handles database population and initialization of data
// src/models/db/populatedb.js

require('dotenv').config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  message_id SERIAL PRIMARY KEY,
  "user" TEXT NOT NULL,
  text TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO messages ("user", text, timestamp) 
VALUES
  ('Amando', 'Hi there!', CURRENT_TIMESTAMP),
  ('Charles', 'Hello World!', CURRENT_TIMESTAMP),
  ('Sarah', 'Welcome to the message board!', CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  
  try {
    await client.connect();
    await client.query(SQL);
    console.log("done - database populated successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.end();
  }
}

main();