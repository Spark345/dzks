import classes from "./CreateAppeal.module.css"
import {connect} from "react-redux";
import CreateAppeal from "./CreateAppeal";
import {AddAppealAC} from "../../redux/appeal-reducer";


let mapStateToProps = (state) => {
    return{

    }

}
let mapDispatchToProps = (dispatch) => {
    return{
        sendAppeal: (lastName,name,computerName,newAppealText) => {
            dispatch(AddAppealAC(lastName,name, computerName, newAppealText));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAppeal);