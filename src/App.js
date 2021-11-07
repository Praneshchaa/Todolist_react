import React, { Component } from "react";
//import logo from "./logo.svg";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Sort from "./components/Sort";
import SortTwo from "./components/SortTwo";
import { v4 as uuidv4 } from "uuid";

//import { render } from "@testing-library/react";
import "./App.scss";

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Buy groceries for next week",
        completed: false,
      },

      {
        id: uuidv4(),
        title: "Renew car insurance",
        completed: false,
      },

      {
        id: uuidv4(),
        title: "Sign up for online course",
        completed: false,
      },
    ],
  };

  //Add Todo
  addTodo = (title, startDt) => {
    const newTodo = {
      id: uuidv4(),
      title,
      startDate: startDt,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  //delete
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <div className="filter-main">
          <Sort />
          <SortTwo />
        </div>
        <div className="container">
          <Todos todos={this.state.todos} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
