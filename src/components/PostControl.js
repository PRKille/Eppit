import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';


class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterPostList: [],
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
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  };

  handleEditingPostInList = (postToEdit) => {
    const editedMasterPostList = this.state.masterPostList
    .filter((post)=> post.id !== this.state.selectedPost.id)
    .concat(postToEdit);
    this.setState({masterPostList: editedMasterPostList,editing: false,selectedPost: null});
  }

  handleDeletingPost = (id) => {
  const newMasterPostList = this.state.masterPostList.filter(post => post.id !== id);
  this.setState({masterPostList: newMasterPostList, selectedPost: null});
  }

  handleChangingSelectedPost = (id) => {
  const selectedPost = this.state.masterPostList.filter(post => post.id === id)[0];
  this.setState({selectedPost: selectedPost, formVisibleOnPage:false});

  }

  handleAddingNewPostToList = (newPost) => {
  const newMasterPostList = this.state.masterPostList.concat(newPost);
  this.setState({masterPostList: newMasterPostList, formVisibleOnPage: false});
  }

  handleUpVote = (id) => {
    const selectedPost = this.state.masterPostList.filter(post => post.id === id)[0];
    const updatedPost = {...selectedPost, votes : selectedPost.votes+1}
    const nonUpdatedPosts = this.state.masterPostList.filter(post => post.id !== id);
    this.setState({masterPostList: [...nonUpdatedPosts, updatedPost]});
  }

  handleDownVote = (id) => {
    const selectedPost = this.state.masterPostList.filter(post => post.id === id)[0];
    const updatedPost = {...selectedPost, votes : selectedPost.votes-1}
    const nonUpdatedPosts = this.state.masterPostList.filter(post => post.id !== id);
    this.setState({masterPostList: [...nonUpdatedPosts, updatedPost]});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPost={this.handleAddingNewPostToList} />;
      buttonText = "Return to Post List";
    } else if (this.state.formVisibleOnPage === false && this.state.selectedPost === null){
      currentlyVisibleState = <PostList postList={this.state.masterPostList} 
      onPostSelection={this.handleChangingSelectedPost}
      onClickingDelete={this.handleDeletingPost}
      onUpVote={this.handleUpVote}
      onDownVote={this.handleDownVote}/>;
      buttonText = "Add Post"; 
    } else {
      currentlyVisibleState = <PostDetail 
        post={this.state.selectedPost}
        onClickingDelete={this.handleDeletingPost}
        onClickingEdit={this.handleEditingPostInList}/>;
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

// PostList.propTypes = {
//   postList: PropTypes.array // array?
// };
export default PostControl;