"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

interface DataPoint {
  percentile: number;
  students: number;
}

const data: DataPoint[] = [
  { percentile: 0, students: 0 },
  { percentile: 25, students: 1 },
  { percentile: 35, students: 2 },
  { percentile: 45, students: 3 },
  { percentile: 50, students: 5 },
  { percentile: 60, students: 8 },
  { percentile: 70, students: 6 },
  { percentile: 75, students: 4 },
  { percentile: 90, students: 4 },
  { percentile: 100, students: 1 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
    payload: DataPoint;
  }>;
  label?: number;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-neutral-100 rounded shadow-lg">
        <p className="font-bold">Percentile: {label}</p>
        <p>Number of Students: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const PercentileChart: React.FC = () => {
  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 70 }}
        >
          <XAxis dataKey="percentile" type="number" domain={[0, 100]} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="students"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PercentileChart;
