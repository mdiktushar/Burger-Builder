import React from 'react'
// import PropTypes from 'prop-types'
import classes from './BuildControl.css'

const BuildControl = props => {
  return (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.lable}</div>
        <button className={classes.Less}>More</button>
        <button className={classes.More}>Less</button>
    </div>
  )
}

// BuildControl.propTypes = {}

export default BuildControl