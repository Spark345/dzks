
import classes from "./Appeal.module.css"

const AppealStatus = (props) => {

    const openStatus = () =>{
        props.onOpenStatus(props.appealId)
        console.log(props.appealId)
    }
    const closeStatus = () => {
        props.onCloseStatus(props.appealId)
        console.log(props.appealId)
    }

    return(
        <div className={classes.status}>
            <div className={classes.statusItems}>
                {props.status &&
                    <div className={classes.statusItem}>
                        <span className={classes.statusTextOpen} onClick={closeStatus}>Открыта</span>
                    </div>
                }
                {!props.status &&
                    <div className={classes.statusItem}>
                        <span className={classes.statusItemClose} onClick={openStatus}>Закрыта</span>
                    </div>
                }
            </div>
        </div>

    );
}

export default  AppealStatus;
