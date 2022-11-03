// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import Auxlary from '../../hoc/Auxlary'

export class BurgerBuilder extends Component {
//   static propTypes = {}

  render() {
    return (
    <Auxlary>
        <Burger />
        <div>Build Component</div>
    </Auxlary>
)
  }
}

export default BurgerBuilder