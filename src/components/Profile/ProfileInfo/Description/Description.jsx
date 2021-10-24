import React from 'react';
import classes from './Description.module.scss';

function Description(props) {
    return (
        <div className={classes.description}>
            <div className={classes.name}>{props.profile.fullName}</div>
            <div className={classes.country}>{props.country}</div>
            <div className={classes.followers}>Followers: {props.followers} </div>
            <div className={classes.likes}>Reputation: {props.likes}</div>
            <div className={classes.posts}>Posts: {props.posts}</div>
        </div>
    );
}

export default Description;