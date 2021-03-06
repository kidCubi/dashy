import React, { Component } from 'react';
import classNames from 'classnames';
import animation from './App.animation';
import styles from './App.scss';

import Packery from 'packery';
//Import Draggability from https://draggabilly.desandro.com/ as a custom script including a PR not in the current release
import Draggabilly from './vendors/Draggability';

import Loading from './components/loading/Loading';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Meteo from './components/meteo/Meteo';
import Agenda from './components/agenda/Agenda';
import Transports from './components/transports/Transports';
import TodoList from './components/todoList/TodoList';
import Money from './components/money/Money';
import Contacts from './components/contacts/Contacts';

import { connect } from 'react-redux';

import { setDraggableWidgets } from './redux/actions/index'

const mapState = state => ({
    app: state.app,
});

const mapActions = dispatch => ({
    setDraggableWidgets: (draggable) => dispatch(setDraggableWidgets(draggable))
});

class App extends Component {
    constructor() {
        super();
        this.draggies = [];
        this.state = {
            draggieLoaded: false,
            hasLoaded: false
        };
        this.initDraggableGrid = this.initDraggableGrid.bind(this);
        this.disableWidgetManagement = this.disableWidgetManagement.bind(this);
        this.animateWidgetsIn = this.animateWidgetsIn.bind(this);
        this.raf = this.raf.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.app.widgets.draggable !== this.props.app.widgets.draggable) {
            if (this.props.app.widgets.draggable) {
                //Enable drag
                this.pckry.element.childNodes.forEach((item, index) => {
                    this.draggies.push(new Draggabilly(item, {
                        containment: this.refMainGrid
                    }));
                    this.draggies[index].enable();
                    this.pckry.bindDraggabillyEvents(this.draggies[index]);
                });
            } else if (!this.props.app.widgets.draggable) {
                //Disable drag
                this.pckry.element.childNodes.forEach((item, index) => {
                    this.draggies[index].disable();
                    this.pckry.unbindDraggabillyEvents(this.draggies[index]);
                });
                this.draggies = [];
            }
        }
    }

    componentDidMount() {
        this.raf();
    }

    initDraggableGrid() {
        this.pckry = new Packery(this.refMainGrid, {
            gutter: 8,
            percentPosition: true,
            stagger: 30
        });
        this.setState(state => ({
            draggieLoaded: true,
            hasLoaded: true
        }));
        this.animateWidgetsIn();
    }

    animateWidgetsIn() {
        let nodesArr = [];
        Object.keys(this.refMainGrid.childNodes).map(key => nodesArr.push(this.refMainGrid.childNodes[key]));
        animation.staggerShow(nodesArr, 0.95, 0.09, 0.4);
    }

    disableWidgetManagement() {
        this.props.setDraggableWidgets(false);
    }

    raf() {
        const tick = requestAnimationFrame(this.raf);
        this.allTrue = Object.keys(this.props.app.modulesLoaded).every(k => {
            return this.props.app.modulesLoaded[k] === true;
        });
        if (this.allTrue) {
            this.initDraggableGrid();
            window.cancelAnimationFrame(tick);
        }
    }

    render() {
        const classes = classNames(
            styles.Grid
        );
        const smallOrange = classNames(
            styles.GridItem,
            styles.ItemOrange
        );
        const smallGreen = classNames(
            styles.GridItem,
            styles.ItemGreen
        );
        const largeGreen = classNames(
            styles.GridItemLarge,
            styles.ItemGreen
        );
        const disableWidgetManagement = classNames(
            { [styles.DisableWidgetManagementActive]: this.props.app.widgets.draggable },
            styles.DisableWidgetManagement
        );
        return (
            <div>
                {this.state.draggieLoaded &&
                <Header>
                    <Menu/>
                    <div className={disableWidgetManagement} onClick={this.disableWidgetManagement}>I'm done !</div>
                </Header>
                }

                <Loading hasLoaded={this.state.hasLoaded}/>

                <div className={classes} ref={(node) => {
                    this.refMainGrid = node
                }}>
                    <div className={smallGreen}><Meteo/></div>
                    <div className={smallOrange}><Agenda/></div>
                    <div className={largeGreen}><Money/></div>
                    <div className={smallOrange}><Transports/></div>
                    <div className={smallGreen}><TodoList/></div>
                    <div className={largeGreen}><Contacts/></div>
                </div>
            </div>

        );
    }
}

export default connect(mapState, mapActions)(App);
