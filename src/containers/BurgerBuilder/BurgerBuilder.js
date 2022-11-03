// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import Auxlary from '../../hoc/Auxlary'

export class BurgerBuilder extends Component {
//   static propTypes = {}
  state = {
    ingredients: {
      salad: 1,
      beef: 1,
      cheese: 2,
      meat:2
    }
  }
  render() {
    return (
    <Auxlary>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Component</div>
    </Auxlary>
)
  }
}

export default BurgerBuilder