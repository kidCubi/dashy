import React from 'react';
import * as d3 from 'd3';

import styles from '../Money.module.scss';

import Axis from './Axis';

const LineChart = (props) => {

    const margin = { top: 5, right: 50, bottom: 20, left: 50 };
    const w = props.width - (margin.left + margin.right);
    const h = props.height - (margin.top + margin.bottom);
    const parseDate = d3.timeParse("%e-%b-%y");

    props.data.forEach(function (d) {
        d.date = parseDate(d.day);
    });

    const x = d3.scaleTime()
    .domain(d3.extent(props.data, function (d) {
        return d.date;
    }))
    .range([0, w]);

    const y = d3.scaleLinear()
        .domain([0, d3.max(props.data, function (d) {
            return d.amount;
        })])
        .range([h, 0]);

    const yAxis = d3.axisLeft(y).ticks(3);

    const xAxis = d3.axisBottom(x).ticks(5);

    const line = d3.line()
        .x(function (d) {
            return x(d.date);
        })
        .y(function (d) {
            return y(d.amount);
        }).curve(d3.curveCardinal);

    const transform = 'translate(' + margin.left + ',' + margin.top + ')';

    const filteredData = props.data.filter((value, index) => {
        return index % 3 === 2
    });

    return (
        <svg id={props.id} width={props.width} height={props.height}>
            <g transform={transform}>
                <Axis h={h} axis={yAxis} axisType="y"/>
                <Axis h={h} axis={xAxis} axisType="x"/>
                <path className={styles.Line} d={line(props.data)} strokeLinecap="round"/>
                {
                    filteredData.map((d, i) => {
                        return (
                            <circle className="dot"
                                    r="7"
                                    cx={x(d.date)}
                                    cy={y(d.amount)}
                                    fill="#7dc7f4"
                                    stroke="#3f5175" strokeWidth="5px"
                                    key={i}
                                    data-key={d3.timeFormat("%b %e")(d.date)}
                                    data-value={d.amount}/>
                        )
                    })
                }
            </g>
        </svg>
    );
};

export default LineChart;
