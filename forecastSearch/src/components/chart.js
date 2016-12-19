import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import './chart.css';

function average(data) {
  var result = 0; 
  data.forEach((value) => {
    result += value
  })

  return Math.round(result / data.length);
}

export default (props) => {
  return (
    <div className="chart">
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  );
}