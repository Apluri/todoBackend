const mysql = require("mysql");
const config = require("./config.js");
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

  findAll: (table, orderBy) => {
    return new Promise((resolve, reject) => {
      if (connection) {
        let selectAll = `SELECT * FROM ${mysql.escapeId(table)}`;
        // if orderby has data
        if (orderBy) {
          selectAll = `SELECT * FROM ${mysql.escapeId(
            table
          )} ORDER BY ${mysql.escapeId(orderBy.by)} ${
            orderBy.order === "desc" ? "desc" : "asc"
          }`;
        }
        connection.query(selectAll, (err, tasks) => {
          // const allTasks = JSON.parse(JSON.stringify(tasks));
          err ? reject(err) : resolve(tasks);
        });
      } else {
        reject(new Error("Connection failed"));
      }
    });
  },
  search: (value) => {
    return new Promise((resolve, reject) => {
      if (connection) {
        let searchSql = `call searchStuff(${mysql.escape(value)})`;
        console.log(searchSql);
        connection.query(searchSql, (err, tasks) => {
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

  save: (table, data) => {
    return new Promise((resolve, reject) => {
      const sqlInsertion = `INSERT INTO ${mysql.escapeId(table)} SET ?`;
      connection.query(sqlInsertion, [data], (err, completeData) => {
        err ? reject(err) : resolve(`added to id: ${completeData.insertId}`);
      });
    });
  },

  // not tested yet to be working on anything else than isDone value
  edit: (id, task) => {
    return new Promise((resolve, reject) => {
      const sqlInsertion = `UPDATE tasks SET ? WHERE id = ${id}`;
      connection.query(sqlInsertion, [task], (err, tasks) => {
        err ? reject(err) : resolve(`Edited task with ID: ${id}`);
      });
    });
  },

  deleteAll: (table) => {
    return new Promise((resolve, reject) => {
      const deleteAll = `DELETE FROM ${mysql.escapeId(table)}`;
      connection.query(deleteAll, (err, items) => {
        err
          ? reject(err)
          : items.affectedRows > 0
          ? resolve(`${items.affectedRows} row(s) affected`)
          : resolve("nothing to delete");
      });
    });
  },

  deleteById: (table, id) => {
    return new Promise((resolve, reject) => {
      const deleteAll = `DELETE FROM ${mysql.escapeId(
        table
      )} WHERE id=${mysql.escape(id)}`;
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
