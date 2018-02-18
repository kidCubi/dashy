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
            { [styles.isChecked]: this.props.item.done },
        );
        return (
            <li className={classes}>
                <div className={this.props.item.done ? "done" : "undone"}>
                    <span aria-hidden="true" onClick={this.checkTask}></span>
                    {this.props.item.value}
                </div>
            </li>
        );
    }
}

export default TodoListItem;
