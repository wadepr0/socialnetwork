import React from 'react';
import classes from './Friend.module.scss';

function Friend(props) {

    return (
        <div className={classes.friend}>
            <img src={props.avatar} alt="" />
            <p>{props.name}</p>
        </div>
    );
}

export default Friend;