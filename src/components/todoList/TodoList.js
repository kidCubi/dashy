import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import styles from './TodoList.module.scss';

import { connect } from 'react-redux';
import { setTodoLoaded } from '../../redux/actions/index'

const mapState = state => ({
    app: state.app,
});

const mapActions = dispatch => ({
    setTodoLoaded: (loaded) => dispatch(setTodoLoaded(loaded))
});

class TodoList extends Component {
    constructor() {
        super();
        this.todoItems = [
            { value: "do stuff", complete: false },
            { value: "do stuff", complete: false },
            { value: "do stuff", complete: false },
            { value: "do stuff", complete: false },
        ];
        this.state = {
            count: this.todoItems.filter( s => { return !s.complete; }).length,
        }
    }

    componentDidMount() {
        this.props.setTodoLoaded(true);
    }

    checkItem(index) {
        this.todoItems[index].complete = !this.todoItems[index].complete;
        this.setState(state => ({
            count: this.todoItems.filter( s => { return !s.complete; }).length
        }));
    }

    render() {
        const items = this.todoItems.map((item, index) => {
            return (
                <TodoListItem key={index} item={item} index={index} checkItem={this.checkItem.bind(this)}/>
            );
        });
        return (
            <div className={styles.Wrapper}>
                <span>{this.state.count}</span>
                {this.props.app.todoLoaded &&
                <ul className="list-group"> {items} </ul>
                }
                {this.props.children}
            </div>
        );
    }
}

export default connect(mapState, mapActions)(TodoList);

