import React from 'react'
import styled from 'styled-components'

//import './Person.css'

// this already is a react component
const StyledDiv = styled.div`
width: 60%;
margin: 16px auto;
border: 1px solid #eee;
padding: 16px;
text-align: center;

@media (min-width: 500px): {
 width: '450px'
}`

const person = (props) => {
    const personStyle = {
        // if we want to use meddia querries we need to import StyleRoot from radium and export the app wrapped in StyleRoot
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
       // <div className="Person" style={personStyle}>
       <StyledDiv>
            <p onClick={props.click} >I am {props.name} and I am {props.age} years old! {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
}

export default person
// export default Radium(person);