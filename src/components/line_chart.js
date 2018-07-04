import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default props => {
  return (
    <Sparklines {...props}>
      <SparklinesLine color="blue" />
    </Sparklines>
  );
};
