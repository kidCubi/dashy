import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './App.scss';

import Packery from 'packery';
// import Draggabilly from 'draggabilly';


import Loading from './components/loading/Loading';
import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Meteo from './components/meteo/Meteo';
import Agenda from './components/agenda/Agenda';
import Transports from './components/transports/Transports';
import TodoList from './components/todoList/TodoList';
import Money from './components/money/Money';

import { connect } from 'react-redux';

const mapState = state => ({
    app: state.app,
});

class App extends Component {
    constructor() {
        super();
        this.initDraggableGrid = this.initDraggableGrid.bind(this);
        this.draggie = null;
        this.state = {
            draggieLoaded: false,
            hasLoaded: false
        }
    }

    componentWillReceiveProps(nextProps) {
        const allTrue = Object.keys(nextProps.app.modulesLoaded).every(function (k) {
            return nextProps.app.modulesLoaded[k] === true;
        });
        if (allTrue) {
            //TODO : find workaround for setTimeout
            setTimeout(() => {
                this.initDraggableGrid();
            }, 500)
        }
    }

    initDraggableGrid() {
        console.log('init grid')
        new Packery(this.refMainGrid, {
            gutter: 8,
            percentPosition: true,
            stagger: 30
        });
        this.setState(state => ({
            draggieLoaded: true,
            hasLoaded: true
        }));
        // pckry.element.childNodes.forEach((item, index) => {
        //     this.draggie = new Draggabilly(item, {
        //         containment: this.refMainGrid,
        //     });
        // pckry.bindDraggabillyEvents(this.draggie);
        // this.draggie.disable();
        // if (( pckry.element.childNodes.length - 1) === index) {
        //     }
        // });
    }

    render() {
        const classes = classNames(
            styles.Grid
        );
        const smallOrange = classNames(
            styles.GridItem,
            styles.ItemOrange,
        );
        const smallGreen = classNames(
            styles.GridItem,
            styles.ItemGreen,
        );
        const largeGreen = classNames(
            styles.GridItemLarge,
            styles.ItemGreen,
        );
        return (
            <div>
                <Menu/>
                <Loading
                    hasLoaded={this.state.hasLoaded}
                />
                {this.state.draggieLoaded &&
                <Header
                    draggieInst={this.draggie}
                />
                }
                <div className={classes} ref={(node) => {
                    this.refMainGrid = node
                }}>
                    <div className={smallGreen}>
                        <Meteo/>
                    </div>
                    <div className={smallOrange}>
                        <Agenda/>
                    </div>
                    <div className={largeGreen}>
                        <Money/>
                    </div>
                    <div className={smallOrange}>
                        <Transports/>
                    </div>
                    <div className={smallGreen}>
                        <TodoList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapState)(App);
