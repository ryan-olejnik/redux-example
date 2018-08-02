import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewPost } from "../actions/postActions";

class NewPostForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
    };
  }

  handleFormChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("New post:\n", this.state.title, "\n", this.state.body);
    const newPost = { title: this.state.title, body: this.state.body };
    this.props.createNewPost(newPost);
    this.setState({ title: "", body: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>Title:</label>
          <br />
          <input
            {...{
              type: "text",
              name: "title",
              className: "newPostTitle",
              value: this.state.title,
              onChange: this.handleFormChange
            }}
          />
        </div>
        <div>
          <label>Body:</label>
          <br />
          <textarea
            {...{
              type: "text",
              name: "body",
              className: "newPostBody",
              value: this.state.body,
              onChange: this.handleFormChange
            }}
          />
        </div>
        <button {...{ type: "submit" }}>Post!</button>
      </form>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = { createNewPost };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPostForm);
