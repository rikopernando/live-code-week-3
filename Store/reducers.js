import { SET_YOUTUBE } from './actionTypes'

const initialState = {
    youtube : [],
    isLoading : true
}


const reducers = (state = initialState, action) => {
    
    if (action.type === SET_YOUTUBE){
        return {
            ...state,
            youtube : action.payload,
            isLoading : false
        }
    }

    return state

}


export default reducers

