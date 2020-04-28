import React from "react";
import PropTypes from "prop-types";


function PostDetail(props){
  const { post, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1> Post Details </h1>
      <h3> 
        {post.title} : {post.time}
      </h3>
      <p>
        {post.votes}
      </p>
      <hr />
      <button onClick={() => onClickingEdit(post.id)}>Update Post</button>
      <button onClick={() => onClickingDelete(post.id)}>Close Post</button>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default PostDetail;