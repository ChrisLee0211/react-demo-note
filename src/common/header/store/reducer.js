import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused:false,
    list:[]
});

export default (state = defaultState,actions) =>{
    if(actions.type === constants.SEARCH_FOCUS){
        return state.set('focused',true)
    };
    if(actions.type === constants.SEARCH_BLUR){
        return state.set('focused',false)
    };
    if(actions.type === constants.CHANGE_LIST){
        return state.set('list',actions.data)
    }
    return state
}