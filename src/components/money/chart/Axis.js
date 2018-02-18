import React, { Component } from 'react';
import * as d3 from 'd3';

import ReactDOM from 'react-dom';

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
    }

    render() {
        const translate = `translate(0,${this.props.h})`;
        return (
            <g className="axis" transform={this.props.axisType === "x" ? translate: ""} >
            </g>
        );
    }
}

export default Axis;
