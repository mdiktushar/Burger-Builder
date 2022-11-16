// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import Auxlary from '../../hoc/Auxlary'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICES ={
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  beef: 0.7
}

export class BurgerBuilder extends Component {
//   static propTypes = {}
  state = {
    ingredients: {
      salad: 0,
      beef: 0,
      cheese: 0,
      meat:0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map( igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0)
    this.setState({purchasable: sum > 0});
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandle = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceDuduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceDuduction
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandldr = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    alert('Continue')
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Auxlary>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary 
            price = {this.state.totalPrice.toFixed(2)}
            ingredients = {this.state.ingredients}
            purchaseCancelled = {this.purchaseCancelHandler}
            purchaseContinued = {this.purchaseContinueHandler} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdded = {this.addIngredientHandler}
          ingredientRemove = {this.removeIngredientHandle}
          disable = {disabledInfo}
          purchasable = {this.state.purchasable}
          ordered = {this.purchaseHandldr }
          price = {this.state.totalPrice}
        />
      </Auxlary>
    )
  }
}

export default BurgerBuilder