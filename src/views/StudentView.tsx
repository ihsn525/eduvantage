import React from 'react';
import { EduGlassCard } from "../components/EduGlassCard";
import { Users, Globe, Clock } from 'lucide-react';

export default function StudentView({ viewMode }: { viewMode: string }) {
  const accent = viewMode === 'faculty' ? 'text-teal-400' : 'text-orange-400';
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <EduGlassCard className="p-8 space-y-6">
        <div className={`flex items-center gap-4 ${accent}`}><Globe size={24}/> <h4 className="font-bold uppercase tracking-widest text-xs">Student Geographies</h4></div>
        <ul className="space-y-4 text-sm font-medium text-slate-300">
          <li className="flex justify-between"><span>In-State</span> <span className="text-white/40 font-lexend">65%</span></li>
          <li className="flex justify-between"><span>Out-of-State</span> <span className="text-white/40 font-lexend">25%</span></li>
          <li className="flex justify-between"><span>International</span> <span className="text-white/40 font-lexend">10%</span></li>
        </ul>
      </EduGlassCard>

      <EduGlassCard className="p-8 space-y-6">
        <div className={`flex items-center gap-4 ${accent}`}><Clock size={24}/> <h4 className="font-bold uppercase tracking-widest text-xs">Peak Study Hours</h4></div>
        <p className={`text-2xl font-black font-lexend ${viewMode === 'faculty' ? 'text-teal-400' : 'text-orange-400'}`}>9:00 PM - 1:00 AM</p>
        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">LMS System Activity</p>
      </EduGlassCard>

      <EduGlassCard className="p-8 flex flex-col items-center justify-center text-center space-y-4">
        <Users size={40} className={accent} />
        <h4 className="font-bold uppercase tracking-widest text-xs">Total Enrollment</h4>
        <p className="text-4xl font-black font-lexend text-white">1,240</p>
      </EduGlassCard>
    </div>
  );
}