import React from 'react';
import { motion } from 'framer-motion';
import { EduGlassCard } from "./EduGlassCard";

interface PerformanceCurveProps {
  viewMode: 'faculty' | 'hod' | 'student';
  color: string;
}

export const PerformanceCurve: React.FC<PerformanceCurveProps> = ({ viewMode, color }) => {
  const dataMap = {
    faculty: { avg: "78.4%", points: [30, 45, 25, 60, 40, 55] },
    hod: { avg: "72.9%", points: [20, 35, 50, 45, 60, 55] },
    student: { avg: "9.82 CGPA", points: [40, 60, 45, 80, 70, 90] }
  };

  const activeData = dataMap[viewMode] || dataMap.faculty;

  const generatePath = (points: number[]) => {
    if (!points || points.length === 0) return "";
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * 100} ${150 - p}`).join(' ');
  };

  return (
    <EduGlassCard className="p-12 relative overflow-hidden h-full">
      <div className="flex justify-between items-start mb-12">
        <div>
          <h3 className="text-white text-xl font-black italic uppercase tracking-widest">
            Academic Performance Index
          </h3>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2">
            Semester Progress Distribution
          </p>
        </div>
        <div className="text-right">
          <motion.p animate={{ color }} className="text-3xl font-black italic font-lexend">
            {activeData.avg}
          </motion.p>
          <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">
            {viewMode === 'student' ? 'Current Standing' : 'Class Average'}
          </p>
        </div>
      </div>

      <div className="h-64 w-full mt-10 relative">
        <svg viewBox="0 0 500 150" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.5" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <motion.path
            animate={{ 
              d: generatePath(activeData.points),
              stroke: color 
            }}
            transition={{ 
              d: { duration: 0.8, ease: "easeInOut" },
              stroke: { duration: 0.4 } 
            }}
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
          />
          
          <motion.path
            animate={{ 
              d: `${generatePath(activeData.points)} L 500 150 L 0 150 Z`,
              fill: `url(#lineGradient)`
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="opacity-20"
          />
        </svg>
      </div>
    </EduGlassCard>
  );
};