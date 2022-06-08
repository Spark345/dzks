import classes from "./CreateAppeal.module.css"
import {connect} from "react-redux";
import CreateAppeal from "./CreateAppeal";
import {AddAppealAC, sendAppeals} from "../../redux/appeal-reducer";


let mapStateToProps = (state) => {
    return{
        userId: state.loginPage.userId
    }

}
let mapDispatchToProps = (dispatch) => {
    return{
        // sendAppeal: (lastName,name,computerName,newAppealText) => {
        //     dispatch(AddAppealAC(lastName,name, computerName, newAppealText));
        // },
        sendAppeals: (userId, lastName, name, computerName, message, datе,levelUrgency) =>{
            dispatch(sendAppeals(userId, lastName, name, computerName, message, datе, levelUrgency))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAppeal);