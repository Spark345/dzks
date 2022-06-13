import Register from "./Register";
import {connect} from "react-redux";
import {registerUser} from "../../redux/login-reducer";

let mapStateToProps = (state) =>{
    return{
        userId: state.loginPage.userId,
        isAuth: state.loginPage.isAuth,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        registerUser: (login, password) =>{
            dispatch(registerUser(login, password))
        }
    }
}

export const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);