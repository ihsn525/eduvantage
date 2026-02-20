import React from 'react';
import { motion } from "framer-motion";
import { EduGlassCard } from "./EduGlassCard";
import { EduCountUp } from "./EduCountUp";

interface AcademicMetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  viewMode: 'faculty' | 'hod' | 'student';
}

export function AcademicMetricCard({ title, value, change, isPositive, icon, viewMode }: AcademicMetricCardProps) {
  const isStudent = viewMode === 'student';
  const themeColor = isStudent ? '#FF2800' : viewMode === 'faculty' ? '#14b8a6' : '#f97316';

  const renderValue = () => {
    // If the value contains a slash (like 124 / 160), render as text to avoid CountUp errors
    if (value.includes('/')) {
      return <span>{value}</span>;
    }
    
    const numValue = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
    const suffix = value.replace(/[0-9.]/g, '');
    return <EduCountUp value={numValue} suffix={suffix} decimals={value.includes('.') ? 1 : 0} />;
  };

  return (
    <EduGlassCard className="p-8 group relative overflow-hidden">
      <motion.div 
        animate={{ backgroundColor: themeColor }}
        className="absolute -right-4 -top-4 w-24 h-24 blur-[60px] opacity-20 rounded-full transition-colors duration-700"
      />

      <div className="flex justify-between items-start relative z-10">
        <motion.div animate={{ color: themeColor }} className="p-3 rounded-2xl bg-white/5 transition-colors duration-300">
          {icon}
        </motion.div>
        
        <div 
          className={`px-3 py-1 rounded-full text-[10px] font-black flex items-center gap-1 transition-colors duration-500 ${
            isPositive ? (isStudent ? 'bg-[#FF2800]/10 text-[#FF2800]' : 'bg-teal-500/10 text-teal-400') : 'bg-red-500/10 text-red-500'
          }`}
        >
          {isPositive ? '▲' : '▼'} {change}
        </div>
      </div>
      
      <div className="mt-8 relative z-10">
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">
          {title}
        </p>
        <h3 className="text-4xl font-black font-lexend mt-2 tracking-tighter text-white">
          {renderValue()}
        </h3>
      </div>
      
      <div className="mt-8 h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={false}
          animate={{ background: `linear-gradient(90deg, transparent, ${themeColor})` }}
          transition={{ duration: 0.8 }}
          className="h-full w-full"
        />
      </div>
    </EduGlassCard>
  );
}