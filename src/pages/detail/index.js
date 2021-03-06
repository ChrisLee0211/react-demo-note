import React, {Component} from 'react';
import {DetailWrapper, Header, Content} from './style'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {actionCreators} from './store'
class Detail extends Component {
    render(){
        console.log(this.props)
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}>
                </Content>
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)
    }
}

const mapState = (state) =>({
    title:state.getIn(['detail','title']),
    content:state.get('detail').get('content')
})

const mapDispatch = (dispatch) => ({
    getDetail(id){
        console.log(id)
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapState,mapDispatch)(withRouter(Detail));