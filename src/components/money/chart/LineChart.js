import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

import styles from '../Money.module.scss';

import Axis from './Axis';

const LineChart = (props) => {
    const margin = { top: 5, right: 20, bottom: 20, left: 20 };
    let w = props.width - (margin.left + margin.right);
    let h = props.height - (margin.top + margin.bottom);
    const parseDate = d3.timeParse("%e-%b-%y");

    props.data.forEach((d, index) => {
        // if(index % 3 === 0) {
        d.date = parseDate(d.day);
        // }
    });

    const x = d3.scaleTime()
        .domain(d3.extent(props.data, (d) => {
            return d.date;
        }))
        .range([0, w]);

    const y = d3.scaleLinear()
        .domain([0, d3.max(props.data, (d) => {
            return d.amount;
        })])
        .range([h, 0]);

    const yAxis = d3.axisLeft(y).ticks(3);

    const xAxis = d3.axisBottom(x).ticks(6);

    const line = d3.line()
        .x((d) => {
            return x(d.date);
        })
        .y((d) => {
            return y(d.amount);
        }).curve(d3.curveCatmullRom.alpha(1));

    const transform = 'translate(' + margin.left + ',' + margin.top + ')';

    const filteredData = props.data.filter((value, index) => {
        return index % 3 === 2
    });

    return (
        <svg id={props.id} width={props.width} height={props.height} ref={(node) => {
            this.refSvgChart = node
        }}>
            <g transform={transform}>
                <Axis h={h} axis={yAxis} axisType="y"/>
                <Axis h={h} axis={xAxis} axisType="x"/>
                <path className={styles.Line} d={line(props.data)} strokeLinecap="round"/>
                {
                    filteredData.map((d, i) => {
                        return (
                            <circle className={styles.Dot}
                                    r="3"
                                    cx={x(d.date)}
                                    cy={y(d.amount)}
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

LineChart.propTypes = {
    data: PropTypes.array,
    height: PropTypes.number,
    id: PropTypes.string
};

export default LineChart;
