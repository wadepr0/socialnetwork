import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPost: state.profilePage.newPost
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPost: (text) => {
            dispatch(updateNewPostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;