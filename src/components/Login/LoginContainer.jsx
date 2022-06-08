import Login from "./Login";
import {connect} from "react-redux";
import {loginUser, registerUser} from "../../redux/login-reducer";

let mapStateToProps = (state) =>{
    return{
        userId: state.loginPage.userId,
        isAuth: state.loginPage.isAuth,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        sendAuthData: (email, password) => {
            dispatch(loginUser(email, password))
        },
        registerUser: (login, password) =>{
            dispatch(registerUser(login, password))
        }
    }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);