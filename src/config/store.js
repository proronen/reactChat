import { createStore,combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import searchReducer from '../reducers/searchReducer';
import conversationsReducer from '../reducers/conversationsReducer';
import chatReducer from '../reducers/chatReducer';
  
const rootReducer = combineReducers({
    searchReducer,
    conversationsReducer,
    chatReducer   
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || "";

const store = createStore(
    rootReducer,
    {},
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store;