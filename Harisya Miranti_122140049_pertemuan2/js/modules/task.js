export class Task {
    constructor(title, deadline = '', time = '', subject = '', description = '', completed = false) {
      this.id = Date.now();
      this.title = title;
      this.deadline = deadline;
      this.time = time;
      this.subject = subject;
      this.description = description;
      this.completed = completed;
    }
  
    toggle() {
      this.completed = !this.completed;
    }
  }
  
  export class TaskManager {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
    }
  
    removeTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  
    toggleTask(id) {
      const task = this.tasks.find(task => task.id === id);
      if (task) task.toggle();
    }
  
    updateTask(id, newTitle) {
      const task = this.tasks.find(task => task.id === id);
      if (task) task.title = newTitle;
    }
  
    getAllTasks() {
      return this.tasks;
    }
  
    loadTasks(data) {
      this.tasks = data.map(t => {
        const task = new Task(t.title, t.deadline, t.time, t.subject, t.description, t.completed);
        task.id = t.id;
        return task;
      });
    }
  }
  