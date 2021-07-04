import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.scss';

function Profile() {
    return (
        <main className={classes.main}>
            <img src="/images/cropped.png" alt="" />
            <div>avatar + description</div>
            <MyPosts />
        </main>
    );
}

export default Profile;