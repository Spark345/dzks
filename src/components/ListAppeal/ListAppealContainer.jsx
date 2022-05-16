import {connect} from "react-redux";
import {CloseAppealStatusAC, OpenAppealStatusAC, sortAppealsStrAC, sortAppealsBoolAC} from "../../redux/appeal-reducer";
import ListAppeal from "./ListAppeal";



let mapStateToProps = (state) => {
    return{
        appeals: state.appealPage.appeals,
    }
};

let mapDispatchToProps = (dispatch) =>{
    return{
        onOpenStatus: (appealId) =>{
            dispatch(OpenAppealStatusAC(appealId));

        },
        onCloseStatus: (appealId) =>{
            dispatch(CloseAppealStatusAC(appealId));

        },
        setAppealStr: (name) =>{
            dispatch(sortAppealsStrAC(name))

        },
        setAppealBool: (name) =>{
            dispatch(sortAppealsBoolAC(name))

        }


    }
}

export const ListAppealContainer = connect(mapStateToProps, mapDispatchToProps)(ListAppeal);

