"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

interface ProgressPieChartProps {
  correctQuestions: number;
  totalQuestions: number;
}

interface DataItem {
  name: string;
  value: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    payload: DataItem;
  }>;
}

const ProgressPieChart: React.FC<ProgressPieChartProps> = ({
  correctQuestions,
  totalQuestions,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const data: DataItem[] = [
    { name: "Correct", value: correctQuestions },
    { name: "Incorrect", value: totalQuestions - correctQuestions },
  ];

  const COLORS = ["#3182ce", "#f3f4f6"];

  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-neutral-100 p-3 rounded shadow-lg z-20">
          <p className="font-bold">{payload[0].name}</p>
          <p>{payload[0].value} Questions</p>
        </div>
      );
    }
    return null;
  };

  const chartWidth = 300;
  const chartHeight = 300;
  const centerX = chartWidth / 2;
  const centerY = chartHeight / 2;

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center relative w-full h-[300px]" />
    );
  }

  return (
    <div className="flex items-center justify-center relative w-full h-[300px]">
      <PieChart width={chartWidth} height={chartHeight}>
        <Pie
          data={data}
          cx={centerX}
          cy={centerY}
          innerRadius={90}
          outerRadius={125}
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
        <div className="text-4xl mb-2">🎯</div>
      </div>
    </div>
  );
};

export default ProgressPieChart;
