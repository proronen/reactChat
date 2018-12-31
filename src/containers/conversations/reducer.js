const initialState = {
    conversations: null
}

const conversationsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "loadConversations": 
            return {
            ...state,
            conversations: action.obj.payload.convList
        }
        default: 
            return state;    
    }
}

export default conversationsReducer;