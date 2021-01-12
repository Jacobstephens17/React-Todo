import React from "react";
import Todo from './Todo'
import styled from 'styled-components'


const ToDoList = props => {
    const handleClick= () => {
        props.handleItemCompleted();
    }

  return (
    <StyledDiv>
        <StyledList>
            {props.tasks.map(item => (<Todo handleItemToggle={props.handleItemToggle} key={item.id} item={item} />))}
        </StyledList>
        <Button onClick={handleClick}>Clear Completed</Button>
    </StyledDiv>
  );
};

export default ToDoList;


const StyledDiv = styled.div`
display:flex;
background-color:black;
color:white;
flex-direction:column;
align-items:center;
padding:100px;
`

const StyledList = styled.div`
display:flex;
flex-direction:row;
`

const Button = styled.button`
padding:.5rem 3rem;
`