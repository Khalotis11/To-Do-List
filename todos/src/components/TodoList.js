import React, { Component } from "react";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      list: []
    };
  }

  handleChange = e => {
    this.setState({
      textInput: e.target.value
    });
  };

  handleSubmit = e => {
    let newtodos = this.state.list;
    newtodos.push(e);
    this.setState({
      list: newtodos,
      textInput: ""
    });
  };

  render() {
    return (
      <div>
        <h2>My To Do List :</h2>
        <input
          type="text"
          name="todo"
          placeholder="I need to..."
          value={this.state.textInput}
          onChange={this.handleChange}
        />
        <button onClick={() => this.handleSubmit(this.state.textInput)}>
          Add Todo
        </button>
        <ul>
          {this.state.list.map(val => (
            <li>{val}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default TodoList;
