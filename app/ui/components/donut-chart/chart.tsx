'use client';

import React from 'react';
import { PieChart, PieChartProps } from 'react-minimal-pie-chart';

interface ChartProps extends Omit<PieChartProps, 'label'> {
  size?: number;
  label?: string;
}
const Chart = ({size, label, ...restProps}: ChartProps) => {


  const customLabel = () => (label);

  return (
    <>
      <div style={{ width: `${size}px` }}>
        <PieChart {...restProps} label={customLabel} />
        </div>
    </>
  );
};

export default Chart;