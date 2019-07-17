import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import * as actionCreator from './store/actionCreator'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style'


const getListArea = (show) => {
    if (show) {
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                                <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>
        )
    } else {
        return null
    }
}

class Header extends Component {


    render() {
        return (
            <HeaderWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <span className="iconfont">&#xe607;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition timeout={200} in={this.props.focused} classNames="slide">
                            <NavSearch onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur} className={this.props.focused ? 'focused' : ''}></NavSearch>
                        </CSSTransition>
                        <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe648;</span>
                        {getListArea(this.props.focused)}
                    </SearchWrapper>

                </Nav>
                <Addition>
                    <Button className="writting" >
                        <span className="iconfont">&#xe600;</span>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused')
    }
}


const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreator.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreator.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);