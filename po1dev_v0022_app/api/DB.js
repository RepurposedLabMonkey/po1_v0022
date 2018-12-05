const pgp = require('pg-promise')(); //http postgres client

//url...protocol://user:password@host:port/database
const db = pgp("postgres://postgres:postgres@localhost:5432/postgres");

module.exports = db;