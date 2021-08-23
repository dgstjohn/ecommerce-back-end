require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
// This is not being deployed to Heroku or otherwise publicly, 
// but we leave the first call in because the ternary operator is here
  ? new Sequelize(process.env.JAWSDB_URL)
  // We do use the .env file here to call sensitive information without exposing it
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
      port: 3306
    });

module.exports = sequelize;