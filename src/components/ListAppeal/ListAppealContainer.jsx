import {connect} from "react-redux";
import {
    sortAppealsStrAC,
    sortAppealsBoolAC,
    sortAppealsDateAC, getAppeals, updateStatus,
} from "../../redux/appeal-reducer";
import ListAppeal from "./ListAppeal";


let mapStateToProps = (state) => {
    return{
        appeals: state.appealPage.appeals,
        isAuth: state.loginPage.isAuth,
        password: state.loginPage.password,
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
        getAppeals: () => {
            dispatch(getAppeals())
        },
        updateStatus: (id, status) => {
            dispatch(updateStatus(id, status))
        },

    }
}

export const ListAppealContainer = connect(mapStateToProps, mapDispatchToProps)(ListAppeal);

