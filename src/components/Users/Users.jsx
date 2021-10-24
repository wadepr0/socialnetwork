import React from 'react';
import { NavLink } from 'react-router-dom';
import Paginator from './Paginator';
import classes from "./Users.module.scss"


let Users = (props) => {
    return <div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />
        {
            props.users.map(user => <div key={user.id} className={classes.wrap}>
                <div className={classes.info}>
                    <NavLink to={'/profile' + '/' + user.id}>
                        <img className={classes.avatar} src={user.photos.small === null ? 'https://www.meme-arsenal.com/memes/fdff581c15b2110b6a4280e3d85db6cc.jpg' : user.photos.small} alt="" />
                    </NavLink>
                    <div className={classes.infoWrapper}>
                        <div className={classes.nameLocation}>
                            <div className={classes.userName}>{user.name}</div>
                            <div className={classes.location}>{`${user.name}'s City`} {'Country'}</div>
                        </div>
                    </div>
                    <i className={classes.status}>{user.status === null ? 'I don\'t have status yet' : user.status}</i>
                    <div>{user.followed
                        ? <button disabled={props.isFollowingProgress.some(id => id === user.id)} className={classes.followButton} onClick={() => {
                            props.unFollowUsers(user.id)
                        }}>Unfollow</button>
                        : <button disabled={props.isFollowingProgress.some(id => id === user.id)} className={`${classes.greenButton} ${classes.followButton}`} onClick={() => {
                            props.followUsers(user.id)
                        }}>Follow</button>}
                    </div>
                </div>
            </div>)
        }
    </div>
}


export default Users;