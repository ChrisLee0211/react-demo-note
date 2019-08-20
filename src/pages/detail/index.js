import React, {Component} from 'react';
import {DetailWrapper, Header, Content} from './style'
import {connect} from 'react-redux'

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
}

const mapState = (state) =>({
    title:state.getIn(['detail','title']),
    content:state.get('detail').get('content')
})

export default connect(mapState,null)(Detail);