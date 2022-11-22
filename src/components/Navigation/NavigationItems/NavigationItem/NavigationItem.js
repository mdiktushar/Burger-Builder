import React from 'react'
import classes from './NavigationItem.css'
// import PropTypes from 'prop-types'

const NavigationItem = props => (
    <li className={classes.NavigationItem}>
        <a 
            href={props.link}
            className={props.active ? classes.active : null}
        >{props.children}</a>
    </li>
)
// NavigationItem.propTypes = {}

export default NavigationItem