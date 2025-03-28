import React from "react";
import { Progress } from "./ui/progress";

const syllabusItems = [
  {
    title: "HTML Tools, Forms, History",
    progress: 80,
    colors: {
      bar: "bg-blue-500",
      bg: "bg-blue-100",
      text: "text-blue-500"
    }
  },
  {
    title: "Tags & References in HTML",
    progress: 60,
    colors: {
      bar: "bg-purple-500",
      bg: "bg-purple-100",
      text: "text-purple-500"
    }
  },
  {
    title: "Tables & References HTML",
    progress: 24,
    colors: {
      bar: "bg-orange-500",
      bg: "bg-orange-100",
      text: "text-orange-500"
    }
  },
  {
    title: "Tables & Basic CSS",
    progress: 96,
    colors: {
      bar: "bg-green-500",
      bg: "bg-green-100",
      text: "text-green-500"
    }
  },
];

export default function SyllabusAnalysis() {
  return (
    <div className="p-4 sm:p-6 rounded-lg border border-neutral-200">
      <h2 className="text-lg font-semibold text-primary-dark">
        Syllabus Wise Analysis
      </h2>
      <div className="space-y-6 mt-6">
        {syllabusItems.map((item, index) => (
          <div key={index} className="space-y-2">
            <h3 className="font-medium text-neutral-500">
              {item.title}
            </h3>
            <Progress
              value={item.progress}
              showValue
              color={item.colors.bar}
              bgColor={item.colors.bg}
              valueColor={item.colors.text}
              size="md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
