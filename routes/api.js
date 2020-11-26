const express = require("express");
const router = express.Router();
router.use(express.json());
const validator = require("../model/validator.js");
const sqlConnection = require("../database/crud.js");
const task = require("../model/todoTask.js");

let db = [
  { id: 1, task: "Mee toihi", deadline: null },
  { id: 2, task: "Tiskaa", deadline: null },
];

// get all tasks
router.get("/tasks/", async (req, res) => {
  try {
    console.log("Trying to fetch");
    res.statusCode = 200;
    res.send(await sqlConnection.findAll());
  } catch (err) {
    req.statusCode = 500;
    res.end();
  }
  //res.send(db);
});

// get task by id

// add new task
router.post("/", async (req, res) => {
  console.log(req.body);
  let validationResult = validator.taskValidation(new task(req.body));
  try {
    if (validationResult.valid) {
      try {
        res.statusCode = 201;
        res.send(await sqlConnection.save(req.body));
      } catch (err) {
        res.statusCode = 400;
        res.sendStatus(400);
      }
    } else {
      res.statusCode = 406;
      res.send(validationResult.errors);
    }
  } catch (err) {
    res.statusCode = 400;
    res.send(err);
  }
  //db.push(req.body);
});

// delete by id
router.delete("/:taskid([0-9]+)", async (req, res) => {
  if (validator.idValidation(Number(req.params.taskid))) {
    try {
      await sqlConnection.deleteById(Number(req.params.taskid));
      res.statusCode = 204;
      res.sendStatus(204);
    } catch (err) {
      res.statusCode = 400;
      res.send(err);
    }
  } else {
    res.statusCode = 406;
    res.sendStatus(406);
  }
  //db = db.filter((todoTask) => todoTask.id !== Number(req.params.taskid));
});

// delete all

module.exports = router;
