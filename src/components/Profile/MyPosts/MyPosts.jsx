import React from 'react';
import classes from './MyPosts.module.scss';
import Post from './Post/Post';

function MyPosts(props) {
    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} author={post.author} date={post.date} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text);
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.textarea_wrapper}>
                <div className={classes.header}>New Post</div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPost} />
                <div className={classes.buttons}>
                    <button className={classes.button}>+</button>
                    <button onClick={addPost} className={classes.submit}>Create Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;