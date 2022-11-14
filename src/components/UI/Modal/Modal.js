import React from 'react';
import classes from './Modal.css';
// import PropTypes from 'prop-types'

const Modal = props => (
    <div 
        className={classes.Modal}
        style={{ 
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
         }}>
        {props.children}
    </div>
);

// Modal.propTypes = {}

export default Modal;