import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const LineChart = props => {
  return (
    <Sparklines {...props}>
      <SparklinesLine color="blue" />
    </Sparklines>
  );
};

export default LineChart;
