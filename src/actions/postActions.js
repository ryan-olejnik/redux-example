import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(postList =>
      dispatch({
        type: FETCH_POSTS,
        payload: postList
      })
    );
};

export const createNewPost = newPost => dispatch => {
  dispatch({
    type: NEW_POST,
    payload: newPost
  });
};
