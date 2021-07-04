import React from 'react';
import classes from './MyPosts.module.scss';
import Post from './Post/Post'

function MyPosts() {
    return (
        <div> My posts
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add Post</button>
                <button>Remove Post</button>
            </div>
            <div className={classes.posts}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;