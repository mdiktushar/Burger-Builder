import React from 'react'
import Auxlary from '../../../hoc/Auxlary'
// import PropTypes from 'prop-types'

const OrderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
                );
        });
    return (
        <Auxlary>
            <h3>Your Order`</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout</p>
        </Auxlary>
    )
}

// OrderSummary.propTypes = {}

export default OrderSummary