import {connect} from "react-redux";
import {
    sortAppealsStrAC,
    sortAppealsBoolAC,
    sortAppealsDateAC, getAppeals, updateStatus, getUserAppeals, sortAppealsUrgencyAC, setIsFetching,
} from "../../redux/appeal-reducer";
import ListAppeal from "./ListAppeal";
import {logoutUser} from "../../redux/login-reducer";



let mapStateToProps = (state) => {
    return{
        appeals: state.appealPage.appeals,
        isAuth: state.loginPage.isAuth,
        userId: state.loginPage.userId,
        isFetching: state.appealPage.isFetching,
    }
};

let mapDispatchToProps = (dispatch) =>{
    return{
        setAppealStr: (name) =>{
            dispatch(sortAppealsStrAC(name))

        },
        setAppealBool: (name) =>{
            dispatch(sortAppealsBoolAC(name))

        },
        setAppealDate: (name) =>{
            dispatch(sortAppealsDateAC(name))

        },
        setAppealUrgency: (name) =>{
            dispatch(sortAppealsUrgencyAC(name))
        },
        getAppeals: () => {
            dispatch(getAppeals())
        },
        getUserAppeals: (userId) =>{
            dispatch(getUserAppeals(userId))
        },
        updateStatus: (id, status, inspect) => {
            dispatch(updateStatus(id, status, inspect))
        },
        logoutUser: () =>{
            dispatch(logoutUser())
        }

    }
}

export const ListAppealContainer = connect(mapStateToProps, mapDispatchToProps)(ListAppeal);

