"use client"
import React from "react";
import { useAppSelector } from "@/lib/hooks";

const QuickStatistics: React.FC = () => {
  const { rank, percentile, currentScore } = useAppSelector((state) => state.score);

  const StatisticItem = ({
    emoji,
    title,
    value,
  }: {
    emoji: string;
    title: string;
    value: string;
  }) => (
    <div className="p-4 flex flex-col items-center justify-center sm:flex-row sm:items-start gap-4">
      <div className="w-16 h-16 rounded-full bg-neutral-100 grid place-items-center text-2xl">
        {emoji}
      </div>
      <div>
        <h3 className="font-bold text-xl text-center sm:text-left">{value}</h3>
        <p className="uppercase text-neutral-500 text-center sm:text-left">
          {title}
        </p>
      </div>
    </div>
  );

  return (
    <section className="p-4 sm:p-6 rounded-lg border border-neutral-200">
      <h2 className="text-lg font-semibold text-primary-dark">
        Quick Statistics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
        <StatisticItem title="your rank" emoji="🏆" value={rank.toString()} />
        <StatisticItem title="percentile" emoji="📖" value={`${percentile}%`} />
        <StatisticItem
          title="correct answers"
          emoji="✅"
          value={`${currentScore.current} / ${currentScore.total}`}
        />
      </div>
    </section>
  );
};

export default QuickStatistics;
