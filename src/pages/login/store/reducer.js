import { fromJS } from 'immutable';
import * as constants from './constants';  

const defaultState = fromJS({
    login:false
});

export default (state = defaultState, actions) => {
    switch (actions.type){
        case constants.CHANGE_LOGIN:
            return state.set('login',actions.value)
            break
        case constants.LOGOUT:
            return state.set('login',actions.value)
            break
        default:
            return state
    }
}