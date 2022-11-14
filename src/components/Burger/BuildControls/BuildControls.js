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

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <string>{props.price.toFixed(2)}$</string></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label}
                label={ctrl.label}
                added = {() => props.ingredientAdded(ctrl.type)}
                removed = {() => props.ingredientRemove(ctrl.type)}
                disabled = {props.disable[ctrl.type]}
            />
        ))}
        <button className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button> 
    </div>
)

// BuildControls.propTypes = {}

export default BuildControls