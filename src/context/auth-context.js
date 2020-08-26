import React from 'react';

// react create context alows us to initialize our context with the default value
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
 });

export default authContext;