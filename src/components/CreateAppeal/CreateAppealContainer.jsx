import classes from "./CreateAppeal.module.css"
import {connect} from "react-redux";
import CreateAppeal from "./CreateAppeal";
import {AddAppealAC, sendAppeals} from "../../redux/appeal-reducer";


let mapStateToProps = (state) => {
    return{

    }

}
let mapDispatchToProps = (dispatch) => {
    return{
        // sendAppeal: (lastName,name,computerName,newAppealText) => {
        //     dispatch(AddAppealAC(lastName,name, computerName, newAppealText));
        // },
        sendAppeals: (lastName, name, computerName, message) =>{
            dispatch(sendAppeals(lastName, name, computerName, message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAppeal);