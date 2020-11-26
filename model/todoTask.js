class TodoTask {
  constructor(task) {
    this.title = task.title;
    this.description = task.description;
    this.deadline = task.deadline;
    this.folder = task.folder;
  }
}

module.exports = TodoTask;
