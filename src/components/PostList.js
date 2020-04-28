import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.postList).map((post) => {
        return (
          <div>
              <Post
              whenPostClicked = {props.onPostSelection}
              title = {post.title}
              time = {post.time}
              votes = {post.votes}
              id = {post.id}
              key = {post.id}
              />
            <button onClick={() => props.onUpVote(post)}>YayDoot</button>
            <button onClick={() => props.onDownVote(post)}>BooDoot</button>
          </div>
        )
      })}
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