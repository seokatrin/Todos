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

  const [category, setCategory] = useState('all');

  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const tasks = Api.getTasks()
    setTasks(tasks)
  }, []);

  const addTask = (taskToSet) => {
    Api.setTasks(taskToSet);
    const tasks = Api.getTasks();
    setTasks(tasks)
  }

  const handleOnClickCategory = (category) => {
    setCategory(category)
  }

  return (
    <div className="App">
      <TaskInput addTask={addTask} />
      <TaskContainer tasks={tasks} category={category} />
      <Categories onClick={handleOnClickCategory} />
    </div>
  );
};

const tasks = [
  { id: 1, task: "Learn JS", category: "active" },
  { id: 2, task: "Learn React", category: "active" },
];