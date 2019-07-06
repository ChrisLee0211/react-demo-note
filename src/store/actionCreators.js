import {CHANGE_INPUT_VALUE,SUBMIT,DELETE_TODO_ITEM,INIT_LIST_ACTION,GET_INIT_LIST} from './actionTypes'

export const getInputChangeAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = ()=>({
    type:SUBMIT,
    
})

export const getDeletItemAction = (index)=>({
    type:DELETE_TODO_ITEM,
    index
})

export const initListAction = (data)=>({
    type:INIT_LIST_ACTION,
    data
})

export const getInitList = () => ({
    type:GET_INIT_LIST
})

