import {connect} from "react-redux";
import {getArchiveAppeals} from "../../redux/archive-reducer";
import ListAppeal from "./ListAppeal";
import {
    getAppeals, getUserAppeals,
    sortAppealsBoolAC,
    sortAppealsDateAC,
    sortAppealsStrAC,
    sortAppealsUrgencyAC, updateStatus
} from "../../redux/appeal-reducer";
import {logoutUser} from "../../redux/login-reducer";
import {useEffect} from "react";
import {Navigate} from "react-router-dom";


const ArchiveAppealsSideEffect = (props) =>{


    return(
        props.userId === 1
            ? <ListAppeal props = {props} />
            : <Navigate to = "/login"/>


    );
}

let mapStateToProps = (state) => {
    return{
        appealsArchive: state.archivePage.appealsArchive,
        isAuth: state.loginPage.isAuth,
        userId: state.loginPage.userId,
        isFetching: state.appealPage.isFetching,

    }
};

let mapDispatchToProps = (dispatch) =>{
    return{
        getArchiveAppeals: () => {
            dispatch(getArchiveAppeals())
        },
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
        }
    }
}

export const ArchiveAppealsContainer = connect(mapStateToProps, mapDispatchToProps)(ListAppeal);

