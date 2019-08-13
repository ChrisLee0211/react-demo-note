import React, {Component} from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import List from './components/List';   
import {HomeWrapper,HomeRight,HomeLeft} from './style'
import {actionCreators} from './store'

class Home extends Component {
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }

    componentDidMount(){
       this.props.changeHomeData();
    }
}

const mapDispatch = (dispatch) =>({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action )
    }
})

export default connect(null,mapDispatch)(Home);