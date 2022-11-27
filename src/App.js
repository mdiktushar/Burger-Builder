// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from './hoc/Layout/Layout'

export default class App extends Component {
  // static propTypes = {second: third}

  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    )
  }
}
