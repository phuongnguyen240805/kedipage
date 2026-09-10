"use client";
import React from "react";
import { motion } from "framer-motion";

interface StatItemProps {
  value: string;
  label: string;
  before: string;
  after: string;
  percentage: number; // 0 - 100 để vẽ vòng tròn
}

const StatItem = ({ value, label, before, after, percentage }: StatItemProps) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Vòng tròn nền */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="transparent"
          />
          {/* Vòng tròn tiến độ */}
          <motion.circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#6d5a9e" // Màu tím giống trong hình của bạn
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute text-center">
          <span className="block text-2xl font-black text-gray-800">{value}</span>
          <span className="block text-xs text-gray-500 font-medium">{label}</span>
        </div>
      </div>

      {/* Phần so sánh Trước/Sau */}
      <div className="mt-6 w-full space-y-2 text-sm">
        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
          <span className="text-gray-400">Trước</span>
          <span className="font-bold text-gray-700">{before}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Sau</span>
          <span className="bg-[#6d5a9e] text-white px-3 py-0.5 rounded-full font-bold text-xs">
            {after}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function ProjectStats({ statsData }: { statsData: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
      <StatItem 
        value={statsData.loadSpeed.value} 
        label="Tốc độ load" 
        before={statsData.loadSpeed.before} 
        after={statsData.loadSpeed.after} 
        percentage={90} 
      />
      <StatItem 
        value={statsData.seo.value} 
        label="Chuẩn SEO" 
        before={statsData.seo.before} 
        after={statsData.seo.after} 
        percentage={90} 
      />
      <StatItem 
        value={statsData.satisfaction.value} 
        label="Hài lòng" 
        before={statsData.satisfaction.before} 
        after={statsData.satisfaction.after} 
        percentage={100} 
      />
    </div>
  );
}