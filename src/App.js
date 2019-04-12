import React, { Component } from 'react';
import './App.css';
import Main from './Components/MainComponent';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore.js'


const store = ConfigureStore();

class App extends Component {


  render() {
    return (
    	<Provider store = {store}>	
      <HashRouter>
      <div className="App">
        <Main />
      </div>
      </HashRouter>
      </Provider>
    );
  }
}

export default App;
