import React from 'react';
import classes from './SideBar.module.scss';
import Friend from './Friend/Friend'

function SideBar(props) {
    let friendsOnlineStatus = props.friendsOnline.map(friend => <Friend name={friend.name} avatar={friend.avatar} />)
    return (
        <div className={classes.friendsOnline}>
            {friendsOnlineStatus}
        </div>
    );
}

export default SideBar;