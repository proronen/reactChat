const initialState = {
    searchOpened: false,
    searchVal: ""
} 

const SearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'toggleSearch':
        return {
            ...state,
            searchOpened: !state.searchOpened
        }
        case 'populateSearchVal':
        console.log("populateSearchVal")
        console.log(action)
        return {
            ...state,
            searchVal: action.obj.payload.q
        }
        case 'search':
        console.log("search")
        console.log(action)
        return {
            ...state
        }
        default: 
            return state;
    }
} 

export default SearchReducer;