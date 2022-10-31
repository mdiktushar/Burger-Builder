import React from 'react'
import Auxlary from '../../hoc/Auxlary'
// import PropTypes from 'prop-types'

const Layout = props => (
    <Auxlary>
        <div>Toolbar, SldeDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxlary>
)

// Layout.propTypes = {}

export default Layout 