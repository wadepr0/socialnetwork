import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../storeContext';

function MyPostsContainer(props) {
    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostActionCreator(text))
                }
                return <MyPosts updateNewPost={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPost={state.profilePage.newPost} />
            }}
        </StoreContext.Consumer>
    );
}



export default MyPostsContainer;