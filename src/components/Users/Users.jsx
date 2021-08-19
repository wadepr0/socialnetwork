import React from 'react';
import classes from "./Users.module.scss"

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={classes.pages}>
            {pages.map(item => <span onClick={(e) => props.onPageChanged(item)} className={props.currentPage === item && classes.currentPage}>{item}</span>)}
        </div>
        {
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
        }
    </div>
}


export default Users;