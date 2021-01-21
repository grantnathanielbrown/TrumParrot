import React, { Component } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import moment from 'moment'; 
import convert from '../convert/convert.js'; 

const data = convert()
console.log(data);
export default class TestChart extends Component {

  render() {

    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
                <defs>
        <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="100%" stopColor="green" />
          <stop offset="0%" stopColor="red" />
        </linearGradient>
      </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tickFormatter={timeStr => moment(timeStr).format('MMM. D, YYYY')}/>
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        {/* <Bar dataKey="disapprovalChange" fill="#8884d8" /> */}
        <Bar dataKey="approvalChange" fill="url(#colorUv)" />
      </BarChart>
    );
  }
}

