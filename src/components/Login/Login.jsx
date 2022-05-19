import React from 'react';
import classes from "../CreateAppeal/CreateAppeal.module.css";
import {Field, reduxForm} from "redux-form";
import {Navigate} from "react-router-dom";


const Login = (props) => {
    const setPassword = (values) =>{
        props.sendPassword(values.password)

    }

    if (props.isAuth === true) return <Navigate to = "/listAppeal"/>

    return (
        <div>
            <h2>LOGIN p.s. "пароль: 123"</h2>
            <br/>
            <CreateLoginReduxForm onSubmit={setPassword} />
        </div>
    );
};

const CreateLoginForm = (props) => {

    return(
        <div>
            <form className={classes.form} onSubmit={props.handleSubmit}>
                <div className={classes.formInputItems}>
                    <div className={classes.formInputItem}>
                        <Field className={classes.formInput} placeholder={"Enter your password"} name={"password"} component={"input"}/>
                    </div>
                </div>
                <div className={classes.formBtnItem}>
                    <button className={classes.formBtn}>Send</button>
                </div>
            </form>
        </div>

    );
}

const CreateLoginReduxForm = reduxForm({form: 'login'})(CreateLoginForm)

export default Login;