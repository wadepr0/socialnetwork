import React from 'react';
import classes from "./Users.module.scss"
import * as axios from 'axios'

function Users(props) {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return (
        props.users.map(user => <div key={user.id} className={classes.wrap}>
            <div className={classes.info}>
                <img className={classes.avatar} src={user.photos.small === null ? 'https://www.meme-arsenal.com/memes/fdff581c15b2110b6a4280e3d85db6cc.jpg' : user.photos.small} alt="" />
                <div className={classes.infoWrapper}>
                    <div className={classes.nameLocation}>
                        <div className={classes.userName}>{user.name}</div>
                        <div className={classes.location}>{`${user.name}'s City`} {'Country'}</div>
                    </div>
                </div>
                <i className={classes.status}>{user.status === null ? 'I don\'t have status yet' : user.status}</i>
                <div>{user.followed
                    ? <button className={classes.followButton} onClick={() => { props.toggleFollow(user.id) }}>Unfollow</button>
                    : <button className={`${classes.greenButton} ${classes.followButton}`} onClick={() => { props.toggleFollow(user.id) }}>Follow</button>}
                </div>
            </div>
        </div>)
    )
}

export default Users;