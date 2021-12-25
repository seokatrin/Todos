import "./App.css";
import TaskInput from "./Components/TaskInput";
import TaskContainer from "./Components/TaskContainer";
import Categories from "./Components/Categories";
import { useEffect, useState } from "react";
import Api from "./Api";

function App() {
  return (
    <div className="wrapper">
      <AppContainer />
    </div>
  );
}

export default App;

const AppContainer = (props) => {
  const [category, setCategory] = useState("all");
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    const tasks = Api.getTasks();
    setTasks(tasks);
  }

  useEffect(() => {
    getTasks()
  }, []);

  const addTask = (taskToSet) => {
    Api.setTasks(taskToSet);
    getTasks()
  };

  const handleOnClickCategory = (category) => {
    setCategory(category);
  };

  const deleteTask = (id) => {
    Api.deleteTask(id);
    getTasks()
  }

  const countItemsLeft = tasks.filter((task) => task.category === "active");

  return (
    <div className="App">
      <TaskInput addTask={addTask} />
      <TaskContainer tasks={tasks} category={category} deleteTask={deleteTask} />
      <Categories
        items={countItemsLeft.length}
        onClick={handleOnClickCategory}
        category={category}
      />
    </div>
  );
};


