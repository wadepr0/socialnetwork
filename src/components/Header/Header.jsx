import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

function Header(props) {
    return (
        <header className={classes.header}>
            <div className={classes.logoWrapper}>
                <img src="/images/reactjs-icon.svg" alt="" />
                <div className={classes.logo}>WADE<span>PRO</span></div>
            </div>
            <div className={classes.loginBlock}>
                {props.isAuth ? 
                <div className={classes.userName}>{props.login}<button onClick={props.logout}>Logout</button></div> 
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;