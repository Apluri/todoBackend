class TodoTask {
  constructor(task) {
    this.title = task.title;
    this.description = task.description;
    this.deadline = task.deadline;
    this.isDone = false; // default
    task.isDone === null ? (this.isDone = false) : (this.isDone = task.isDone);
    this.folder = task.folder;
  }
}

module.exports = TodoTask;
