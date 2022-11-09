// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BurgerIngredient/BuildControls/BuildControls'
import Auxlary from '../../hoc/Auxlary'

export class BurgerBuilder extends Component {
//   static propTypes = {}
  state = {
    ingredients: {
      salad: 0,
      beef: 0,
      cheese: 0,
      meat:0
    }
  }
  render() {
    return (
    <Auxlary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
    </Auxlary>
)
  }
}

export default BurgerBuilder