import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Cristina', age: 13 },
//       { name: 'Carla', age: 30 },
//       { name: 'Max', age: 28 }
//     ]
//   }

// using React Hooks - functional compoments
const app = props => {
  // use state returns an array of 2 elements. first element is current state, the second is a function wich alows us to change state
  // using destructuring
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Cristina', age: 13 },
      { name: 'Carla', age: 30 },
      { name: 'Max', age: 28 }
    ],
    // otherState: 'for testing purpose'
  })

  const [otherState, setOtherState] = useState('some other value')

  const switchNameHandler = () => {
    // DO NOT DO THIS: this.state.person[0].name = 'Costea Cristina'
    // setPersonState does not merge with old informations
    setPersonState({
      persons: [
        { name: 'Cristina Costea', age: 13 },
        { name: 'Carla', age: 30 },
        { name: 'Max', age: 27 }
      ],
      otherState: personState.otherState
    })
  }

  return (
    <div className="App">
      <h1>I'm a react App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age}> My hobbies: Code</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'Hi, I\'m a React App!!!!'));
}


export default app;
