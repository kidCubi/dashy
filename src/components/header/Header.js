import React, { Component } from 'react';
import styles from './Header.module.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.triggerDrag = this.triggerDrag.bind(this);
    }

    componentDidMount() {
    }

    triggerDrag() {
        (this.props.draggieInst.isEnabled) ? this.props.draggieInst.disable() : this.props.draggieInst.enable();
        console.log(this.props.draggieInst.isEnabled)
    }

    render() {
        return (
            <div className={styles.Wrapper}>
                <p>Header</p>
                <span className={styles.DragTrigger} onClick={this.triggerDrag}></span>
            </div>
        );
    }
}

export default Header;
