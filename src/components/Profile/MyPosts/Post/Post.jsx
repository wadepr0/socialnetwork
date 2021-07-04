import React from 'react';
import classes from './Post.module.scss';

function Post() {
    return (
        <div className={classes.item}>
            <div className={classes.avatar}>
                <img src="https://joediliberto.files.wordpress.com/2011/01/fight-club02.jpg" alt="" />
                Post 1
            </div>
            <div><span>like</span></div>
        </div>
    );
}

export default Post;