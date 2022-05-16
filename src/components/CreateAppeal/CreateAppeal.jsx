import classes from "./CreateAppeal.module.css"
import {Field, reduxForm} from "redux-form";


const CreateAppeal = (props) =>{
    const addNewAppeal = (values) => {
        props.sendAppeal(values.lastName,values.name, values.computerName,values.newAppealText,)
    }
    return(
        <div className={classes.createAppeal}>
            <div className={classes.createAppealContent}>
                <h2 className={classes.title}>Сформируйте заявку</h2>
                <CreateAppealReduxForm onSubmit={addNewAppeal} />
            </div>
        </div>

    );
}

const CreateAppealForm = (props) =>{
    return(
            <form className={classes.form} onSubmit={props.handleSubmit}>
                <div className={classes.formInputItems}>
                    <div className={classes.formInputItem}>
                        <Field className={classes.formInput} placeholder={"Enter your name"} name={"name"} component={"input"}/>
                    </div>
                    <div className={classes.formInputItem}>
                        <Field className={classes.formInput} placeholder={"Enter your last name"} name={"lastName"} component={"input"}/>
                    </div>
                    <div className={classes.formInputItem}>
                        <Field className={classes.formInput} placeholder={"Enter your computer name"} name={"computerName"} component={"input"}/>
                    </div>
                    <div className={classes.formTextareaItem}>
                        <Field className={classes.formTextarea} placeholder={"Describe your problem"} name={"newAppealText"} component={"textarea"}/>
                    </div>
                </div>
                <div className={classes.formBtnItem}>
                    <button className={classes.formBtn} >Send</button>
                </div>
            </form>
    );
}

const CreateAppealReduxForm = reduxForm({form: 'appeal'})(CreateAppealForm)

export default CreateAppeal;