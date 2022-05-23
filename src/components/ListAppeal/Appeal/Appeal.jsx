import classes from "./Appeal.module.css"
import AppealStatus from "./AppealStatus";
import Modal from "../../UI/Modal/Modal";
import {useState} from "react";

const Appeal = (props) =>{

    const [modalActive, setModalActive] = useState(false)

    console.log(props)
    return(
        <div className={classes.appeal} >
            <div className={classes.appealInner} >
                    <div className={classes.appealItems}>
                        <span className={classes.appealItem}>{props.lastName}</span>
                        <span className={classes.appealItem}>{props.Name}</span>
                        <span className={classes.appealItem}>{props.computerName}</span>
                        <span className={`${classes.appealItem} ${classes.appealItemMessage}`} onClick={() => setModalActive(true)} >{props.message}</span>
                        {props.message.length >= 30 ? <p className={classes.appealMessageEnd}>...</p> : null}
                        <span className={`${classes.appealItem} ${classes.appealItemDate}`}>{props.Date}</span>
                    </div>
                <div className={classes.status}>
                    <AppealStatus onOpenStatus = {props.onOpenStatus}
                                           onCloseStatus = {props.onCloseStatus}
                                           status = {props.status}
                                           appealId = {props.appealId}
                    />
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive} title={"Проблема"}>
                <p> {props.message}</p>
            </Modal>
        </div>
    );
}

export default Appeal