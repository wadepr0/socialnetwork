import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.scss';

function Profile(props) {
    return (
        <main>
            {/* <img src="/images/cropped.png" alt="" /> */}
            <div className={classes.profile_wrapper}>
                <ProfileInfo src="https://joediliberto.files.wordpress.com/2011/01/fight-club02.jpg"/>
                <MyPosts posts={props.state.posts}/>
            </div>
        </main>
    );
}

export default Profile;