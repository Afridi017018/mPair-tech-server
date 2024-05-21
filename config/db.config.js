const mysql = require('mysql2');
const usersTable = require('../models/usersTable');
const { host, user, password } = require('../src/secret');

const connection = mysql.createConnection({
  host: host,
  user: user,
  password: password,
});


const dbName = 'auth';

const createDatabaseIfNotExists = () => {
  return new Promise((resolve, reject) => {
    connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`, (err) => {
      if (err) {
        return reject(err);
      }
      console.log(`Database ${dbName} checked/created successfully.`);
      resolve();
    });
  });
};

const connectToDatabase = () => {
  return new Promise((resolve, reject) => {
    connection.changeUser({ database: dbName }, (err) => {
      if (err) {
        return reject(err);
      }
      console.log(`Successfully connected to the database ${dbName}.`);
      connection.query(usersTable)
      resolve(connection);
    });
  });
};



module.exports = { connection, createDatabaseIfNotExists, connectToDatabase };
