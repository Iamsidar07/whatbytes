import ComparasionGraph from "@/components/ComparasionGraph";
import QuestionAnalysis from "@/components/QuestionAnalysis";
import SkillCard from "@/components/SkillCard";
import Statistics from "@/components/QuickStatistics";
import SyllabusAnalysis from "@/components/SyllabusAnalysis";
import React from "react";
import QuickStatistics from "@/components/QuickStatistics";

export default function SkillTestPage() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-gray-500">Skill Test</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <aside className="md:col-span-2 space-y-6">
          <SkillCard />
          <QuickStatistics />
          <ComparasionGraph />
        </aside>
        <div className="space-y-6">
          <SyllabusAnalysis />
          <QuestionAnalysis />
        </div>
      </div>
    </div>
  );
}
