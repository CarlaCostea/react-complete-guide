import React from 'react'
import Radium, { StyleRoot } from 'radium';
import './Person.css'

const person = (props) => {
    const personStyle = {
        // if we want to use meddia querries we need to import StyleRoot from radium and export the app wrapped in StyleRoot
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <div className="Person" style={personStyle}>
            <p onClick={props.click} >I am {props.name} and I am {props.age} years old! {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Radium(person);