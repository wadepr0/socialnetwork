import React from 'react';
import classes from './Post.module.scss';

function Post(props) {
    return (
        <div className={classes.item}>
            <div className={classes.avatar}>
                <div className={classes.header_left}>
                    <img src="https://joediliberto.files.wordpress.com/2011/01/fight-club02.jpg" alt="" />
                    <div>
                        <div className={classes.author}>{props.author}</div>
                        <div className={classes.date}>{props.date}</div>
                    </div>
                </div>
                <div className={classes.header_edit}>
                    <div className={`${classes.edit} ${'fa-pencil'}`}><span></span></div>
                    <div className={`${classes.delete} ${'fa-trash'}`}><span></span></div>
                </div>
            </div>
            <div className={classes.post}>{props.message}</div>
            <div className={classes.reaction}>
                <div className={`${classes.likes} ${'fa-heart'}`}><span>{props.likesCount}</span></div>
                <div className={`${classes.likes} ${'fa-comments'}`}><span>{props.likesCount}</span></div>
                <div className={`${classes.likes} ${'fa-bookmark-o'}`}><span>{props.likesCount}</span></div>
                <div className={`${classes.likes} ${'fa-reply'}`}><span>{props.likesCount}</span></div>
            </div>
        </div>
    );
}

export default Post;