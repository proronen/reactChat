import actionTypes from '../actions/actionTypes'

const initialState = {
    chatId: null
}

const chatReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.OPEN_CHAT:
            return {
            ...state,
            chatId: action.payload
        }   
        default: 
            return state;
    }
}

export default chatReducer;