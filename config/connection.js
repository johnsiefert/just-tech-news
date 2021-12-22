const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});


//All we're doing here is importing the base Sequelize class and using it to create a new connection to the database.
//The new Sequelize() function accepts the database name, MySQL username, and MySQL password
//parameters, then we also pass configuration settings. Once we're done, we simply export the connection.
//import the sequelize constructor from the library

module.exports = sequelize;