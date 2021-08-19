import React from 'react';
import preloader from './preloader.gif';



let Preloader = (props) => {
    return (
        <div>
            <img style={{ width: '100%', height: 'auto' }} src={preloader} />
        </div>
    )
}

export default Preloader;