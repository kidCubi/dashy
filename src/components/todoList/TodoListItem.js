import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
            <li className={classes} onClick={this.checkTask}>
                <span className={styles.CheckInput} aria-hidden="true"/>
                <span className={styles.TodoTask}>{this.props.item.value}</span>
            </li>
        );
    }
}

TodoListItem.propTypes = {
    checkItem: PropTypes.func,
    index: PropTypes.number,
    item: PropTypes.object
};

export default TodoListItem;
