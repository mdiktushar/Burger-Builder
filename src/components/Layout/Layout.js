import React from 'react'
import Auxlary from '../../hoc/Auxlary'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Toolbar from '../Navigation/Toolbar/Toolbar'
// import PropTypes from 'prop-types'

// Css class
import classes from './Layout.css'
const Layout = props => (
    <Auxlary>
        <Toolbar />
        <SideDrawer />
        <div>Toolbar, SldeDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxlary>
)

// Layout.propTypes = {}

export default Layout 