const express = require("express");
const router = express.Router();
router.use(express.json());
const validator = require("../model/validator.js");
const sqlConnection = require("../database/crud.js");
const task = require("../model/todoTask.js");

// get all tasks
router.get("/tasks/", async (req, res) => {
  try {
    res.statusCode = 200;
    res.send(await sqlConnection.findAll());
  } catch (err) {
    req.statusCode = 500;
    res.end();
  }
});

// add new task or update task
router.post("/tasks/", async (req, res) => {
  let validationResult = validator.taskValidation(new task(req.body));

  // if id exists edit task, else post new
  if (req.body.id !== undefined && validationResult.valid) {
    if (validator.idValidation(req.body.id).valid) {
      try {
        res.statusCode = 201;
        res.send(await sqlConnection.edit(req.body));
      } catch {
        res.sendStatus(400);
      }
    } else {
      res.statusCode = 406;
      res.send(validationResult.errors);
    }
  }
  // post new here
  else {
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
  }
});

// delete by id
router.delete("/tasks/:taskid([0-9]+)", async (req, res) => {
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
});

// delete all

module.exports = router;
