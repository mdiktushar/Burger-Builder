import React from 'react'
import Logo from '../../Logo/Logo'
import classes from './Toolbar.css'
// import PropTypes from 'prop-types'

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <div>MENUE</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
)

// Toolbar.propTypes = {}

export default Toolbar