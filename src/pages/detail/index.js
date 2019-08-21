import React, {Component} from 'react';
import {DetailWrapper, Header, Content} from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store'
class Detail extends Component {
    render(){
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}>
                    
                </Content>
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetail()
    }
}

const mapState = (state) =>({
    title:state.getIn(['detail','title']),
    content:state.get('detail').get('content')
})

const mapDispatch = (dispatch) => ({
    getDetail(){
        dispatch(actionCreators.getDetail())
    }
})

export default connect(mapState,mapDispatch)(Detail);