import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1> Post Details </h1>
      <h3> 
        {post.name} : {post.time}
      </h3>
      <p>
        {post.votes}
      </p>
      <button onClick={props.onClickingEdit}>Update Post</button>
      <button onClick={() => onClickingDelete(post.id)}>Close Post</button>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  votes: PropTypes.string
};

export default PostDetail;