"use client";

import PercentileChart from "./PercentileChart";

const PERCENTILE = 30;

export default function ComparasionGraph() {
  return (
    <div className="p-6 border border-neutral-200 rounded-lg space-y-6">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-primary-dark">
          Comparasion Graph
        </h2>
        <div className="w-16 h-16 rounded-full bg-neutral-100 grid place-items-center text-2xl">
          📖
        </div>
      </div>
      <h3>
        <span className="font-semibold text-neutral-500">
          You scored {PERCENTILE}% percentile
        </span>{" "}
        which is lower than the average percentile 72% of all the engineers who
        took this assignment
      </h3>

      <div className="w-full h-80">
        <PercentileChart/>
      </div>
    </div>
  );
}
