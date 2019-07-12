const defaultState = {
    focused:false
};

export default (state = defaultState,actions) =>{
    if(actions.type === 'search_focus'){
        return {
            focused:true
        }
    };
    if(actions.type === 'search_blur'){
        return {
            focused:false
        }
    }
    
    return state
}