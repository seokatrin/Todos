export default class Api {
    static getTasks() {
        return JSON.parse(localStorage.getItem('tasks') || '[]');  
    }
    static setTasks(taskToSet) {
        const tasks = Api.getTasks();
        const task = {
            id: Math.floor(Math.random() * 10000),
            task: taskToSet,
            category: 'active'
        }
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static changeTask(id, elemToChange) {
        const tasks = Api.getTasks();
        const existing = tasks.find(task => task.id == id);
        existing = {...existing, elemToChange}
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static deleteTask(id) {
        const tasks = Api.getTasks();

        const newTasks = tasks.filter(task => task.id != id);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
}
