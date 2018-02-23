import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

import { connect } from 'react-redux';
import { setMenuOverlayCoordinates, setMenuOpenClose } from '../../redux/actions/index'

const mapState = state => ({
    app: state.app,
});

const mapActions = dispatch => ({
    setMenuOverlayCoordinates: (x, y) => dispatch(setMenuOverlayCoordinates(x, y)),
    setMenuOpenClose: (opened) => dispatch(setMenuOpenClose(opened))
});

class Header extends Component {
    constructor(props) {
        super(props);
        this.displayMenu = this.displayMenu.bind(this)
    }

    displayMenu(e) {
        const x = e.clientX;
        const y = e.clientY;
        this.props.setMenuOverlayCoordinates(x, y);
        this.props.setMenuOpenClose(true);
    }

    render() {
        return (
            <div>
                <div className={styles.Wrapper}>
                    <span className={styles.HeaderMenu}/>
                    <span className={styles.HeaderIcon}/>
                    <span className={styles.DragTrigger} onClick={this.displayMenu}/>
                </div>
                {this.props.children}
            </div>
        );
    }
}

Header.propTypes = {
    children: PropTypes.array
};

export default connect(mapState, mapActions)(Header);
