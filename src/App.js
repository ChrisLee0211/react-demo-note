import React from 'react';
import CssStyle from './style';
import Css from './static/iconfont/iconfont';
import { BrowserRouter,Route, Router } from 'react-router-dom';
import Header from './common/header';
import store from './store';
import {Provider} from 'react-redux';
import Home from "./pages/home";
import Detail from "./pages/detail"

class App extends React.Component {

  render(){
    return (
      <Provider store={store}>
        <div>
          <CssStyle/>
          <Css/>
          <Header></Header>
          <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
          </BrowserRouter>
        </div>
      </Provider>

    )
  }
}
export default App;
