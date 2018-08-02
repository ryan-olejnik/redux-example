import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  console.log("fetching posts!");
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
  console.log("Action called! newPost =", newPost);
  dispatch({
    type: NEW_POST,
    payload: newPost
  });
};
