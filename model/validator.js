const Validator = require("jsonschema").Validator;
const validator = new Validator();

const idSchema = { type: "number", minimum: 1 };
const taskSchema = {
  type: "object",
  properties: {
    title: String,
    description: String,
    deadline: {},
    isDone: Boolean,
    folder_id: { type: ["number", "null"], minimum: 1 },
  },
};
const folderSchema = {
  type: "object",
  properties: {
    name: String,
    minLenght: 3,
  },
};

const validation = {
  idValidation: (id) => {
    return validator.validate(id, idSchema);
  },
  taskValidation: (task) => {
    return validator.validate(task, taskSchema);
  },
  folderValidation: (folder) => {
    return validator.validate(fodler, folderSchema);
  },
};

module.exports = validation;
