import React from "react";

const TodoForm = props => {
    // console.log(props)
    return (
        <div>
          <input 
          name="task"
          onChange={props.firstHandler}
          placeholder="Todo..."></input>  
          <button onClick= {props.taskHandler}>Add Todo</button>
          <button>Clear Completed</button>

        </div>
    )
}

export default TodoForm;