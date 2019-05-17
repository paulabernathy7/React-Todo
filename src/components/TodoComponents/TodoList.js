// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    console.log("todolist", props)
    return (
      <div>
        {props.todoArray.map(task => {
            return <Todo taskProp={task} toggleHandle2={props.toggleHandle}/>
        })}  
      </div>  
    )
}

export default TodoList;