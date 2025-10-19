// test-connection.js
require('dotenv').config();
const { Pool } = require('pg');

console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Found' : 'NOT FOUND');
console.log('DATABASE_URL length:', process.env.DATABASE_URL?.length);
console.log('Attempting connection with Pool...');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

pool.query('SELECT NOW()')
  .then(res => {
    console.log('✅ Connected successfully with Pool!');
    console.log('Server time:', res.rows[0].now);
    return pool.end();
  })
  .catch(err => {
    console.error('❌ Pool connection error:', err.message);
    console.error('Full error:', err);
  });