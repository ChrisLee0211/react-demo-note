import React from "react";
import PropTypes from 'prop-types'

class TodoItem extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps,nextsnextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }

    render(){
        console.log('child render')
        const {content} = this.props;
        return <div onClick={this.handleClick}>{content}</div>
    }
    handleClick(){
        const {deleteItem,index} = this.props
        deleteItem(index)
    }
}

TodoItem.propTypes = {
    // test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    deleteItem:PropTypes.func,
    index:PropTypes.number
}

export default TodoItem;