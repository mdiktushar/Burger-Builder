import React, {Component} from 'react'
import Auxlary from '../Auxlary/Auxlary'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
// import PropTypes from 'prop-types'
// Css class
import classes from './Layout.css'


class Layout extends Component{

    state = {
        shwoSideDraer: false
    }

    sideBrawerClosedHandler = () => {
        this.setState({shwoSideDraer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {shwoSideDraer: !prevState.shwoSideDraer}
        })
    }

    render () {
        return (
            <Auxlary>
                <Toolbar drawerToggleClicked = {this.sideDrawerToggleHandler} />
                <SideDrawer 
                    open = {this.state.shwoSideDraer} 
                    closed = {this.sideBrawerClosedHandler}
                />
                <div>Toolbar, SldeDrawer, Backdrop</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxlary>
        )
    }
}

export default Layout 