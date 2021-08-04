import React from 'react';
import classes from './Nav.module.scss';
import { NavLink } from 'react-router-dom';
import SideBar from './Sidebar/SideBar'

function Nav(props) {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}><NavLink activeClassName={classes.active} className={`${classes.link} ${'fa-home'}`} to='/profile'></NavLink></li>
                <li className={classes.item}><NavLink activeClassName={classes.active} className={`${classes.link} ${'fa-envelope-o'}`} to='/dialogs'></NavLink></li>
                <li className={classes.item}><NavLink activeClassName={classes.active} className={`${classes.link} ${'fa-camera-retro'}`} to='/photos'></NavLink></li>
                <li className={classes.item}><NavLink activeClassName={classes.active} className={`${classes.link} ${'fa-music'}`} to='/music'></NavLink></li>
                <li className={classes.item}><NavLink activeClassName={classes.active} className={`${classes.link} ${'fa-cog'}`} to='/settings'></NavLink></li>
            </ul>
            <SideBar />
        </nav>
    );
}

export default Nav;