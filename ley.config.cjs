require('dotenv').config();
// ley.config.js
if (process.env.CONNECTION_STRING) {
  const { parse } = require('pg-connection-string');

  // Extract the connection information from the Heroku environment variable
  const { host, database, user, password } = parse(process.env.CONNECTION_STRING);

  // Set standard environment variables
  process.env.PGHOST = host;
  process.env.PGDATABASE = database;
  process.env.PGUSERNAME = user;
  process.env.PGPASSWORD = password;
}
