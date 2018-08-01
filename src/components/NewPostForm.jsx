import React, { Component } from "react";

class NewPostForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
    };
  }

  handleFormChange = event => {
    event.preventDefault;
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form>
        <div>
          <label>Title:</label>
          <br />
          <input
            {...{
              type: "text",
              name: "title",
              className: "newPostTitle",
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
              onChange: this.handleFormChange
            }}
          />
        </div>
        <button {...{ type: "submit" }}>Post!</button>
      </form>
    );
  }
}

export default NewPostForm;
