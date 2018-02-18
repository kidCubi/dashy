import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './TodoList.module.scss';

class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.checkTask = this.checkTask.bind(this);
    }

    checkTask() {
        this.props.checkItem(this.props.index);
    }

    render() {
        const classes = classNames(
            styles.TodoItem,
            { [styles.isChecked]: this.props.item.complete },
        );
        return (
            <li className={classes}>
                <span className={styles.CheckInput} aria-hidden="true" onClick={this.checkTask}></span>
                <span className={styles.TodoTask}>  {this.props.item.value}</span>
            </li>
        );
    }
}

export default TodoListItem;
