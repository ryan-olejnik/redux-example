import React, { Component } from "react";
import PostCard from "./PostCard";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import "./Posts.css";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div {...{ className: "postsContainer" }}>
        {this.props.posts.map((post, index) => (
          <PostCard post={post} index={index} />
        ))}
      </div>
    );
  }
}

// connect (mapStateToProps, mapDispatchToProps)(COMPONENT)

const mapDispatchToProps = { fetchPosts };
const mapStateToProps = state => ({
  posts: state.posts.items
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
