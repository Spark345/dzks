import classes from "./Appeal.module.css"
import AppealStatusWithHooks from "./AppealStatus";

const Appeal = (props) =>{
    console.log(props)
    return(
        <div className={classes.appeal}>
            <div className={classes.appealInner}>
                    <div className={classes.appealItems}>
                        <span className={classes.appealItem}>{props.lastName}</span>
                        <span className={classes.appealItem}>{props.Name}</span>
                        <span className={classes.appealItem}>{props.computerName}</span>
                        <span className={`${classes.appealItem} ${classes.appealItemText}`} >{props.message}</span>
                        <span className={classes.appealItem}>{props.Date}</span>
                    </div>
                <div className={classes.appealStatus}>
                    <AppealStatusWithHooks onOpenStatus = {props.onOpenStatus}
                                           onCloseStatus = {props.onCloseStatus}
                                           status = {props.status}
                                           appealId = {props.appealId}
                    />
                </div>
            </div>
        </div>
    );
}

export default Appeal