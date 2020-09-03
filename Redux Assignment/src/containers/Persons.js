import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions'

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onADD} />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
       prs: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onADD: () => dispatch({type: actionTypes.ADD_PERSON}),
        onDeletePerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id})
    };
};

// connect is a function that return a hoc
export default connect(mapStateToProps, mapDispatchToProps)(Persons);