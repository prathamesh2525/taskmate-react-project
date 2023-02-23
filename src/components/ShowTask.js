import React from "react"

const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((todo) => todo.id !== id)
    setTaskList(updatedTaskList)
  }
  const handleEdit = (id) => {
    const selectedTask = taskList.find((todo) => todo.id === id)
    setTask(selectedTask)
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button onClick={() => setTaskList([])} className="clearAll">
          Clear All
        </button>
      </div>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i
              onClick={() => handleEdit(task.id)}
              className="bi bi-pencil-square"
            ></i>
            <i
              onClick={() => handleDelete(task.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ShowTask
