import React, { Component } from 'react';
import PostCard from './PostCard';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import './Posts.css';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postList = this.props.posts.map((post, index) => (
      <PostCard post={post} index={index} key={index} />
    ));

    return (
      <div {...{ className: 'postsContainer' }}>
        {postList.slice().reverse()}
      </div>
    );
  }
}

// connect (mapStateToProps, mapDispatchToProps)(COMPONENT)

const mapStateToProps = state => ({
  posts: state.posts.items
});
const mapDispatchToProps = { fetchPosts };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
