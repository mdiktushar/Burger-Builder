import React from 'react'
// import PropTypes from 'prop-types'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients) // Transfering an key value object into array
      .map(igkey => {
        return [...Array(props.ingredients[igkey])]
          .map((_, i)=> {
            return <BurgerIngredient key = {igkey + i} type = {igkey} />
          })
      }).reduce((arr, el) => {
        return arr.concat(el)
      }, [])

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  )
}

// Burger.propTypes = {}

export default Burger