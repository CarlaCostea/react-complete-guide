import React, { useRef, useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = props => {
  const toggleBtnRef = useRef(null);

  //useEffect executes only after the render
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  // let classes = ['red', 'bold'].join(' '); //"red bold"
  // in order for this to work wee need to asign a string in className}
  const assignedClasses = [];
  let btnClass = [classes.Button];

  if (props.showPersons) {
    btnClass.push(classes.Green);
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        ref={toggleBtnRef}
        className={btnClass.join(' ')}
        onClick={props.clicked}>Toggle Persons
        </button>

        <button onClick={props.login}>Log in</button>
    </div>
  )
}

export default React.memo(cockpit);