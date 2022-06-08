import {AuthAPI} from "../api/api";

const SET_PASSWORD_FORM = 'SET_PASSWORD_FORM'

let initialState = {
    userId: null,
    isAuth: false,

}


const loginReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_PASSWORD_FORM: {

            return {...state,
                userId: action.userId,
                isAuth: action.isAuth
            }
            // if(state.password === action.password){
            //     return {...state,
            //         isAuth: true,
            //     }
            // }
            // else {
            //     return {
            //         isAuth: false,
            //         password: "123"
            //     }
            // }
        }
        default:
            return state;
    }
}

export const setAuthData = (userId, isAuth) => ({type: SET_PASSWORD_FORM, userId, isAuth})

// export const getAuthUserData = () => async (dispatch) =>{
//     let data = await AuthAPI.getUserData()
//     console.log(data)
//     let {id, login, password} = data;
//     dispatch(setAuthData(id, login, password, true))
// }
export const loginUser = (login, password) => async (dispatch) =>{
    let data = await AuthAPI.login(login, password)
    console.log(data.userId)
    // dispatch(getAuthUserData(data.userId))
        dispatch(setAuthData(data.userId, true))

}
export const logoutUser = () => async (dispatch) =>{
    let data = await AuthAPI.logout()
    dispatch(setAuthData(null, null,null, false))
}
export const registerUser = (login, password) => async (dispatch) =>{
    let data = await AuthAPI.register(login, password)
    console.log(data)
    if(data.status === 201){
        dispatch(setAuthData(-2, false))
    }
}

export default loginReducer;