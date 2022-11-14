import React from 'react'
import classes from './Backdrop.css'
// import PropTypes from 'prop-types'

const Backdrop = props => (
    props.show ? <div className={classes.Backdrop} 
                    onClick={props.clicked}> </div> : null
)

// Backdrop.propTypes = {}

export default Backdrop