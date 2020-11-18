const express = require("express");
const router = express.Router();
// const validate = require("jsonschema").validate;
// const sqlConnection = require("../database/crud.js");

// automatically convert to json each fetch?
router.use(express.json());

let db = [
  { id: 1, task: "Mee toihi", deadline: null },
  { id: 2, task: "Tiskaa", deadline: null },
];

// send json table
router.get("/tasks", (req, res) => {
  res.send(db);
});

// post to local database
router.post("/", (req, res) => {
  db.push(req.body);
});

// delete from local database
router.delete("/:taskid([0-9]+)", (req, res) => {
  db = db.filter((todoTask) => todoTask.id !== Number(req.params.taskid));
});
module.exports = router;
