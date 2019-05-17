import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        todos: [
          {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
          },
          {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          }
        ],
        task: ''
      };
    }

    toggleComplete = itemId => {
      const todosCopy = this.state.todos.slice()
      for (let i = 0; i < todosCopy.length; i++ ) {
        if (todosCopy[i].id === itemId) {
          todosCopy[i].completed = !todosCopy[i].completed
        }
      }
      this.setState({
        todos: todosCopy 
          
    })
  }

    changeHandler = event => {
      // console.log(event.target.value)
      this.setState({
        [event.target.name]: event.target.value});
        // console.log("from changeHandler", this.state.task)
    }
    
    addTask = event => {
      let newTask = {
        task: this.state.task,
        id: Date.now(),
        completed: false
      }
      this.setState({
        todos: [...this.state.todos, newTask],

      })
      // console.log(this.state.todos)
    } 


  render() {
    return (
      <div>
        <TodoForm 
        firstHandler={this.changeHandler}
        taskHandler={this.addTask}/>
        <TodoList todoArray={this.state.todos} toggleHandle={this.toggleComplete}/>

      </div>
    );
  }
}

export default App;
