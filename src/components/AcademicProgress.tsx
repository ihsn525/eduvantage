import React from 'react';
import { EduGlassCard } from './EduGlassCard';
import { BarChart3 } from 'lucide-react';

export function AcademicProgress({ data, color, viewMode }: any) {
  return (
    <EduGlassCard className="flex-1 p-8 flex flex-col relative overflow-hidden h-full">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <BarChart3 size={20} style={{ color }} />
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Daily Pulse</h4>
        </div>
        <span className="text-[10px] font-mono text-slate-500">01-07 FEB</span>
      </div>

      <div className="flex-1 flex items-end justify-between gap-3 h-40">
        {data.map((val: number, i: number) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-4 group h-full justify-end">
            <div className="w-full relative bg-white/5 rounded-t-xl overflow-hidden" style={{ height: `${val}%` }}>
               <div className="absolute inset-0 transition-colors group-hover:brightness-125" style={{ backgroundColor: color, opacity: 0.3 }} />
               <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: color }} />
            </div>
            <span className="text-[8px] font-black text-slate-700 uppercase group-hover:text-slate-400">D0{i+1}</span>
          </div>
        ))}
      </div>
    </EduGlassCard>
  );
}