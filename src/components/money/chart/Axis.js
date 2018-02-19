import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';

import styles from './../Money.module.scss';

class Axis extends Component {
    constructor(props) {
        super(props);
        this.renderAxis = this.renderAxis.bind(this);
    }

    componentDidMount() {
        this.renderAxis();
    }

    renderAxis() {
        this.node = ReactDOM.findDOMNode(this);
        d3.select(this.node).call(this.props.axis);
        d3.selectAll(".tick line")
            .attr("stroke", "#FFFFFF")
            .attr("y2", 30)
            .attr("x1", 35)
            .attr("x2", 35)
    }

    render() {
        const translate = `translate(0,${this.props.h})`;
        return (
            <g className={styles.Axis} transform={this.props.axisType === "x" ? translate: ""} >
            </g>
        );
    }
}

Axis.propTypes = {
    axis: PropTypes.func,
    axisType: PropTypes.string,
    h: PropTypes.number
};

export default Axis;
