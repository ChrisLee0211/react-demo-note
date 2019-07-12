import React from 'react';
import CssStyle from './style'
import Css from './static/iconfont/iconfont'
import Header from './common/header';
import store from './store';
import {Provider} from 'react-redux';

function App() {
  return (
      <Provider store={store}>
        <CssStyle/>
        <Css/>
        <Header></Header>
      </Provider>
  );
}

export default App;
