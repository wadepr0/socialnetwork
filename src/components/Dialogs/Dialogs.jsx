import React from 'react';
import classes from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

function Dialogs(props) {
    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar}/>)

    let messagesElements = props.state.messages.map(message => <Message message={message.message} />)

    return (
        <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;
