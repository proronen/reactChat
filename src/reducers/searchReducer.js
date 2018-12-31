import actionTypes from '../actions/actionTypes'

const initialState = {
    searchOpened: false,
    searchVal: ""
} 

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_SEARCH:
            return {
                ...state,
                searchOpened: !state.searchOpened
        }
        case actionTypes.POPULATE_SEARCH_VAL:
            return {
                ...state,
                searchVal: action.payload
        }
        case actionTypes.FILTERED_QUERY:
            return {
                ...state,
                filter_query: action.payload
        }
        case actionTypes.SEARCH:
            return {
                ...state
        }
        default: 
            return state;
    }
} 

export default searchReducer;