const ADD_APPEAL = 'ADD_APPEAL'
const OPEN_APPEAL_STATUS = 'CHANGE_APPEAL_STATUS'
const CLOSE_APPEAL_STATUS = 'CLOSE_APPEAL_STATUS'
const SET_SORT_APPEALS_STR = 'SET_SORT_APPEALS_STR'
const SET_SORT_APPEALS_BOOL = 'SET_SORT_APPEALS_BOOL'

let initialState = {
    appeals:[
        {id: 1, lastName:"Иванов", Name:"Руслан", computerName: "comp_1", message: "Пк не работает", Date: "2022 03 05", status: true},
        {id: 2, lastName:"БПетров", Name:"Генадий", computerName: "comp_2", message: "Требуется переустановить Windows",Date: "2021 12 25", status: false },
    ],

}

let addZero = (num) => {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}
let i = 3;
const appealReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_APPEAL: {
            let date = new Date();
            let dateNow = addZero(date.getFullYear() + ' ' + addZero((date.getMonth() + 1)) + ' ' + addZero(date.getDate()));
            let newAppeal = {
                id: i++,
                lastName: action.lastName,
                Name: action.name,
                computerName: action.computerName,
                message: action.newAppealText,
                Date: dateNow,
                status: true,
            }
            return{...state,
                appeals: [...state.appeals, newAppeal]
            };
        }
        case SET_SORT_APPEALS_STR: {
            return {...state,
                appeals: [...state.appeals].sort((a,b) => a[action.str].localeCompare(b[action.str]))

            }
        }
        case SET_SORT_APPEALS_BOOL: {
            // debugger;
            return {...state,
                appeals: [...state.appeals].sort((a, b) => b[action.bool] - a[action.bool]).reverse()
                // appeals: [action.bool]

            }
        }
        case OPEN_APPEAL_STATUS: {

            return {...state,
                // ...state.appeals.status = action.status
                // appeals: [...state.appeals].map(appeal => appeal.status = action.status)
                appeals: [...state.appeals].map(appeal => {
                    if (appeal.id === action.appealId) {
                        appeal.status = true
                        return appeal;
                        // appeal: [...appeal, ...appeal.status]}
                    } else {

                        return appeal;
                    }
                })
            }
        }
        case CLOSE_APPEAL_STATUS: {

            return {...state,
                // ...state.appeals.status = action.status
                // appeals: [...state.appeals].map(appeal => appeal.status = action.status)
                appeals: [...state.appeals].map(appeal => {
                    if (appeal.id === action.appealId) {
                       appeal.status = false
                        return appeal;
                            // appeal: [...appeal, ...appeal.status]}
                    } else {

                        return appeal;
                    }
                })
            }
        }

        default:
            return state;
    }
}
export const AddAppealAC = (id,lastName,name, computerName, newAppealText) => ({type:ADD_APPEAL, lastName, name,computerName, newAppealText})
export const OpenAppealStatusAC = (appealId) => ({type:OPEN_APPEAL_STATUS, appealId })
export const CloseAppealStatusAC = (appealId) => ({type:CLOSE_APPEAL_STATUS, appealId })
export const sortAppealsStrAC = (str) => ({type: SET_SORT_APPEALS_STR, str })
export const sortAppealsBoolAC = (bool) => ({type: SET_SORT_APPEALS_BOOL, bool })

export default appealReducer;