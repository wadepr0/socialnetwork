import React from 'react';
import Description from './Description/Description';
import classes from './ProfileInfo.module.scss';

function ProfileInfo(props) {
    return (
        <div className={classes.avatar_wrapper}>
            <img className={classes.avatar} src={props.src} alt="" />
            <Description followers='777' likes='157' posts='12' country='Russian Federation' />
        </div>
    );
}

export default ProfileInfo;