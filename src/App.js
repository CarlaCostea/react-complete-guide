import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Cristina', age: 13 },
      { name: 'Carla', age: 30 },
      { name: 'Max', age: 28}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>I'm a react App</h1>
        <p>This is really working</p>
        <button>Switch Name</button>
        <Person name="Cristina" age="13" />
        <Person name="Carla" age="30"> My hobbies: Code</Person>
        <Person name="Max" age="28" />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'Hi, I\'m a React App!!!!'));
  }
}

export default App;
