import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControl';
import classes from './Textarea.module.scss';

const maxLength100 = maxLengthCreator(100)


function TextareaComponent(props) {
    return (
        <AddMessageFormRedux onSubmit={props.addMessage} />
    );
}

const AddMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit} className={classes.textarea_wrapper}>
        <Field component={Textarea} name={"newMessageBody"} placeholder={"enter your message"} validate={[requiredField, maxLength100]} />
        <div className={classes.buttons}>
            <button className={classes.button}>+</button>
            <button className={classes.submit}>Send Message</button>
        </div>
    </form>)
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default TextareaComponent;
