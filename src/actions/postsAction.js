import { GET_POSTS, POSTS_STATUS } from "../actionTypes";
import { database } from "../firebase";

export function getPosts() {
  return (dispatch) => {
    // as soon as this function fires, show loading to be true
    dispatch({
      type: POSTS_STATUS,
      payload: true,
    });
    database.on(
      "value",
      (snapshot) => {
        dispatch({
          type: GET_POSTS,
          payload: snapshot.val(),
        });
        // once posts are loaded, show loading to be false
        dispatch({
          type: POSTS_STATUS,
          payload: false,
        });
        // wait until something changes and try again
      },
      () => {
        dispatch({
          type: POSTS_STATUS,
          payload: -1,
        });
      }
    );
  };
}

export function savePost(post) {
  return (dispatch) => database.push(post);
}

export function editPost(id, post) {
  return (dispatch) => database.child(id).update(post);
}

export function deletePost(id) {
  return (dispatch) => database.child(id).remove();
}
