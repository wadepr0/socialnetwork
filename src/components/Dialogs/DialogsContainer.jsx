import React from 'react';
import Dialogs from './Dialogs';
import StoreContext from '../../storeContext';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';

function DialogsContainer(props) {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage;

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageActionCreator(text))
                }
                return <Dialogs updateNewMessage={onMessageChange} addMessage={addMessage} dialogsPage={state} />
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;
