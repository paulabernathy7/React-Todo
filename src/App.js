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
            task: 'Learn Full Stack',
            id: 1528817077286,
            completed: false
          },
          {
            task: 'Learn CS',
            id: 1528817084358,
            completed: false
          },
          {
            task: 'Learn Design',
            id: 1528817084359,
            completed: false
          },
          {
            task: 'Learn Product management',
            id: 1528817084360,
            completed: false
          },
          {
            task: 'Learn something new',
            id: 1528817084361,
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
    
    addTask = () => {
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

    removeTask = id => {
       {/* filtering through this.state.todos and returning another array without completed tasks.. the result is the new state. reason why we're doing this.setState  */}
       const notCompleted = this.state.todos.filter(function (task){
         return task.completed !== true
       })
       this.setState({
         todos: notCompleted
       })
      

    }


  render() {
    return (
      <div className="todoForm">
        <TodoForm 
        firstHandler={this.changeHandler}
        taskHandler={this.addTask}
        clearHandler={this.removeTask}/>
        <TodoList todoArray={this.state.todos} toggleHandle={this.toggleComplete}/>

      </div>
    );
  }
}

export default App;
