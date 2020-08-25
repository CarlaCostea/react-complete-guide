import React from 'react';

const withClass = (WrappedComponent, className) => {
    // we have a function in wich we return a functional component
    return props => (
        <div className={className}>
        <WrappedComponent {...props}/>
        </div>
    )
}

export default withClass;