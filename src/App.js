import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './App.scss';

import Packery from 'packery';
import Draggabilly from 'draggabilly';

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
            draggieLoaded: false
        }
    }

    componentWillReceiveProps(nextProps) {
        const allTrue = Object.keys(nextProps.app).every(function (k) {
            return nextProps.app[k] === true;
        });
        if (allTrue) {
            //TODO : find workaround for setTimeout
            setTimeout(() => {
                this.initDraggableGrid();
            }, 500)
        }
    }

    initDraggableGrid() {
        const pckry = new Packery(this.refMainGrid, {
            gutter: 10,
            percentPosition: true,
            stagger: 30
        });
        pckry.element.childNodes.forEach((item, index) => {
            this.draggie = new Draggabilly(item, {
                containment: this.refMainGrid,
            });
            pckry.bindDraggabillyEvents(this.draggie);
            this.draggie.disable();
            if (( pckry.element.childNodes.length - 1) === index) {
                this.setState(state => ({
                    draggieLoaded: true
                }));
            }
        });
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
                    <div className={smallOrange}>
                        <Transports/>
                    </div>
                    <div className={smallGreen}>
                        <TodoList/>
                    </div>
                    <div className={largeGreen}>
                        <Money/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapState)(App);
