const Validator = require("jsonschema").Validator;
const validator = new Validator();

const idSchema = { type: "number", minimum: 1 };
const taskSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    description: { type: ["string", "null"] },
    deadline: { type: ["string", "null"] },
    isDone: { type: ["boolean", "number"], minimum: 0, maximum: 1 },
    folder_id: { type: ["number", "null"], minimum: 1 },
  },
};
const folderSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
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
    return validator.validate(folder, folderSchema);
  },
};

module.exports = validation;
