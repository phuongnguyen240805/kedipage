"use client";
import React from "react";
import { Search, Lightbulb, PenTool, BarChart3, MessageSquare } from "lucide-react";

const steps = [
  { title: "Nghiên cứu dự án", icon: <Search size={24} />, color: "bg-blue-500" },
  { title: "Giải pháp KEDI", icon: <Lightbulb size={24} />, color: "bg-orange-500" },
  { title: "Thiết kế UI/UX", icon: <PenTool size={24} />, color: "bg-purple-500" },
  { title: "Hiệu quả dự án", icon: <BarChart3 size={24} />, color: "bg-green-500" },
  { title: "Đánh giá khách", icon: <MessageSquare size={24} />, color: "bg-pink-500" },
];

export default function ProcessTimeline() {
  return (
    <div className="w-full py-12">
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center group">
              <div className={`w-16 h-16 rounded-full ${step.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <p className="mt-4 text-sm font-bold text-gray-700 uppercase tracking-tighter text-center max-w-[100px]">
                {step.title}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block w-12 lg:w-20 h-[2px] bg-gray-200 mb-8 mx-2" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}