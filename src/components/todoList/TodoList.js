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
        //Data could have been in a JSON file
        this.todoItems = [
            { value: "Write components", complete: false },
            { value: "Do some SCSS", complete: false },
            { value: "Debug the app", complete: false },
            { value: "Push to prod ! :)", complete: false },
        ];
        this.state = {
            count: this.todoItems.filter(s => {
                return !s.complete;
            }).length,
        }
    }

    componentDidMount() {
        this.props.setTodoLoaded(true);
    }

    checkItem(index) {
        this.todoItems[index].complete = !this.todoItems[index].complete;
        this.setState(state => ({
            count: this.todoItems.filter(s => {
                return !s.complete;
            }).length
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
                <div className={styles.Heading}>
                    <span className={styles.HeadingIcon}/>
                    <span>{this.state.count} left</span>
                </div>
                {this.props.children}
                {this.props.app.modulesLoaded.todoLoaded && <ul> {items} </ul>}
            </div>
        );
    }
}

export default connect(mapState, mapActions)(TodoList);

