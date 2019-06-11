import React, { Component } from 'react';
import './App.css';
import './css/DestinationPage.css';
import './css/blog.css';
import Main from './Components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore.js'
import ReactGA from 'react-ga';


ReactGA.initialize('UA-141801672-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
    	<Provider store = {store}>	
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
