import React from 'react';
import classes from './MyPosts.module.scss';
import Post from './Post/Post'

function MyPosts(props) {
    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} author={post.author} date={post.date} />)
    let addPost = () => {
        alert('w')
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.textarea_wrapper}>
                <div className={classes.header}>New Post</div>
                <textarea name="" id="" cols="80" rows="4"></textarea>
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