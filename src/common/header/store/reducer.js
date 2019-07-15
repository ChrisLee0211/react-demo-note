import * as constants from './constants';

const defaultState = {
    focused:false
};

export default (state = defaultState,actions) =>{
    if(actions.type === constants.SEARCH_FOCUS){
        return {
            focused:true
        }
    };
    if(actions.type === constants.SEARCH_BLUR){
        return {
            focused:false
        }
    }
    
    return state
}