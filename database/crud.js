const mysql = require("mysql");
const config = require("./config.js");
config.connectionLimit = 10;
let connection = null;

const connectionFunctions = {
  connect: () => {
    return new Promise((resolve, reject) => {});
  },

  close: () => {
    return new Promise((resolve) => {
      connection.end();
      resolve("Connection closed.");
    });
  },

  findAll: () => {
    return new Promise((resolve, reject) => {});
  },

  findById: (id) => {
    return new Promise((resolve, reject) => {});
  },

  save: (task) => {
    return new Promise((resolve, reject) => {});
  },

  deleteAll: () => {
    return new Promise((resolve, reject) => {});
  },
  deleteById: (id) => {
    return new Promise((resolve, reject) => {});
  },
};

module.exports = connectionFunctions;
