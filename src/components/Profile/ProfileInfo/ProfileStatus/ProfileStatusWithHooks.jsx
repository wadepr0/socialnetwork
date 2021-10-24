import React, { useEffect, useState } from 'react';
import classes from './ProfileStatus.module.scss';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (<div className={classes.status}>
        {!editMode
            ? <div>
                <span onDoubleClick={activateEditMode}>{status || 'I don\'t have status yet'}</span>
            </div >
            : <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}></input>
            </div >}
    </div>);


}


export default ProfileStatusWithHooks;