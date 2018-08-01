import React, { Component } from "react";
import "./Posts.css";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(postList => this.setState({ posts: postList }));
  }

  render() {
    return (
      <div {...{ className: "postsContainer" }}>
        {this.state.posts.map((post, index) => (
          <div key={index}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
