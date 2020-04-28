import React from 'react';
import PropTypes from 'prop-types';

return (
  <React.Fragment>
    <div onClick = {() => PropTypes.whenPostClicked(props.id)}>
      <p>Post Title: {props.title}</p>
      <p>Posted Time: {props.time}</p>
      <p>Votes: {props.votes}</p>
      </div>
  </React.Fragment>
)

Post.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  votes: PropTypes.string,
}

export default Post;