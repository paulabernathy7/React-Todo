import React from "react";

const TodoForm = props => {
    // console.log(props)
    return (
        <div >
          <input className="form"
          name="task"
          onChange={props.firstHandler}
          placeholder="Task..."></input>  
          <div className="buttons">
            <button className="button"  onClick= {props.taskHandler}>Add</button>
            <button className="button"  onClick={props.clearHandler}>Complete</button>
          </div>

        </div>
    )
}

export default TodoForm;