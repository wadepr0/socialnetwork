import React from 'react';
import classes from './Header.module.scss';
console.log(classes);
function Header() {
    return (
        <header className={classes.header}>
            <img src="/images/reactjs-icon.svg" alt="" />
            <div className={classes.logo}>WADE<span>PRO</span></div>
        </header>
    );
}

export default Header;