import logo from "./logo.svg";
import "./App.css";
import TaskInput from "./Components/TaskInput";
import TaskContainer from "./Components/TaskContainer";
import Categories from "./Components/Categories";

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <TaskInput />
        <TaskContainer tasks={tasks} category="all" />
        <Categories />
      </div>
    </div>
  );
}

export default App;

const tasks = [
  { id: 1, task: "Learn JS", category: "incomplited" },
  { id: 2, task: "Learn React", category: "incomplited" },
];
