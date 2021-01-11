import React from 'react';
import styled from 'styled-components'
const Todo = props => {
    const handleClick =() => {
        props.handleItemToggle(props.item.id);
    }
    return(
        <Div onClick={handleClick} className={`item${props.item.completed ? 'completed': '' } ` } >
            <P>{props.item.task}</P>
        </Div>
    )
}

export default Todo;

const P = styled.p`
margin:2rem;
border:2px solid red;
padding:1rem;

`

const Div = styled.div`
display:flex;


`