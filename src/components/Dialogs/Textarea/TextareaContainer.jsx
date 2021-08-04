import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../redux/dialogsReducer';
import Textarea from './Textarea';
import StoreContext from '../../../storeContext';

function TextareaContainer(props) {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }

                    let onMessageChange = (text) => {
                        store.dispatch(updateNewMessageActionCreator(text))
                    }

                    return <Textarea updateNewMessage={onMessageChange} addMessage={addMessage} newMessage={state.dialogsPage.newMessage} dispatch={props.dispatch} />
                }}
        </StoreContext.Consumer>
    );
}


export default TextareaContainer;
