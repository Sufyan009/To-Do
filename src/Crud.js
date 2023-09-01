import "./Crud.css";
import React, { useState } from 'react';

function Crud() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Morning walk', status: 'Finished' },
        { id: 2, text: 'Work daily for 10 hours.', status: 'In progress' },
      ]);
  const [newTask, setNewTask] = useState('');
  const [showTasks, setShowTasks] = useState(false);

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      const newTasks = [...tasks, { id: tasks.length + 1, text: newTask, status: 'In progress' }];
      setTasks(newTasks);
      setNewTask('');
    }
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleFinished = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: 'Finished' } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#f0f0f0' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card rounded-3">
              <div className="card-body p-4">
                <h1 className="text-center my-3 pb-3">Sj To-Do's</h1>

                <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  <div className="col-12">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form1"
                        className="form-control"
                        value={newTask}
                        onChange={handleTaskChange}
                        placeholder="Enter a task here"
                      />
                      {/* <label className="form-label" htmlFor="form1">
                        Enter a task here
                      </label> */}
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                  </div>

                  <div className="col-12">
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => setShowTasks(!showTasks)}
                    >
                      {showTasks ? 'Hide tasks' : 'Show tasks'}
                    </button>
                  </div>
                </form>

                {showTasks && (
                  <table className="table mb-4">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Todo item</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tasks.map((task) => (
                        <tr key={task.id}>
                          <th scope="row">{task.id}</th>
                          <td>{task.text}</td>
                          <td>{task.status}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => handleDelete(task.id)}
                            >
                              Delete
                            </button>
                            {task.status === 'In progress' && (
                              <button
                                type="button"
                                className="btn btn-success ms-1"
                                onClick={() => handleFinished(task.id)}
                              >
                                Finished
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Crud;
