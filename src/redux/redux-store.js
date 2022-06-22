import {applyMiddleware,combineReducers, compose, createStore} from "redux";
import appealReducer from "./appeal-reducer"
import {reducer as formReducer} from "redux-form";
import loginReducer from "./login-reducer";
import thunkMiddleware from "redux-thunk"
import archiveReducer from "./archive-reducer";


let reducers = combineReducers({
    appealPage: appealReducer,
    archivePage: archiveReducer,
    loginPage: loginReducer,
    form: formReducer,
});


//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, applyMiddleware(thunkMiddleware)); //, composeEnhancers( applyMiddleware(thunkMiddleware) )
export default store;