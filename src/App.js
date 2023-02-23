import { useState, useEffect } from "react"
import AddTask from "./components/AddTask"
import Header from "./components/Header"
import ShowTask from "./components/ShowTask"
import "./App.css"

// JSON.parse(localStorage.getItem("tasklist")) || []

function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  )
  const [task, setTask] = useState({})

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList))
  }, [taskList])

  return (
    <div className="App">
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <ShowTask
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  )
}

export default App
