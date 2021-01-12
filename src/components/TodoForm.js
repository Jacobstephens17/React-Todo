import React from "react";
import styled from 'styled-components'


class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    }
  }

  handleChanges = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleItemAdd(this.state.inputValue);
    this.setState({
      inputValue:""
    });
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledInput value={this.state.inputValue} onChange={this.handleChanges} type="text" name="item" placeholder="Add New Task" />
        <StyledButton>Add Task</StyledButton>
      </StyledForm>
    );
  }
}

export default ToDoForm;



const StyledForm = styled.form`
display:flex;
flex-direction:column;
padding:4rem;
align-items:center;
`

const StyledInput = styled.input`
padding:2rem 10rem;
`

const StyledButton = styled.button`
padding:1rem 3rem;
`