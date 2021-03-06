import React from 'react';
import CssStyle from './style';
import Css from './static/iconfont/iconfont';
import { BrowserRouter,Route, Router } from 'react-router-dom';
import Header from './common/header';
import store from './store';
import {Provider} from 'react-redux';
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from './pages/login'
import Write from './pages/write'
class App extends React.Component {

  render(){
    return (
      <Provider store={store}>
        <div>
          <CssStyle/>
          <Css/>
          <BrowserRouter>
          <div>
            <Header></Header>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </div>
          </BrowserRouter>
        </div>
      </Provider>

    )
  }
}
export default App;
