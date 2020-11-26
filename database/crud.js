const mysql = require("mysql");
const config = require("./config.js");
config.connectionLimit = 10;
let connection = null;

const connectionFunctions = {
  connect: () => {
    return new Promise((resolve, reject) => {
      connection = mysql.createPool(config);
      connection
        ? resolve("Connection established")
        : reject(new Error("Connection failed"));
    });
  },

  close: () => {
    return new Promise((resolve) => {
      connection.end();
      resolve("Connection closed.");
    });
  },

  findAll: () => {
    return new Promise((resolve, reject) => {
      if (connection) {
        const selectAll = `SELECT * FROM ${mysql.escapeId("tasks")}`;
        connection.query(selectAll, (err, tasks) => {
          // const allTasks = JSON.parse(JSON.stringify(tasks));
          err ? reject(err) : resolve(tasks);
        });
      } else {
        reject(new Error("Connection failed"));
      }
    });
  },

  findById: (id) => {
    return new Promise((resolve, reject) => {});
  },

  save: (task) => {
    return new Promise((resolve, reject) => {
      const sqlInsertion = `INSERT INTO ${mysql.escapeId("tasks")} SET ?`;
      connection.query(sqlInsertion, [task], (err, tasks) => {
        err ? reject(err) : resolve(`added to id: ${tasks.insertId}`);
      });
    });
  },

  deleteAll: () => {
    return new Promise((resolve, reject) => {
      const deleteAll = `DELETE * FROM ${mysql.escapeId("tasks")}`;
      connection.query(deleteAll, (err, tasks) => {
        err
          ? reject(err)
          : tasks.affectedRows > 0
          ? resolve(`${tasks.affectedRows} row(s) affected`)
          : resolve("nothing to delete");
      });
    });
  },

  // TODO add sql injection protection for id
  deleteById: (id) => {
    return new Promise((resolve, reject) => {
      const deleteAll = `DELETE FROM ${mysql.escapeId("tasks")} WHERE id=${id}`;
      console.log(deleteAll);
      connection.query(deleteAll, (err, tasks) => {
        err
          ? reject(err)
          : tasks.affectedRows > 0
          ? resolve(`${tasks.affectedRows} row(s) affected`)
          : resolve("nothing to delete");
      });
    });
  },
};

module.exports = connectionFunctions;
