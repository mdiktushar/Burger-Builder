import React, { Component } from 'react'
import Auxlary from '../../../hoc/Auxlary/Auxlary'
import Button from '../../UI/Button/Button'
// import PropTypes from 'prop-types'

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
                );
    });
    return (
        <Auxlary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <h3>Total Price: {this.props.price}$</h3>
            <p>Continue to Checkout</p>
            <Button btnType = "Danger" clicked= {this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType = "Success" clicked= {this.props.purchaseContinued}>CONTINUE</Button>
        </Auxlary>
    )
  }
}

// const OrderSummary = props => {
//     const ingredientSummary = Object.keys(props.ingredients)
//         .map(igKey => {
//             return (
//                 <li key={igKey}>
//                     <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
//                 </li>
//                 );
//         });
//     return (
//         <Auxlary>
//             <h3>Your Order</h3>
//             <p>A delicious burger with the following ingredients:</p>
//             <ul>
//                 {ingredientSummary}
//             </ul>
//             <h3>Total Price: {props.price}$</h3>
//             <p>Continue to Checkout</p>
//             <Button btnType = "Danger" clicked= {props.purchaseCancelled}>CANCEL</Button>
//             <Button btnType = "Success" clicked= {props.purchaseContinued}>CONTINUE</Button>
//         </Auxlary>
//     )
// }

// OrderSummary.propTypes = {}

export default OrderSummary