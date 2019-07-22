import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1,
});

export default (state = defaultState,actions) =>{
    if(actions.type === constants.SEARCH_FOCUS){
        return state.set('focused',true)
    };
    if(actions.type === constants.SEARCH_BLUR){
        return state.set('focused',false)
    };
    if(actions.type === constants.CHANGE_LIST){
        return state.merge({
            list:actions.data,
            totalPage:actions.totalPage
        });
    }
    if(actions.type === constants.MOUSE_ENTER){
        return state.set('mouseIn',true)
    }
    if(actions.type === constants.MOUSE_LEAVE){
        return state.set('mouseIn',false)
    }
    if(actions.type === constants.CHANGE_PAGE){
        return state.set('page',actions.page)
    }
    return state
}