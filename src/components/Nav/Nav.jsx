import React from 'react';
import classes from './Nav.module.scss';

function Nav() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}><a>profile</a></li>
                <li className={classes.item}><a>messages</a></li>
                <li className={classes.item}><a>news</a></li>
                <li className={classes.item}><a>likes</a></li>
                <li className={classes.item}><a>settings</a></li>
            </ul>
        </nav>
    );
}

export default Nav;