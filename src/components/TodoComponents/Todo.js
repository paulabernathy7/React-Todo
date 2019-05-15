import React from 'react'

const Todo = props => {
    console.log(props)
    return (
        <div>
            {props.taskProp.task}
        </div>
    )
}

export default Todo;