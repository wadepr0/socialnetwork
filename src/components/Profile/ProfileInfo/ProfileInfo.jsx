import React from 'react';
import Preloader from '../../Users/Loader/Preloader';
import Description from './Description/Description';
import classes from './ProfileInfo.module.scss';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={classes.avatar_wrapper}>
            <span>{props.profile.status}</span>
            <img className={classes.avatar} src={!props.profile.photos.large ? `https://www.meme-arsenal.com/memes/fdff581c15b2110b6a4280e3d85db6cc.jpg` : props.profile.photos.large} alt="" />
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            <Description followers='777' likes='157' posts='12' country='Russian Federation' profile={props.profile} />
        </div>
    );
}

export default ProfileInfo;