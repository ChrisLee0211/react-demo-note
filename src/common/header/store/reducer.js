import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused:false
});

export default (state = defaultState,actions) =>{
    if(actions.type === constants.SEARCH_FOCUS){
        return state.set('focused',true)
    };
    if(actions.type === constants.SEARCH_BLUR){
        return state.set('focused',false)
    }
    
    return state
}