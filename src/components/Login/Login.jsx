import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { login, logout } from '../../redux/authReducer'
import { requiredField } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControl'
import classes from "./../common/FormsControls/FormsControl.module.scss"


const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} validate={[requiredField]} component={Input} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'} validate={[requiredField]} component={Input} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} />remember me
            </div>
            {props.error && <div className={classes.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);

