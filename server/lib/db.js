let dbParams = {};
if (process.env.DB_URL) {
  dbParams.connectionString = process.env.DB_URL;
} else {
  dbParams = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  };
}

module.exports = dbParams;