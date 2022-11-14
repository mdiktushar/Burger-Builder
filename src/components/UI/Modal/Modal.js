import React from 'react';
import Auxlary from '../../../hoc/Auxlary';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';
// import PropTypes from 'prop-types'

const Modal = props => (
    <Auxlary>
        <Backdrop show={props.show} clicked={props.modalClosed} />
         <div 
            className={classes.Modal}
            style={{ 
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Auxlary>
   
);

// Modal.propTypes = {}

export default Modal;