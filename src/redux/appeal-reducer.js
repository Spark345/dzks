import {AppealsAPI} from "../api/api";

const ADD_APPEAL = 'ADD_APPEAL'
const SET_APPEALS = 'SET_APPEALS'
const SET_SORT_APPEALS_STR = 'SET_SORT_APPEALS_STR'
const SET_SORT_APPEALS_BOOL = 'SET_SORT_APPEALS_BOOL'
const SET_SORT_APPEALS_DATE = 'SET_SORT_APPEALS_DATE'
const SET_SORT_APPEALS_URGENCY = 'SET_SORT_APPEALS_URGENCY'
const SET_STATUS = 'SET_STATUS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'


let initialState = {
    appeals:[
        // {id: 1, lastName:"Иванов", name:"Руслан", computerName: "comp_1", message: "Пк не работает", Date: "2022.03.05", status: true},
        // {id: 2, lastName:"Петров", name:"Генадий", computerName: "comp_2", message: "Требуется переустановить Windows",Date: "2021.12.25", status: false },
        // {id: 3, lastName:"Амель", name:"Артём", computerName: "comp_3", message: "Монитор не включается",Date: "2021.10.22", status: true },
    ],
    isFetching: null

}

const appealReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_APPEALS :{
            return {...state,
                appeals: action.appeals

            }
        }
        case SET_SORT_APPEALS_STR: {
            return {...state,
                appeals: [...state.appeals].sort((a,b) => a[action.str].localeCompare(b[action.str]))

            }
        }
        case SET_SORT_APPEALS_BOOL: {
            return {...state,
                appeals: [...state.appeals].sort((a, b) => a[action.bool] - b[action.bool]).reverse()

            }
        }
        case SET_SORT_APPEALS_DATE: {
            return {...state,
                appeals: [...state.appeals].sort((a, b) => b[action.nameDate] - a[action.nameDate]).reverse()

            }
        }
        case SET_SORT_APPEALS_URGENCY: {
            return {...state,
                appeals: [...state.appeals].sort((a, b) => a[action.levelUrgency] - b[action.levelUrgency]).reverse()

            }
        }
        case SET_STATUS: {
            return {...state,
                appeals: [...state.appeals].map(appeal => {
                    if(appeal.id === action.id){
                        appeal.status = action.status
                        return appeal;
                    }
                    else {
                        return appeal;
                    }
                })
            }
        }
        case SET_IS_FETCHING :{
            return {...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
}
// export const AddAppealAC = (lastName,name, computerName, newAppealText) => ({type:ADD_APPEAL, lastName, name,computerName, newAppealText})
export const setAppeals = (appeals) => ({type: SET_APPEALS, appeals})
export const sortAppealsStrAC = (str) => ({type: SET_SORT_APPEALS_STR, str })
export const sortAppealsBoolAC = (bool) => ({type: SET_SORT_APPEALS_BOOL, bool })
export const sortAppealsDateAC = (nameDate) => ({type: SET_SORT_APPEALS_DATE, nameDate})
export const sortAppealsUrgencyAC = (levelUrgency) => ({type: SET_SORT_APPEALS_URGENCY, levelUrgency})
export const setStatus = (id, status) => ({type: SET_STATUS, id,status })
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching })





export const getAppeals = () => async (dispatch) => {
    dispatch(setIsFetching(true))
    let data = await AppealsAPI.getAppeals()
    // console.log(data)
    dispatch(setIsFetching(false))
    dispatch(setAppeals(data))

}
export const getUserAppeals = (userId) => async (dispatch) =>{
    dispatch(setIsFetching(true))
    let data = await AppealsAPI.getUserAppeals(userId)
    dispatch(setIsFetching(false))
    dispatch(setAppeals(data))

}
export const sendAppeals = (userId, lastName, name, computerName, message, datе, levelUrgency) => async (dispatch)  =>{
    let data = await AppealsAPI.sendAppeals(userId, lastName, name, computerName, message, datе, levelUrgency)
    // dispatch(AddAppealAC(lastName, name, computerName, message))


}
    export const updateStatus = (id, status,inspect) => async (dispatch) => {
    let data = await AppealsAPI.updateStatus(id, status,inspect)

    dispatch(setStatus(id, status))


}

export default appealReducer;