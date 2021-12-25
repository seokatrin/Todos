export default class Api {
  static getTasks() {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  }
  static setTasks(taskToSet) {
    const tasks = Api.getTasks();

    const task = {
      id: Math.floor(Math.random() * 10000),
      task: taskToSet,
      category: "active",
    };
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  static changeTask(id, elemToChange, value) {
    const tasks = Api.getTasks();
    let existing = tasks.find((task) => task.id == id);

    if (elemToChange === "category") {
      existing.category =
        existing.category === "active" ? "complited" : "active";
    } else {
      existing.task = value;
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  static deleteTask(id) {
    const tasks = Api.getTasks();

    const newTasks = id
      ? tasks.filter((task) => task.id != id)
      : tasks.filter((task) => task.category !== "complited");
      
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }
}
