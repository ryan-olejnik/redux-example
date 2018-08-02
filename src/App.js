import React, { Component } from "react";
import "./App.css";
import NewPostForm from "./components/NewPostForm";
import Posts from "./components/Posts";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Forum Ipsum</h1>
          </header>
          <div className="forumContainer">
            <NewPostForm />
            <Posts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
