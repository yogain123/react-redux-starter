export default function CustomMiddleware(){
    return store=>next=>action=>{
        
        //so, action = {type:"GET_DETAILS",payload:"payload"}}
        if(action.type="GET_DETAILS"){
            return next({...action,{payload:"this is in customer middleware"}}})
        }
        let allState = store.getState();
        return store.dispatch(action);
    }
}
