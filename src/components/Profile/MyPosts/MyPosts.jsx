import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControl';
import classes from './MyPosts.module.scss';
import Post from './Post/Post';

const maxLength50 = maxLengthCreator(50)

function MyPosts(props) {
    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} author={post.author} date={post.date} key={post.id} />)

    let addPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={classes.wrapper}>
            <AddNewPostForm onSubmit={addPost} />
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}



let AddNewPostForm = (props) => {
    console.log(props);
    return (
        <form onSubmit={props.handleSubmit} className={classes.textarea_wrapper}>
            <div className={classes.header}>New Post</div>
            <Field name="newPostText" component={Textarea} validate={[requiredField, maxLength50]} />
            <div className={classes.buttons}>
                <button className={classes.button}>+</button>
                <button className={classes.submit}>Create Post</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

export default MyPosts;