import React from 'react';
import classes from './Textarea.module.scss';

function Textarea(props) {
    let newMessage = React.createRef();

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessage(text)
    }
    return (
        <div className={classes.textarea_wrapper}>
            <textarea ref={newMessage} onChange={onMessageChange} value={props.newMessage} />
            <div className={classes.buttons}>
                <button className={classes.button}>+</button>
                <button onClick={addMessage} className={classes.submit}>Send Message</button>
            </div>
        </div>
    );
}

export default Textarea;
