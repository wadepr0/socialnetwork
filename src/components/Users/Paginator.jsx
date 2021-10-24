import React from 'react';
import { useState } from 'react';
import classes from "./Users.module.scss"



let Paginator = ({ currentPage, onPageChanged, totalUsersCount, pageSize, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)

    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={classes.pages}>
            <div>{portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Previous</button>}</div>
            {pages.filter(item => item >= leftPortionPageNumber && item <= rightPortionPageNumber)
                .map(item => <span onClick={(e) => onPageChanged(item)} className={currentPage === item && classes.currentPage}>{item}</span>)}
            <div>{portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}</div>
        </div>
    )
}


export default Paginator;