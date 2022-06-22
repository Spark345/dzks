import classes from "./CreateAppeal.module.css"
import {Field, reduxForm} from "redux-form";
import Modal from "../UI/Modal/Modal";
import {useState} from "react";
import {Navigate} from "react-router-dom";
import MySelect from "../UI/Select/MySelect";
import MyButton from "../UI/Button/MyButton";


const CreateAppeal = (props) =>{



    const addNewAppeal = (values) => {

        let addZero = (num) => {
            if (num >= 0 && num <= 9) {
                return '0' + num;
            } else {
                return num;
            }
        }

        let date = new Date();
        let Year = date.getFullYear();
        let Month = addZero((date.getMonth() + 1)) ;
        let Day = addZero(date.getDate());

        let dateNow = addZero(Day + '.' + Month + '.' + Year);

        props.sendAppeals(props.userId, values.lastName,values.name, values.computerName,values.newAppealText, dateNow, values.levelUrgency)
    }

    if(props.userId == null)return <Navigate to = "/login"/>

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

    const [modalActive, setModalActive] = useState(false)

    return(
        <div>
            <form className={classes.form} onSubmit={props.handleSubmit}>
                <div className={classes.formInputItems}>
                    <div className={classes.formItem}>
                        <Field className={classes.formInput} placeholder={"Введите ваше имя"} name={"name"} component={"input"}/>
                    </div>
                    <div className={classes.formItem}>
                        <Field className={classes.formInput} placeholder={"Введите вашу фвамилию"} name={"lastName"} component={"input"}/>
                    </div>
                    <div className={classes.formItem}>
                        <Field className={classes.formInput} placeholder={"Введите имя компьютера"} name={"computerName"} component={"input"}/>
                    </div>
                    <div className={classes.formItem}>
                        <Field className={classes.formTextarea} placeholder={"Опешите проблему"} name={"newAppealText"} component={"textarea"}/>
                    </div>
                    <div className={classes.formItem}>
                        <Field className={classes.formSelect} name={"levelUrgency"} component={"select"}>
                            <option disabled="disabled" >Уровень сложности</option>
                            <option color="red" value="1">Низкий</option>
                            <option value="2">Средний</option>
                            <option value="3">Высокий</option>
                        </Field>
                    </div>
                </div>
                <div>
                    <MyButton onClick={() => setModalActive(true)} >Отправить</MyButton>
                </div>
            </form>
            <Modal active={modalActive} setActive={setModalActive}> Заявка успешно сформирована!</Modal>
        </div>

    );
}

const CreateAppealReduxForm = reduxForm({form: 'appeal'})(CreateAppealForm)

export default CreateAppeal;