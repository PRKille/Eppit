import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.id)}>
        <p>Post Title: {props.title}</p>
        <p>Posted Time: {props.time}</p>
        <p>Votes: {props.votes}</p>
        </div>
    </React.Fragment>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  votes: PropTypes.number,
  whenPostClicked: PropTypes.func
}

export default Post;