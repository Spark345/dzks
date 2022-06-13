import Login from "./Login";
import {connect} from "react-redux";
import {loginUser} from "../../redux/login-reducer";

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
    }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);