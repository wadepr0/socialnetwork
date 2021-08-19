import React from 'react';
import classes from './SideBar.module.scss';
import Friend from './Friend/Friend'


function SideBar(props) {
    let friendsOnlineStatus = props.navPage.friends.map(friend => <Friend name={friend.name} avatar={friend.avatar} key={friend.id}/>)
    return (
        (<div className={classes.friendsOnline}>
            {friendsOnlineStatus}
        </div>)
    )
}



export default SideBar;