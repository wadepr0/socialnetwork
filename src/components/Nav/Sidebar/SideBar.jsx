import React from 'react';
import classes from './SideBar.module.scss';
import Friend from './Friend/Friend'
import StoreContext from '../../../storeContext';

function SideBar(props) {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let friendsOnlineStatus = state.navPage.friends.map(friend => <Friend name={friend.name} avatar={friend.avatar} />)

                    return (<div className={classes.friendsOnline}>
                        {friendsOnlineStatus}
                    </div>)
                }
            }
        </StoreContext.Consumer>
    )
}

export default SideBar;