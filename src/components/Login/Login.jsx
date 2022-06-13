import React from 'react';
import classes from "../CreateAppeal/CreateAppeal.module.css";
import {Field, reduxForm} from "redux-form";
import {Link, Navigate} from "react-router-dom";


const Login = (props) => {

    const setAuthData = (values) =>{
        props.sendAuthData(values.email, values.password)

    }
    console.log(props.userId)
    if (props.isAuth === true) return <Navigate to = "/listAppeal"/>
    return (
        <div className={classes.createAppeal}>
            <div className={classes.createAppealContent}>
                <h2 className={classes.title} >Авторизация</h2>
                <CreateLoginReduxForm onSubmit={setAuthData} text = {<button className={classes.formBtn}>Войти</button>}/>
                {/*<div><Link className = {classes.formLink} to = {'/register'}>Зарегистрироваться</Link></div>*/}
            </div>
        </div>
    );
};

const CreateLoginForm = (props) => {
    console.log(props)
    return(
        <div>
            <form className={classes.form} onSubmit={props.handleSubmit}>
                <div className={classes.formInputItems}>
                    <div className={classes.formInputItem}>
                        <Field className={classes.formInput} placeholder={"Введите логин"} name={"email"} component={"input"}/>
                    </div>
                    <div className={classes.formInputItem}>
                        <Field className={classes.formInput} placeholder={"Введите пароль"} name={"password"} component={"input"}/>
                    </div>
                </div>
                <div className={classes.formBtnItem}>
                   {props.text}
                </div>
            </form>
        </div>

    );
}

const CreateLoginReduxForm = reduxForm({form: 'login'})(CreateLoginForm)
export default Login;