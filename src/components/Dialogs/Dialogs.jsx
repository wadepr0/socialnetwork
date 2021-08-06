import React from 'react';
import classes from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Textarea from './Textarea/Textarea';

function Dialogs(props) {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar} />)

    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} />)

    let onMessageChange = (text) => {
        props.updateNewMessage(text)
    }

    let addMessage = () => {
        props.addMessage()
    }
    return (
        <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs}>
                {dialogsElements}
            </div>
            <div className={classes.messages_wrapper}>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
                <Textarea updateNewMessage={onMessageChange} addMessage={addMessage} newMessage={props.dialogsPage.newMessage} /></div>
        </div>
    )
}

export default Dialogs;
