import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'
// import PropTypes from 'prop-types'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Beef', type: 'beef'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
]

const BuildControls = props => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label}/>
        ))}
    </div>
)

// BuildControls.propTypes = {}

export default BuildControls