import React, { Component } from "react";

class NewPost extends Component {
  render() {
    return (
      <form>
        Title
        <input {...{ type: "text", name: "title" }} />
        Body
        <input {...{ type: "text", name: "body" }} />
      </form>
    );
  }
}

export default NewPost;
