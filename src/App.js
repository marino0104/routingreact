import React, {Component} from 'react';
import './App.css';
import Router from './components/Router';

class App extends Component {
  render(){
    return (
        <div className="contenedor">
          <Router/>
        </div>
      )
  }
  
}

export default App;
