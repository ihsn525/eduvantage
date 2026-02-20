import React from 'react';
import { EduGlassCard } from "../components/EduGlassCard";
import { Database, ShieldCheck, Bell } from 'lucide-react';

export default function SettingsView({ viewMode }: { viewMode: string }) {
  const color = viewMode === 'faculty' ? 'bg-teal-500' : 'bg-orange-500';

  return (
    <div className="max-w-3xl space-y-6">
      <EduGlassCard className={`p-8 flex items-center justify-between border-l-4 ${viewMode === 'faculty' ? 'border-teal-500' : 'border-orange-500'}`}>
        <div className="flex gap-6 items-center">
          <Database className="text-slate-500" />
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest">SIS API Sync</h4>
            <p className="text-xs text-slate-500 mt-1">Student Information System data is currently live.</p>
          </div>
        </div>
        <div className={`w-12 h-6 ${color}/20 rounded-full relative`}><div className={`absolute right-1 top-1 w-4 h-4 ${color} rounded-full`}></div></div>
      </EduGlassCard>

      <EduGlassCard className="p-8 flex items-center justify-between">
        <div className="flex gap-6 items-center">
          <Bell className="text-slate-500" />
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest">Academic Alerts</h4>
            <p className="text-xs text-slate-500 mt-1">Notify HOD for class failures above 10%.</p>
          </div>
        </div>
        <div className="w-12 h-6 bg-white/10 rounded-full relative"><div className="absolute left-1 top-1 w-4 h-4 bg-white/20 rounded-full"></div></div>
      </EduGlassCard>
      
      <button className={`w-full py-4 rounded-2xl font-black text-[10px] tracking-widest border border-white/5 hover:bg-white/5 transition-all`}>
        EXPORT SEMESTER REPORT (PDF)
      </button>
    </div>
  );
}