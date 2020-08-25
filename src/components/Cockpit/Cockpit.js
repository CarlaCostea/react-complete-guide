import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

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
            className={btnClass.join(' ')}
            onClick={props.clicked}>Toggle Persons
        </button>
        </div>
        )
}

export default cockpit;