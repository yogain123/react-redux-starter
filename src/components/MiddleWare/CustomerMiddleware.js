export default function CustomMiddleware(){
    return store=>next=>action=>{
        if(action.type="GET_DETAILS" && true)
            return next({
                type:"GET_DETAILS",
                payload:{
                    name:"customer middleware name"
                }
            })
        return store.dispatch({
            type:"GET_DETAILS",
            payload:{
                name:"Again IT will be dispatched so all middleware will be called"
            }
        });
    }
}