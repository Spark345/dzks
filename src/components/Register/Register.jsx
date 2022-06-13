import classes from "../CreateAppeal/CreateAppeal.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {Link, Navigate} from "react-router-dom";


const Register = (props) => {

    const registerUser = (values) => {
        props.registerUser(values.email, values.password)
    }

    console.log(props.userId)
    if (props.isAuth === true) return <Navigate to = "/listAppeal"/>
    return (
        <div className={classes.createAppeal}>
            <div className={classes.createAppealContent}>
                <h2 className={classes.title} >Регистрация</h2>
                {/*<CreateLoginReduxForm onSubmit={setAuthData} />*/}
                {/*<CreateRegisterReduxForm onSubmit={registerUser} />*/}
                <CreateRegisterReduxForm onSubmit={registerUser} text = {<button className={classes.formBtn}>Зарегестрироваться</button>}/>
                <div ><Link className = {classes.formLink} to = {'/login'}>Войти</Link></div>
            </div>
        </div>
        // text = {<button className={classes.formBtn}>Войти</button>}
    );
};

const CreateRegisterForm = (props) => {
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

const CreateRegisterReduxForm = reduxForm({form: 'register'})(CreateRegisterForm)

export default Register;