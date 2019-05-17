import React from 'react'

const Todo = props => {
    console.log('checking props in todo',props)
    return (
        <div onClick={() => props.toggleHandle2(props.taskProp.id)}>
            {props.taskProp.task}
        </div>
    )
}

export default Todo;