import {combineReducers,compose, createStore} from "redux";
import appealReducer from "./appeal-reducer"
import {reducer as formReducer} from "redux-form";
import loginReducer from "./login-reducer";


let reducers = combineReducers({
    appealPage: appealReducer,
    loginPage: loginReducer,
    form: formReducer,
});


//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers); //, composeEnhancers( applyMiddleware(thunkMiddleware) )
export default store;