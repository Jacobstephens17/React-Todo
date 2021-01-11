import React from "react";

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
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.inputValue} onChange={this.handleChanges} type="text" name="item" placeholder="Add New Task" />
        <button>Add</button>
      </form>
    );
  }
}

export default ToDoForm;