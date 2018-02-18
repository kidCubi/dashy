import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Loading.module.scss';


class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingDone: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.hasLoaded) {
            setTimeout(() => {
                this.refLoading.style.display = "none";
            }, 900);
        }
    }

    render() {
        const classes = classNames(
            styles.Wrapper,
            { [styles.HasLoaded]: this.props.hasLoaded },
            { [styles.LoadingDone]: this.props.loadingDone }
        );
        return (
            <div className={classes} ref={(node) => {this.refLoading = node}} >
                <span className={styles.Logo}></span>
            </div>
        );
    }
}

export default Loading;
