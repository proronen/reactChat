import actionTypes from '../actions/actionTypes'

const initialState = {
    conversations: null
}

const conversationsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOAD_CONVERSATIONS:
            return {
            ...state,
            conversations: action.payload
        }
        default: 
           return state;
    }
}

export default conversationsReducer;