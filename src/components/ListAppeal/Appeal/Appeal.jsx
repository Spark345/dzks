import classes from "./Appeal.module.css"
import AppealStatus from "./AppealStatus";
import Modal from "../../UI/Modal/Modal";
import {useEffect, useState} from "react";
import {updateStatus} from "../../../redux/appeal-reducer";

const Appeal = (props) =>{

    const [modalActiveAppealInfo, setModalActiveAppealInfo] = useState(false)
    const [modalActiveConfirmStatus, setModalActiveConfirmStatus] = useState(false)
    // const openStatus = () =>{
    //     props.updateStatus(props.appealId, !props.status)
    //     console.log(props.appealId)
    // }

// console.log(props.status)
    const confirm = () =>{
        props.updateStatus(props.appealId, false, true)
        setModalActiveConfirmStatus(false)
    }
    const send = () =>{
        props.updateStatus(props.appealId, true, false)
        setModalActiveConfirmStatus(false)
    }
    useEffect(()=>{
        let setModalActive = () => setModalActiveConfirmStatus(true)
        setTimeout(setModalActive, 2000)
    },[])

    console.log(props.inspect)
    return(
        <div className={classes.appeal} >
            <div className={classes.appealInner} >
                    <div className={classes.appealItems}>
                        <span className={classes.appealItem}>{props.lastName}</span>
                        <span className={classes.appealItem}>{props.Name}</span>
                        <span className={classes.appealItem}>{props.computerName}</span>
                        <span className={`${classes.appealItem} ${classes.appealItemMessage}`} onClick={() => setModalActiveAppealInfo(true)} >{props.message}</span>
                        {props.message.length >= 30 ? <p className={classes.appealMessageEnd}>...</p> : null}
                        <span className={`${classes.appealItem} ${classes.appealItemDate}`}>{props.Date}</span>
                        {props.levelUrgency === 1
                            ?<span className={`${classes.appealItem} ${classes.appealLevelGreen}`}>Низкий</span>
                            : props.levelUrgency === 2
                                ?<span className={`${classes.appealItem} ${classes.appealLevelYellow}`}>Средний</span>
                                :  props.levelUrgency === 3
                                    ?<span className={`${classes.appealItem} ${classes.appealLevelRed}`}>Высокий</span>
                                    :<div> </div>
                        }
                        {props.status === false && props.inspect === false && props.userId !== 1
                            ? <Modal active={modalActiveConfirmStatus} setActive={setModalActiveConfirmStatus} title={"Подтвержение статуса"}>
                                <p>Статус вашей заявки</p><p>"{props.message}"</p><p>был изменён администратором на "Закрыта".
                                    Если вы не согласны с этим то отправте заявку на повторное расмотрение!
                                </p>
                                <button onClick={confirm}>Подтвердить</button>
                                <button onClick={send}>Отправить повторно</button>
                              </Modal>
                            : null
                        }
                    </div>
                {props.userId === 1
                    ? <div className={classes.status}>
                        <AppealStatus status = {props.status}
                                      appealId = {props.appealId}
                                      updateStatus = {props.updateStatus}
                        />
                    </div>
                    : <div className={`${classes.status} ${classes.statusDeactivate}`}>
                        <AppealStatus status = {props.status}
                                      appealId = {props.appealId}
                                      updateStatus = {props.updateStatus}
                        />
                    </div>
                }
            </div>
            <Modal active={modalActiveAppealInfo} setActive={setModalActiveAppealInfo} title={"Проблема"}>
                <p> {props.message}</p>
            </Modal>
        </div>
    );
}

export default Appeal