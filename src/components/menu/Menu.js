import React, { Component } from 'react';
import { Easing, Tween, autoPlay } from 'es6-tween'

import styles from './Menu.module.scss';
import classNames from 'classnames';

import { connect } from 'react-redux';
import { setMenuOverlayCoordinates, setMenuOpenClose, setDraggableWidgets } from '../../redux/actions/index'

const mapState = state => ({
    app: state.app,
});

const mapActions = dispatch => ({
    setMenuOverlayCoordinates: (x, y) => dispatch(setMenuOverlayCoordinates(x, y)),
    setMenuOpenClose: (opened) => dispatch(setMenuOpenClose(opened)),
    setDraggableWidgets: (draggable) => dispatch(setDraggableWidgets(draggable))
});

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            x: 0,
            y: 0,
            isClosing: false
        };
        this.overlayAnimation = {
            r: 0,
            duration: 750
        };
        this.animate = this.animate.bind(this);
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.manageWidgets = this.manageWidgets.bind(this);
    }

    componentDidMount() {
        this.animate();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.app.menu.isOpen !== this.props.app.menu.isOpen) {
            this.setState(state => ({
                x: this.props.app.menu.overlay.x,
                y: this.props.app.menu.overlay.y
            }));
            if (this.props.app.menu.isOpen) {
                this.openMenu();
            } else  {
                this.overlayAnimation.r = 0;
            }
        }
    }

    openMenu() {
        this.tweenOverlay = new Tween(this.overlayAnimation)
            .to({ r: window.innerHeight * 1.5 }, this.overlayAnimation.duration)
            .easing(Easing.Exponential.Out)
            .on('update', () => {
                this.refCircle.setAttribute('r', this.overlayAnimation.r.toString())
            });
        this.tweenOverlay.start();
    }

    closeMenu() {
        this.setState(state => ({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        }));
        this.setState(state => ({ isClosing: true }));
        setTimeout(() => {
            this.setState(state => ({ isClosing: false }));
            this.props.setMenuOpenClose(false);
        }, 301)
    }

    manageWidgets() {
        this.props.setDraggableWidgets(true);
        this.closeMenu();
    }

    animate() {
        requestAnimationFrame(this.animate);
        autoPlay(true);
    }

    render() {
        const classes = classNames(
            { [styles.IsVisible]: this.props.app.menu.isOpen },
            { [styles.IsClosing]: this.state.isClosing },
            styles.Wrapper
        );

        const classesContainer = classNames(
            styles.Container,
            { [styles.ContainerIsVisible]: this.props.app.menu.isOpen },
        );

        return (
            //Could be better with a subdivision of the children in components
            //The "Add widgets" button is currently not working
            <div className={classes}>
                <svg className={styles.Circle}>
                    <circle ref={node => {
                        this.refCircle = node
                    }} cx={this.state.x} cy={this.state.y} r="0" clipPath="url(#Clip)"/>
                </svg>
                <span className={styles.CloseBtn} onClick={this.closeMenu}> close </span>
                <div className={classesContainer}>
                    <span onClick={this.manageWidgets} className={styles.MenuBtn}>Manage widgets</span>
                    {/*<span className={styles.MenuTitle}>Add a new widget</span>*/}
                    {/*<ul className={styles.MenuOption}>*/}
                        {/*<li>Contacts</li>*/}
                    {/*</ul>*/}
                </div>
            </div>
        );
    }
}

export default connect(mapState, mapActions)(Menu);
