import React,{Component} from 'react';
import store from './store';
import {connect} from 'react-redux';


class TodoList extends Component{
    constructor(props){
        super(props);
        // this.state = store.getState()
        
    }

    render(){
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
                    <button >提交</button>
                </div>
                <ul>
                    <li>Dell</li>
                </ul>
            </div>
        )
    }

    
}

const mapStateToProps = (state) => {
    return {
        inputValue:state.inputValue
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        changeInputValue(e){
            const action = {
                type:'change_input_value',
                value:e.target.value
            };
            store.dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);