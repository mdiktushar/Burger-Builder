import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Auxlary from '../../../hoc/Auxlary'

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close]
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }
  
  return (
    <Auxlary>
      <Backdrop show = {props.open} clicked = {props.closed}/>
      <div className={attachedClasses.join(' ')}>
          <Logo height = '11%'/>
          <nav>
              <NavigationItems />
          </nav>
      </div>
    </Auxlary>
  )
}

export default SideDrawer