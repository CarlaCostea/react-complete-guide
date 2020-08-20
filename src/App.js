import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   });
  // };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Carla', age: 30 },
        { name: event.target.value, age: 13 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // slice used without arguments returns a copy (a new array) of this.state.persons
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  // this syntax is recommended when we need to use THIS
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'lightblue',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // Handling Dynamic Content "The JS Way"
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        // convert this.state.persons to array using map Vanilla JS E6
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={buttonStyle}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;

    // Render Content Conditionally
    // return (
    //   <div className="App">
    //     <h1>Hi, I'm a React App</h1>
    //     <p>This is really working!</p>
    //     <button
    //       style={buttonStyle}
    //       onClick={this.togglePersonsHandler}>Toggle Persons</button>
    //     {
    //       this.state.showPersons ?
    //       // this div is converted to react create element
    //       <div>
    //         <Person
    //           name={this.state.persons[0].name}
    //           age={this.state.persons[0].age}
    //         />
    //         <Person
    //           name={this.state.persons[1].name}
    //           age={this.state.persons[1].age}
    //           click={this.switchNameHandler.bind(this, 'Carla')}
    //           changed={this.nameChangeHandler}
    //         >
    //           My Hobbies: Code
    //     </Person>
    //         <Person
    //           name={this.state.persons[2].name}
    //           age={this.state.persons[2].age}
    //         />
    //       </div> : null
    //     }
    //   </div>
    // );

    // return (
    //   <div className="App">
    //     <h1>Hi, I'm a React App</h1>
    //     <p>This is really working!</p>
    //     <button
    //       style={buttonStyle}
    //       onClick={() => this.switchNameHandler('Max')}>Switch Name</button>
    //     <div>
    //       <Person
    //         name={this.state.persons[0].name}
    //         age={this.state.persons[0].age}
    //       />
    //       <Person
    //         name={this.state.persons[1].name}
    //         age={this.state.persons[1].age}
    //         click={this.switchNameHandler.bind(this, 'Carla')}
    //         changed={this.nameChangeHandler}
    //       >
    //         My Hobbies: Code
    //     </Person>
    //       <Person
    //         name={this.state.persons[2].name}
    //         age={this.state.persons[2].age}
    //       />
    //     </div>
    //   </div>
    // );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

// Using Hooks

// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Person from './Person/Person';

// // class App extends Component {
// //   state = {
// //     persons: [
// //       { name: 'Cristina', age: 13 },
// //       { name: 'Carla', age: 30 },
// //       { name: 'Max', age: 28 }
// //     ]
// //   }

// // using React Hooks - functional compoments
// const app = props => {
//   // use state returns an array of 2 elements. first element is current state, the second is a function wich alows us to change state
//   // using destructuring
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: 'Cristina', age: 13 },
//       { name: 'Carla', age: 30 },
//       { name: 'Max', age: 28 }
//     ],
//     // otherState: 'for testing purpose'
//   })

//   const [otherState, setOtherState] = useState('some other value')

//   const switchNameHandler = () => {
//     // DO NOT DO THIS: this.state.person[0].name = 'Costea Cristina'
//     // setPersonState does not merge with old informations
//     setPersonState({
//       persons: [
//         { name: 'Cristina Costea', age: 13 },
//         { name: 'Carla', age: 30 },
//         { name: 'Max', age: 27 }
//       ],
//       otherState: personState.otherState
//     })
//   }

//   return (
//     <div className="App">
//       <h1>I'm a react App</h1>
//       <p>This is really working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//       <Person name={personState.persons[1].name} age={personState.persons[1].age}> My hobbies: Code</Person>
//       <Person name={personState.persons[2].name} age={personState.persons[2].age} />
//     </div>
//   );
//   //return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'Hi, I\'m a React App!!!!'));
// }


// export default app;
