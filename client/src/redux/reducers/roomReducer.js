const roomReducer = (state='',action) =>{
    switch(action.type){
        case "SET_ROOM": return action.payload;
        default: return state;
    }
};

export {roomReducer};