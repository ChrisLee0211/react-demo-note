import {CHANGE_INPUT_VALUE,SUBMIT,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes'

const defaultState = {
    inputValue:'',
    list:['Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',]
}


export default (state = defaultState,action) => {
    if(action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState
    }
    if(action.type === SUBMIT){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = ''
        return newState
    }
    if(action.type ===DELETE_TODO_ITEM){
        let index = action.index;
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(index,1);
        return newState
    }
    if(action.type ===INIT_LIST_ACTION){
        let data = action.data;
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = [...data]
        return newState
    }
    return state;
}