import Login from "./Login";
import {connect} from "react-redux";
import {setPasswordFormAC} from "../../redux/login-reducer";

let mapStateToProps = (state) =>{
    return{
        isAuth: state.loginPage.isAuth,
        password: state.loginPage.password,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        sendPassword: (password) => {
            dispatch(setPasswordFormAC(password))
        }
    }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);