import React, {useState, useEffect} from "react";
import classes from "./Appeal.module.css"

const AppealStatusWithHooks = (props) => {
    
    // let [status , setStatus] = useState(props.status)

    // useEffect(()=>{
    //     setStatus(props.status)
    // }, [props.status])

    const activateEditMode = () =>{
        // setStatus(true);
        props.onOpenStatus(props.appealId)
        console.log(props.appealId)
    }
    const deactivateEditMode = () => {
        // setStatus(false);
        props.onCloseStatus(props.appealId)
        console.log(props.appealId)
    }

    return(
        <div className={classes.status}>
            <div className={classes.statusItems}>
                {props.status &&
                    <div className={classes.statusItem}>
                        <span className={classes.statusTextOpen} onClick={deactivateEditMode}>Открыта</span>
                    </div>
                }
                {!props.status &&
                    <div className={classes.statusItem}>
                        <span className={classes.statusItemClose} onClick={activateEditMode}>Закрыта</span>
                    </div>
                }
            </div>
        </div>

    );
}

export default  AppealStatusWithHooks;
