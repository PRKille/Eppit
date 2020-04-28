import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditPostForm(props){
  const { post, onEditPost } = props;
  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date+' '+time;
  function handlePostEditSubmission(event){
    event.preventDefault();
    onEditPost({
      title: event.target.title.value,
      content: event.target.content.value.concat("  Edited - "+{dateTime}),
      time: post.time,
      votes: post.votes,
      id: post.id
    });
  }

  return(
    <ReusableForm
    formSubmissionHandler={handlePostEditSubmission}
    buttonText="Update Post" />
  )
}

EditPostForm.propTypes = {
  onEditPost: PropTypes.func,
}

export default EditPostForm;