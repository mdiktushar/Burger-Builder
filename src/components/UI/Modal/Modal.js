import React, { Component } from 'react'
import Auxlary from '../../../hoc/Auxlary/Auxlary';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

export class Modal extends Component {
    shouldComponentUpdate (nextProps, nextState) {
        if(nextProps.show !== this.props.show) {
            return true;
        }
    }
    componentWillUpdate () {
        console.log('[Modle] willeUpdate')
    }
    render() {
        return (
            <Auxlary>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div 
                    className={classes.Modal}
                    style={{ 
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxlary>
        )
    }
}

export default Modal
