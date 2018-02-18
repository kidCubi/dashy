import React, { Component } from 'react';
//TODO : résoudre bug sur draggie
// import PropTypes from 'prop-types';
import styles from './Header.module.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.triggerDrag = this.triggerDrag.bind(this);
    }

    triggerDrag() {
        // (this.props.draggieInst.isEnabled) ? this.props.draggieInst.disable() : this.props.draggieInst.enable();
        console.log(this.props.draggieInst.isEnabled)
    }

    render() {
        return (
            <div className={styles.Wrapper}>
                <span className={styles.HeaderMenu}></span>
                <span className={styles.HeaderIcon}></span>
                <span className={styles.DragTrigger} onClick={this.triggerDrag}></span>
            </div>
        );
    }
}

Header.propTypes = {
    //TODO : résoudre bug sur draggie
   // draggieInst:
};


export default Header;
