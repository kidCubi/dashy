import React, { Component } from 'react';

import styles from './Menu.module.scss';
import classNames from 'classnames';

class Menu extends Component {
    constructor() {
        super();
        console.log('Menu')
    }

    render() {
        return (
            <div className={styles.Wrapper}>
                <svg>
                    <circle  cx="0" cy="0" r="50" x="0" y="0" fill="#FF0000"/>
                </svg>
            </div>
        );
    }
}

export default Menu;
