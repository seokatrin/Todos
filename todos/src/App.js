import "./App.css";
import TaskInput from "./Components/TaskInput";
import TaskContainer from "./Components/TaskContainer";
import Categories from "./Components/Categories";

function App() {
  return (
    <div className="wrapper">
      <AppContainer />
    </div>
  );
}

export default App;

const tasks = [
  { id: 1, task: "Learn JS", category: "active" },
  { id: 2, task: "Learn React", category: "active" },
];

const AppContainer = (props) => {



  return (
    <div className="App">
      <TaskInput />
      <TaskContainer tasks={tasks} category="all" />
      <Categories />
    </div>
  );
};
