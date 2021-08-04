import React from 'react';
import classes from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import TextareaContainer from './Textarea/TextareaContainer';
import StoreContext from '../../storeContext';

function Dialogs(props) {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let dialogsElements = state.dialogsPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar} />)

                    let messagesElements = state.dialogsPage.messages.map(message => <Message message={message.message} />)
                    return (
                        <div className={classes.dialogs_wrapper}>
                            <div className={classes.dialogs}>
                                {dialogsElements}
                            </div>
                            <div className={classes.messages_wrapper}>
                                <div className={classes.messages}>
                                    {messagesElements}
                                </div>
                                <TextareaContainer /></div>
                        </div>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default Dialogs;
