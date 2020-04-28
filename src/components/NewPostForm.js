import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewPostForm(props){
  function handleNewPostSubmission(event){
    event.preventDefault();
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date+' '+time;
    props.onNewPost({
      title: event.target.title.value,
      content: event.target.content.value,
      time: dateTime,
      votes: 0,
      id: v4()
    });
  }

  return (
    <ReusableForm
      formSubmissionHandler={handleNewPostSubmission} />
  );
}

NewPostForm.propTypes = {
  onNewPost: PropTypes.func
}

export default NewPostForm;