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
import {Link} from 'react-router-dom'

class Header extends Component {


    render() {
        const {focused,handleInputBlur,handleInputFocus, list} = this.props;
        return (
            <HeaderWrapper>
                <Link to='./'>
                    <Logo></Logo>
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <span className="iconfont">&#xe607;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition timeout={200} in={focused} classNames="slide">
                            <NavSearch onFocus={()=>{handleInputFocus(list)}} onBlur={handleInputBlur} className={this.props.focused ? 'focused' : ''}></NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont zoon' : 'iconfont zoom'}>&#xe648;</span>
                        {this.getListArea()}
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

    getListArea(){
        const {focused,list,page,totalPage, mouseIn, handleMouseEnter,handleMouseLeave, handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for (let i = (page-1)*10; i < page *10; i++) {
                pageList.push(
                    <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
                )
                
            }
        }
        if (focused || mouseIn) {
        return (
            <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <SearchInfoTitle>
                    热门搜索
                        <SearchInfoSwitch onClick={()=>{handleChangePage(page,totalPage,this.spinIcon)}}>
                        <span ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
                            换一批
                        </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
            </SearchInfo>
        )
    } else {
        return null
    }
    }

}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list:state.get('header').get('list'),
        page:state.get('header').get('page'),
        mouseIn:state.get('header').get('mouseIn'),
        totalPage:state.get('header').get('totalPage'),
    }
}


const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0)&&dispatch(actionCreator.getList())
            dispatch(actionCreator.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreator.searchBlur())
        },
        handleMouseEnter(){
            dispatch(actionCreator.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreator.mouseLeave())
        },
        handleChangePage(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = `rotate(${originAngle + 360}deg)`
            if(page<totalPage){
                dispatch(actionCreator.changePage(page+1))
            }else{
                dispatch(actionCreator.changePage(1))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);