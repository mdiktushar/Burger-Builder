import React from 'react';
import classes from './Modal.css';
// import PropTypes from 'prop-types'

const Modal = props => (
    <div className={classes.Modal}>
        {props.children}
    </div>
);

// Modal.propTypes = {}

export default Modal;