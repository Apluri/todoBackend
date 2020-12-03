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
    folder_id: { type: "number", minimum: 1 },
  },
};

const validation = {
  idValidation: (id) => {
    return validator.validate(id, idSchema);
  },
  taskValidation: (task) => {
    return validator.validate(task, taskSchema);
  },
};

module.exports = validation;
