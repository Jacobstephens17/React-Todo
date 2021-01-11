import React from 'react';
import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList'

const tasks = [
  {
    task: "homework",
    id:124,
    completed:false,
  }
]
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      task: tasks
    }
  }

  handleItemToggle = (itemId)=>{
    this.setState({
      task: this.state.task.map(item=>{
        if(item.id === itemId){
          return {
            ...item,
            completed: !item.completed
          }
        }
        return(item)
      })
    })
  }

  handleItemAdd = (itemName) => {
    const item = {
      task: itemName, 
      id: this.state.task.length,
      completed: false
    };

    const newTasks = [...this.state.task, item];

    this.setState({
      task: newTasks
    });
    console.log(newTasks)
  };

  handleItemCompleted = () => {
    const newTasks = this.state.task.filter(item => {
      return(!item.completed);
    });
    this.setState({
      task: newTasks,
    })
  }


  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <ToDoForm handleItemAdd={this.handleItemAdd}/>
        </div>
        <ToDoList tasks={this.state.task} handleItemCompleted={this.handleItemCompleted} handleItemToggle={this.handleItemToggle}/>
      </div>
          );
        }
      }

export default App;
