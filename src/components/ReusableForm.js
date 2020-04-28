import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return(
    <form onSubmit={props.formSubmissionHandler}>
      <input
        type='text'
        name='title'
        placeholder="What chu talkin bout?" required />
      <textarea
        name='content'
        placeholder="What chu gots to say?" />
      <button type='submit'>POST</button>
    </form>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func
}

export default ReusableForm;