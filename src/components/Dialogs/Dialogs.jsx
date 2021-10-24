import React from 'react';
import classes from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import TextareaComponent from './Textarea/Textarea';
import { Redirect } from 'react-router-dom';

function Dialogs(props) {
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar} key={dialog.id} />)

    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id} />)

    let addMessage = (values) => {
        props.addMessage(values.newMessageBody)
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
                <TextareaComponent addMessage={addMessage} /></div>
        </div>
    )
}

export default Dialogs;
