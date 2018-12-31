import actionTypes from "./actionTypes";

export const toggleSearch = () => (dispatch) => {
    dispatch({
        type: actionTypes.TOGGLE_SEARCH
    });
}

export const search = (str) => (dispatch, getState) => {
    const conversations = getState().conversationsReducer.conversations;
    
    // here we will specify the fields to search in inside of our 
    // converstation objects and get their IDS

    const arrSearch = ["first_name","last_name"];
    
    const filteredFunc = (str, arrSearch) => {
        var lowSearch = str.toLowerCase();
        return Object.keys(conversations).map(x => conversations[x]).filter(function(conv){
            return arrSearch.some( key => 
                String(conv[key]).toLowerCase().includes(lowSearch) 
                )
        }).reduce((acc, item) => {
            return [...acc,item.id]
        }, []);
    }
        
    const filtered = filteredFunc(str,arrSearch);
    
    if(str !== "" && filtered && filtered.length > 0){
        dispatch({
            type: actionTypes.FILTERED_QUERY,
            payload: filtered
        });
        
        dispatch(loadConversations());
        
    } else {

        // this will remove the hide property from the conversations
        Object.keys(conversations).map(itemId => {
            return conversations[itemId].hide = null
        })
        
        // And dispatch to the store 
        dispatch({
            type: actionTypes.LOAD_CONVERSATIONS,
            payload: conversations
        });

        // reset the filter_query
        dispatch({
            type: actionTypes.FILTERED_QUERY,
            payload: null
        });
    }
}

export const loadConversations = (id, newMessage) => (dispatch, getState) => {
    
    // this action will be used to get all the conversations on load 
    // filter them in case filtering occurs and serve a specific conversation from user/group

    const filteredIds = getState().searchReducer.filter_query || null;
    
    if(newMessage) {
        
        const conversations = getState().conversationsReducer.conversations;
        
        dispatch({
            type: actionTypes.LOAD_CONVERSATIONS,
            payload: conversations
        });
    } else if(id) {
        
        const conversations = getState().conversationsReducer.conversations[id].messages;
        return conversations;
    } else if(filteredIds && filteredIds.length > 0) {
        
        const conversations = getState().conversationsReducer.conversations;
        
        // I am adding a css rule rather than unmouting the component
        Object.keys(conversations).map(itemId => {
            if(!filteredIds.includes(Number(itemId))){
                return conversations[itemId].hide = true
            } else {
                return conversations[itemId].hide = null
            }
        })
        
        dispatch({
            type: actionTypes.LOAD_CONVERSATIONS,
            payload: conversations
        });
        
    } else {
        const conversations = getState().conversationsReducer.conversations;
        
        if(!conversations){

            fetch("/userList.json")
            .then(res => res.json())
            .then(res =>{
                const convList = Object.assign({}, ...res.map(item => ({[item["id"]]: item}))); 
                
                dispatch({
                type: actionTypes.LOAD_CONVERSATIONS,
                payload: convList
            });
            });
        }
    }
}

export const filter_query = obj => (dispatch) => {
    dispatch({
        type: actionTypes.FILTERED_QUERY,
        payload: obj
    });
    
    dispatch({
        type: actionTypes.LOAD_CONVERSATIONS
    });
    
    
}

export const pushMessage = (newMessage) => (dispatch, getState) => {
    const conversations = getState().conversationsReducer.conversations;
    const userId = getState().chatReducer.chatId;

    let nowDate = "";
    let d = new Date();
    nowDate += d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear();

    conversations[userId].messages.push({content: newMessage, type: "sent", date: nowDate})
    dispatch(loadConversations(userId,true));

    fetch("https://geek-jokes.sameerkumar.website/api")
    .then(res => res.json())
    .then(res =>{
        conversations[userId].messages.push({content: res, type: "received", date: nowDate})
        dispatch(loadConversations(userId,true));
    });



}

export const openChat = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.OPEN_CHAT,
        payload: id
    })
}

export const returnToConversations = () => (dispatch) => {
    dispatch(openChat(null));
}