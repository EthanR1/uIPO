import React from 'react';

interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  className?: string;
}

const Sparkline: React.FC<SparklineProps> = ({ 
  data, 
  width = 60, 
  height = 20, 
  className = '' 
}) => {
  if (!data || data.length === 0) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  const lastValue = data[data.length - 1];
  const secondLastValue = data[data.length - 2];
  const isPositive = lastValue >= secondLastValue;

  return (
    <svg 
      width={width} 
      height={height} 
      className={`${className} ${isPositive ? 'text-green-600' : 'text-red-600'}`}
      viewBox={`0 0 ${width} ${height}`}
    >
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

export default Sparkline;