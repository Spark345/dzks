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
                            ?<span className={`${classes.appealItem} ${classes.appealLevel}`}><span className={`${classes.appealLevelGreen}`}> </span></span>
                            : props.levelUrgency === 2
                                ?<span className={`${classes.appealItem} ${classes.appealLevel}`}><span className={`${classes.appealLevelYellow}`}> </span></span>
                                :  props.levelUrgency === 3
                                    ?<span className={`${classes.appealItem} ${classes.appealLevel}`}><span className={`${classes.appealLevelRed}`}> </span></span>
                                    :<div> </div>
                        }
                        {props.status === false && props.inspect === false && props.userId !== 1
                            ? <Modal active={modalActiveConfirmStatus} setActive={setModalActiveConfirmStatus} title={"???????????????????????? ??????????????"}>
                                <p>???????????? ?????????? ????????????</p><p>"{props.message}"</p><p>?????? ?????????????? ?????????????????????????????? ???? "??????????????".
                                    ???????? ???? ???? ???????????????? ?? ???????? ???? ???????????????? ???????????? ???? ?????????????????? ??????????????????????!
                                </p>
                                <button onClick={confirm}>??????????????????????</button>
                                <button onClick={send}>?????????????????? ????????????????</button>
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
            <Modal active={modalActiveAppealInfo} setActive={setModalActiveAppealInfo} title={"????????????????"}>
                <p> {props.message}</p>
            </Modal>
        </div>
    );
}

export default Appeal