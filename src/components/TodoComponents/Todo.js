import React from "react";

import "./Todo.css";

const Todo = props => {
  console.log("checking props in todo", props);
  return (
    <div
      className={props.taskProp.completed ? "completed" : ""}
      onClick={() => props.toggleHandle2(props.taskProp.id)}
    >
      {/* must use ternary operator for conditional styling*/}
      {props.taskProp.task}
    </div>
  );
};

export default Todo;
