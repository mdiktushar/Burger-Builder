import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import classes from './Toolbar.css'
// import PropTypes from 'prop-types'

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked = {props.drawerToggleClicked} />
        <Logo height = '80%' />
        <nav className={classes.DasktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

// Toolbar.propTypes = {}

export default Toolbar