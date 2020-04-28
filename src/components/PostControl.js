import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedPost !=null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      });
    } else {
      this.setState((prevState) =>({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, title, content, time, votes } = postToEdit;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      content: content,
      time: time,
      votes: votes
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    })
  }


  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({
      selectedPost: null
    });
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id];
    this.setState({selectedPost: selectedPost, formVisibleOnPage:false});
  }

  // const handleChangingSelectedPost = (id) => {
  //   const selectedPost = props.masterPostList[id];
  //   const { dispatch } = props;
  //   const action = {
  //     type: 'CHANGE_SELECTED',
  //     name: selectedPost.name,
  //     id: selectedPost.id,
  //     description: selectedPost.description,
  //     quantity: selectedPost.quantity
  //   }
  //   dispatch(action);
  // }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { id, title, content, time, votes } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      content: content,
      time: time,
      votes: votes
    }
    dispatch(action);
    this.setState({
      formVisibleOnPage: false
    })
  }

  handleUpVote = (postToUpDoot) => {
    const { dispatch } = this.props;
    const { id, title, content, time, votes } = postToUpDoot;
    const newDoot = votes+1;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      content: content,
      time: time,
      votes: newDoot
    };
    dispatch(action);
  }

  handleDownVote = (postToDownDoot) => {
    const { dispatch } = this.props;
    const { id, title, content, time, votes } = postToDownDoot;
    const newDoot = votes-1;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      content: content,
      time: time,
      votes: newDoot
    };
    dispatch(action);
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPost={this.handleAddingNewPostToList} />;
      buttonText = "Return to Post List";
    } else if (this.state.formVisibleOnPage === false && this.state.selectedPost === null){
      currentlyVisibleState = <PostList postList={this.props.masterPostList} 
      onPostSelection={this.handleChangingSelectedPost}
      onClickingDelete={this.handleDeletingPost}
      onUpVote={this.handleUpVote}
      onDownVote={this.handleDownVote}/>;
      buttonText = "Add Post";
    } else if (this.state.editing === true) {
      currentlyVisibleState = <EditPostForm 
      onEditPost={this.handleEditingPostInList}
      post={this.state.selectedPost} />;
      buttonText = "Return to Post List";
    } else {
      currentlyVisibleState = <PostDetail 
        post={this.state.selectedPost}
        onClickingDelete={this.handleDeletingPost}
        onClickingEdit={this.handleEditClick}/>;
        buttonText = "Return to Post List"
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

PostList.propTypes = {
  postList:  PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList,
    // editing: state.editing,
    // selectedItem: state.selectedItem
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;