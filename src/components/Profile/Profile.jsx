import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.scss';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
    return (
        <main>
            {/* <img src="/images/cropped.png" alt="" /> */}
            <div className={classes.profile_wrapper}>
                <ProfileInfo src="https://joediliberto.files.wordpress.com/2011/01/fight-club02.jpg" profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <MyPostsContainer />
            </div>
        </main>
    );
}

export default Profile;