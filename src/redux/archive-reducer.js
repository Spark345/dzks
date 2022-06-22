import {AppealsAPI} from "../api/api";



const SET_ARCHIVE_APPEALS = 'SET_ARCHIVE_APPEALS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'



let initialState = {
    appealsArchive:[

    ],
    isFetching: null

}

const archiveReducer = (state = initialState, action) => {
    switch (action.type){

        case SET_ARCHIVE_APPEALS :{
            return {...state,
                appealsArchive: action.appealsArchive

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
export const setArchiveAppeals = (appealsArchive) => ({type: SET_ARCHIVE_APPEALS, appealsArchive})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching })



export const getArchiveAppeals = () => async (dispatch) =>{
    dispatch(setIsFetching(true))
    let data = await AppealsAPI.getArchiveAppeals()
    dispatch(setIsFetching(false))
    dispatch(setArchiveAppeals(data))
    console.log(data)
}


export default archiveReducer;