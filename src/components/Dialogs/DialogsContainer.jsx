import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
