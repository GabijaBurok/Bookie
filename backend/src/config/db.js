const sql = require('mssql');

const config = {
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: false,
        enableArithAbort: true,
    },
};

const connectDB = async () => {
    try {
        await sql.connect(config);
        console.log('Connect to SQL Server');
    }
    catch (err) {
        console.error('Database connection failed: ', err.message);
    }
};

module.exports = connectDB;