const express = require("express");
const router = express.Router();
router.use(express.json());
const validator = require("../model/validator.js");
const sqlConnection = require("../database/crud.js");
const task = require("../model/todoTask.js");
const folder = require("../model/todoFolder.js");

// get all from "table"
router.get("/:table([a-z]+)/", (req, res) => {
  let sqlOrderBy = "";
  const extraQueryExists = JSON.stringify(req.query).length > 2;
  let done = false;
  if (extraQueryExists) {
    if (req.query.sorted && req.query.by) {
      sqlOrderBy = { by: req.query.by, order: req.query.sorted };
    } else if (req.query.search) {
      sqlConnection
        .search(req.query.search)
        .then((data) => {
          // number of these matches the table searches in sql
          let arrdata = [...data[0], ...data[1], ...data[2]];
          let ids = arrdata.map((o) => o.id);
          // delete duplicates
          let filtered = arrdata.filter(
            ({ id }, index) => !ids.includes(id, index + 1)
          );

          res.status(200).send(filtered);
        })
        .catch((err) => res.status(412).send(err));
      done = true;
    } else {
      // no match to sorted or by
      res.sendStatus(400);
      res.end();
    }
  }
  if (!done) {
    sqlConnection
      .findAll(req.params.table, sqlOrderBy)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(412).send(err));
  }
});

// add new task
router.post("/tasks/", async (req, res) => {
  let validationResult = validator.taskValidation(new task(req.body));
  if (validationResult.valid) {
    sqlConnection
      .save("tasks", req.body)
      .then((data) => res.status(201).send(data))
      .catch((err) => res.status(400).send(err));
  } else {
    res.status(406).send(validationResult.errors);
  }
});

// post folders
router.post("/folders/", async (req, res) => {
  let validationResult = validator.folderValidation(new folder(req.body));
  if (validationResult.valid) {
    await sqlConnection
      .save("folders", req.body)
      .then((data) => res.status(201).send(data))
      .catch((err) => res.status(409).send(err));
  } else {
    res.statusCode = 400;
    res.send(validationResult.errors);
  }
});

// Edit task defined by ID
router.post("/tasks/:taskid([0-9]+)", async (req, res) => {
  let validationResult = validator.taskValidation(new task(req.body));
  const id = Number(req.params.taskid);
  const idValidationResult = validator.idValidation(id);
  if (validationResult.valid && idValidationResult.valid) {
    await sqlConnection
      .edit(id, req.body)
      .then((data) => res.status(201).send(data))
      .catch((err) => res.status(400).send(err));
  } else {
    // if task had no errors, error was in id
    !validationResult.valid
      ? res.status(406).send(validationResult.errors)
      : res.status(406).send(idValidationResult.errors);
  }
});

// delete by id
// :table refers to sql table name passed in url
router.delete("/:table([a-z]+)/:taskid([0-9]+)", async (req, res) => {
  if (validator.idValidation(Number(req.params.taskid)).valid) {
    await sqlConnection
      .deleteById(req.params.table, Number(req.params.taskid))
      .then((data) => res.status(204).send(data))
      .catch((err) => res.status(404).send(err));
  } else {
    res.sendStatus(400);
  }
});

// delete all
router.delete("/:table([a-z]+)", async (req, res) => {
  await sqlConnection
    .deleteAll(req.params.table)
    .then((data) => res.status(204).send(data))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
