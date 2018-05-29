import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

const dimitriButton = {
  title: 'Start',
  content: 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.'
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Dimitri, welcome to React</h1>
        </header>
        <Button title={dimitriButton.title}>Save</Button>
      </div>
    );
  }
}

export default App;
