import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.postList.map((post) => (
      <div>
          <Post
          whenPostClicked = {props.onPostSelection}
          name = {post.name}
          time = {post.time}
          votes = {post.votes}
          id = {post.id}
          key = {post.id}
          />
        <button onClick={() => props.onUpVote(post.id)}>YayDoot</button>
        <button onClick={() => props.onDownVote(post.id)}>BooDoot</button>
      </div>
      ))}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  onPostSelection: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func
};

export default PostList;