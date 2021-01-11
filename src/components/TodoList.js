import React from "react";
import Todo from './Todo'


const ToDoList = props => {
    const handleClick= () => {
        props.handleItemCompleted();
    }

  return (
    <div>
        {props.tasks.map(item => (<Todo handleItemToggle={props.handleItemToggle} key={item.id} item={item} />))}
        <button onClick={handleClick}>Clear Task</button>
    </div>
  );
};

export default ToDoList;