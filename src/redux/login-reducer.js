const SET_PASSWORD_FORM = 'SET_PASSWORD_FORM'

let initialState = {
    password: "123",
    isAuth: false,

}


const loginReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_PASSWORD_FORM: {

            if(state.password === action.password){
                return {...state,
                    isAuth: true,
                }
            }
            else {
                return {
                    isAuth: false,
                    password: "123"
                }
            }
        }
        default:
            return state;
    }
}

export const setPasswordFormAC = (password) => ({type: SET_PASSWORD_FORM, password})

export default loginReducer;