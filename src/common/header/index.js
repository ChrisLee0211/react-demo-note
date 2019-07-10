import React, {Component} from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style'

class Header extends Component {
    render(){
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

                    <NavSearch></NavSearch>
                    <span className="iconfont">&#xe648;</span>
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

export default Header;