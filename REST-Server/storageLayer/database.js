'use strict';

const mariadb = require('mariadb');
const { database } = require('../configDogs.json');

const pool = mariadb.createPool({
    host: database.host,
    port: database.port,
    user: database.user,
    password: database.password,
    database: database.database,
    connectionLimit: 10,
    allowPublicKeyRetrieval: database.allowPublicKeyRetrieval
});

async function doQuery(query, params = []) {
    let connection;
    try {
        connection = await pool.getConnection();
        const result = await connection.query(query, params);
        return { queryResult: result, error: null };
    } catch (error) {
        console.error("Database query error:", error);
        return { queryResult: [], error };
    } finally {
        if (connection) connection.release();
    }
}

async function closePool() {
    try {
        await pool.end();
        console.log("Database connection closed.");
    } catch (error) {
        console.error("Error closing database:", error);
    }
}

module.exports = { doQuery, closePool };