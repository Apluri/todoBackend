const express = require("express");
const router = express.Router();
router.use(express.json());
const validator = require("../model/validator.js");
const sqlConnection = require("../database/crud.js");
const task = require("../model/todoTask.js");
const { folderValidation } = require("../model/validator.js");

// get all from "table"
router.get("/:table([a-z]+)/", async (req, res) => {
  try {
    res.statusCode = 200;
    res.send(await sqlConnection.findAll(req.params.table));
  } catch (err) {
    req.statusCode = 500;
    res.end();
  }
});

// add new task
router.post("/tasks/", async (req, res) => {
  let validationResult = validator.taskValidation(new task(req.body));
  try {
    if (validationResult.valid) {
      try {
        res.statusCode = 201;
        res.send(await sqlConnection.save("tasks", req.body));
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
});

// temporary post folders
router.post("/folders/", async (req, res) => {
  let validationResult = validator.folderValidation(new folder(req.body));
  try {
    if (validationResult.valid) {
      try {
        res.statusCode = 201;
        res.send(await sqlConnection.save("folders", req.body));
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
});

// Edit task defined by ID
router.post("/tasks/:taskid([0-9]+)", async (req, res) => {
  let validationResult = validator.taskValidation(new task(req.body));
  const id = Number(req.params.taskid);
  if (validationResult.valid) {
    if (validator.idValidation(id).valid) {
      try {
        res.statusCode = 201;
        const result = await sqlConnection.edit(id, req.body);
        res.send(result);
      } catch {
        res.sendStatus(400);
      }
    } else {
      res.statusCode = 406;
      res.send(validationResult.errors);
    }
  }
});

// delete by id
// :table refers to sql table name passed in url
router.delete("/:table([a-z]+)/:taskid([0-9]+)", async (req, res) => {
  if (validator.idValidation(Number(req.params.taskid))) {
    console.log(req.params.table);
    try {
      await sqlConnection.deleteById(
        req.params.table,
        Number(req.params.taskid)
      );
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
