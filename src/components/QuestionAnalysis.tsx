"use client";
import { useAppSelector } from "@/lib/hooks";
import ProgressPieChart from "./ProgressPieChart";

export default function QuestionAnalysis() {
  const { currentScore } = useAppSelector((state) => state.score);
  const { current, total } = currentScore;
  return (
    <div className="p-6 border border-neutral-200 rounded-lg space-y-6">
      <div className="flex items-center gap-2 justify-between">
        <h2 className="text-lg font-semibold text-primary-dark">
          Question Analysis
        </h2>
        <p className="text-primary-dark font-bold">
          {current}/{total}
        </p>
      </div>
      <h3>
        <span className="font-semibold text-neutral-500">
          You scored {current} question correct out of {total}.
        </span>{" "}
        However it still needs some improvement
      </h3>
      <div className="w-full flex items-center justify-center">
        <ProgressPieChart correctQuestions={current} totalQuestions={total} />
      </div>
    </div>
  );
}
