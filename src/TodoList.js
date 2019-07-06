import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store/index';
// import {CHANGE_INPUT_VALUE,SUBMIT,DELETE_TODO_ITEM} from './store/actionTypes'
import {getInputChangeAction, getInitList, getAddItemAction,getDeletItemAction} from "./store/actionCreators";
import TodoListUI from './TodoListUI'

// import Test from './test';
import './style.css'
import { resolve, reject } from 'q';

// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
// ];

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.submit = this.submit.bind(this);
        this.getData = this.getData.bind(this)
        store.subscribe(this.handleStoreChange);

    }

    render() {
        return (
        <TodoListUI 
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleItemDelete={this.handleItemDelete}
        submit={this.submit}
        list={this.state.list}
        ></TodoListUI>
        )
    }

    async componentDidMount(){
        const action = getInitList();
        store.dispatch(action)
        // const data = await this.getData();
        // const action = initListAction(data)
        // store.dispatch(action)
    }

    getData(){
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                let data = ['hello','lee','chris'];
                resolve(data)
            },1000)
        })
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleStoreChange(){
        this.setState(store.getState())
    }
    submit(){
        const action = getAddItemAction()
        store.dispatch(action);
        // this.setState(store.getState())
    }
    handleItemDelete(index){
        
        const action = getDeletItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList;