export const Task = (props) =>{
    return (
        <div className="task">
          <h1>{props.taskName}</h1>
          <button onClick={() => props.completeTask(props.id)}>Task Completed</button>
          <button onClick={() => props.deleteTask(props.id)}>Delete Task</button>
        </div>
      );
}