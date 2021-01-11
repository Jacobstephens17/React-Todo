import React from 'react';
import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList'
import styled from 'styled-components'

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
      <AppLayout>
        <div>
          <Heading>Welcome to your Todo App!</Heading>
          <ToDoForm handleItemAdd={this.handleItemAdd}/>
        </div>
        <ToDoList tasks={this.state.task} handleItemCompleted={this.handleItemCompleted} handleItemToggle={this.handleItemToggle}/>
      </AppLayout>
          );
        }
      }

export default App;
 

const Heading = styled.h2`
color:red;
display:flex;
flex-direction:column;
font-size:2rem;
align-items:center;
text-align:center;
`

const AppLayout = styled.div`

background-color:black;
padding:50rem;
`