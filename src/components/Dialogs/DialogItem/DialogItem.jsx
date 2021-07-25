import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.scss';

function DialogItem(props) {
    let path = "/dialogs/" + props.id;
    return (
        <NavLink to={path} activeClassName={classes.active} className={classes.dialog}>
            <img src={props.avatar} alt="" />
            {props.name}
        </NavLink>
    )
}


export default DialogItem;