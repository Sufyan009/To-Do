import React from "react";
import { useState } from "react";
import { Task } from "./Task";

function Todos() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };
  const deleteTask = (id) => {
    // const newTodoList = todoList.filter((task) => task === !tasknName );
    // if(task == tasknName){
    //   return false;
    //   }
    //   else{
    //     return true;
    //   }

    setTodoList(todoList.filter((task) => task.id !== id));
  };
  const completeTask = (id) =>{
    setTodoList(
      todoList.map((task) =>{
        if (task.id == id){
          return {...task, completed: true};
        }
        else{
          return task;
        }
      })
    );

  }

  return (
    <section className="vh-100" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="container py-5 h-100">
        <h3 className="mb-3">To-Do List</h3>
        <div className="addTask">
          <input
            type="text"
            id="formControlLg"
            className="form-control form-control-lg"
            placeholder="Add a task"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="btn btn-primary btn-block mt-3"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
        <div className="list">
          {todoList.map((task) => {
            return (
              <Task
                taskName={task.taskName}
                id={task.id}
                deleteTask={deleteTask}
                completed={task.completed}
                completeTask={completeTask}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Todos;
