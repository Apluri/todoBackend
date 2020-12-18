// if you wish to use your own database replace following values

/* uncomment to use local variables
process.env.host = "your.database.com";
process.env.user = "username";
process.env.password = "password";
process.env.database = "database name";
*/

const config = {
  connectionLimit: 10,
  host: process.env.host, // host address for database
  user: process.env.user, // username for database
  password: process.env.password, // password
  database: process.env.database, // database name
};
module.exports = config;
