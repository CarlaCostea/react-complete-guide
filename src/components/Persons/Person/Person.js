import React from 'react';
import classes from './Person.css';

const person = props => {
    console.log('[Person.js] rendering...')
    return [
       // <div className={classes.Person}>
            <p key="item1" onClick={props.click}>
                I am {props.name} and I am {props.age} years old!
            </p>,
            <p key="item2">{props.children}</p>,
            <input key="item3" type="text" onChange={props.changed} value={props.name} />
       // </div>
    ];
};

export default person
// export default Radium(person);