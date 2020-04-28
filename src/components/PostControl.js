import React from 'react';


class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterPostList: [],
      selectedPost: null,
      editing: findAllByTestId
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
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  };

  handleEditingPostInList = (postToEdit) => {
    const editedMasterPostList = this.state.masterPostList
    .filter((post)=> post.id !== this.state.selectedPost.id)
    .concat(postToEdit);
    this.setState({masterPostList: editedMasterPostList});
    this.setState({editing: false});
    this.setState({selectedPost: null});
  }

  handleDeletingPost = (id) => {
  
  }

  handleChangingSelectedPost = (id) => {
  
  }

  handleAddingNewPostToList = (newPost) => {
  
  }

  handleUpVote = (id) => {
    const selectedPost = this.state.masterPostList.filter(post => post.id === id);
    const updatedPost = {...selectedPost, votes : votes+1}
    const nonUpdatedPosts = this.state.masterPostList.filter(post => post.id != id);
    this.setState({...nonUpdatedPosts, updatedPost});
  }

  handleDownVote = (id) => {
    const selectedPost = this.state.masterPostList.filter(post => post.id === id);
    const updatedPost = {...selectedPost, votes : votes-1}
    const nonUpdatedPosts = this.state.masterPostList.filter(post => post.id != id);
    this.setState({...nonUpdatedPosts, updatedPost});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />;
      buttonText = "Return to Post List";
    } else {
      currentlyVisibleState = <PostList postList={this.state.masterPostList} 
      onPostSelection={this.handleChangingSelectedPost}
      onClickingDelete={this.handleDeletingPost}
      onUpVote={this.handleUpVote}
      onDownVote={this.handleDownVote}/>;
      buttonText = "Add Post"; 
    }

    return(
      <React.Fragment>
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

PostList.propTypes = {
  postList: PropTypes.array // array?
};
export default PostControl;