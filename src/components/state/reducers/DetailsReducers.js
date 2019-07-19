export default function(state="loading",action){
    switch(action.type){
        case "GET_DETAILS":
            var newState = JSON.parse(JSON.stringify(action.payload));
            return newState;
        default:
            return state
    }
}