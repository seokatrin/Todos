import "./App.css";
import TaskInput from "./Components/TaskInput";
import TaskContainer from "./Components/TaskContainer";
import Categories from "./Components/Categories";
import { useState } from "react";
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
  const [tasks, setTasks] = useState(Api.getTasks());

  const getTasks = () => {
    const tasks = Api.getTasks();
    setTasks(tasks);
  };

  const addTask = (taskToSet) => {
    Api.setTasks(taskToSet);
    getTasks();
  };

  const handleOnClickCategory = (category) => {
    setCategory(category);
  };

  const deleteTask = (id) => {
    Api.deleteTask(id);
    getTasks();
  };

  const deleteAllCompletedTask = () => {
    Api.deleteTask(null);
    getTasks();
  };

  const completeTask = (id) => {
    Api.changeTask(id, "category");
    getTasks();
  };

  const changeTask = (id, taskToChange) => {
    Api.changeTask(id, "task", taskToChange);
    getTasks();
  };

  const toggleTaskCategory = (category) => {
    Api.changeCategory(category);
    getTasks();
  };

  const countItemsLeft = tasks.filter((task) => task.category === "active");
  const completedTaskCount = tasks.filter(
    (task) => task.category === "complited"
  );

  return (
    <div className="App">
      <TaskInput
        addTask={addTask}
        tasks={tasks}
        toggleTaskCategory={toggleTaskCategory}
      />
      <TaskContainer
        tasks={tasks}
        category={category}
        deleteTask={deleteTask}
        completeTask={completeTask}
        changeTask={changeTask}
      />
      {tasks.length > 0 ? (
        <Categories
          items={countItemsLeft.length}
          onClick={handleOnClickCategory}
          category={category}
          completedTaskCount={completedTaskCount.length}
          deleteAllCompletedTask={deleteAllCompletedTask}
        />
      ) : (
        ""
      )}
    </div>
  );
};
