
import classes from "./Appeal.module.css"

const AppealStatus = (props) => {

    const openStatus = () =>{
        props.updateStatus(props.appealId, !props.status, false)
        console.log(props.appealId)
    }
    const closeStatus = () => {
        props.updateStatus(props.appealId, !props.status, false)
        console.log(props.appealId)
    }

    return(
        <div className={classes.statusItems}>
            {props.status &&
                <div className={`${classes.statusItem} ${classes.statusTextOpen}`}>
                    <span onClick={closeStatus}>Открыта</span>
                </div>
            }
            {!props.status &&
                <div className={`${classes.statusItem} ${classes.statusItemClose}`}>
                    <span onClick={openStatus}>Закрыта</span>
                </div>
            }
        </div>

    );
}

export default  AppealStatus;
