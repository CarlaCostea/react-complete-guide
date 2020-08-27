import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'

const sideDrawe = (props) => {
    return (
        <div>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}