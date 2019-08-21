import { fromJS } from 'immutable';
import * as constants from './constants';  

const defaultState = fromJS({
    title:'',
    content:''
})


export default (state = defaultState, actions) => {
    switch (actions.type){
        case constants.CHANGE_DETAIL:
            return state.merge ({
                title:actions.title,
                content:actions.content
            }) 
    }
    return state
}