import React, { useId } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, TrendingUp, Activity, Brain, Target, Zap, 
  AlertTriangle, ArrowRight, BookOpen, Microscope, Crosshair,
  Layers, ChevronUp, ChevronDown
} from 'lucide-react';

interface PerformanceViewProps {
  viewMode: 'faculty' | 'hod' | 'student';
  color: string;
}

export default function PerformanceView({ viewMode, color }: PerformanceViewProps) {
  const chartId = useId();

  // Dynamic Data based on View Mode
  const hubData = {
    student: {
      title: "My Neural Analytics",
      subtitle: "Personalized Performance Trajectory",
      score: "9.82",
      scoreLabel: "Current CGPA",
      trend: "+0.42",
      insights: [
        { title: "Cognitive Load", value: "Optimal", desc: "Study patterns align with circadian peaks.", icon: <Brain />, alert: false },
        { title: "Risk Factor", value: "Low", desc: "No immediate threat to current GPA trajectory.", icon: <AlertTriangle />, alert: false },
        { title: "Focus Area", value: "Algorithms", desc: "Requires 15% more attention this week.", icon: <Target />, alert: true }
      ],
      metrics: [
        { label: "Data Structures", score: 95, avg: 72 },
        { label: "Machine Learning", score: 88, avg: 65 },
        { label: "Cloud Computing", score: 92, avg: 78 },
        { label: "Quantum Logic", score: 84, avg: 60 }
      ]
    },
    faculty: {
      title: "Class Analytics Matrix",
      subtitle: "Batch 2026 Overall Performance",
      score: "78.4%",
      scoreLabel: "Class Average",
      trend: "+2.1%",
      insights: [
        { title: "Engagement", value: "82%", desc: "Active participation in recent lab modules.", icon: <Activity />, alert: false },
        { title: "At-Risk Students", value: "14", desc: "Falling below the 60% threshold.", icon: <AlertTriangle />, alert: true },
        { title: "Syllabus Velocity", value: "On Track", desc: "Module 4 completed ahead of schedule.", icon: <Zap />, alert: false }
      ],
      metrics: [
        { label: "Quiz 1 (React)", score: 82, avg: 82 },
        { label: "Midterm (Node)", score: 75, avg: 75 },
        { label: "Lab Assignment", score: 88, avg: 88 },
        { label: "Final Project", score: 68, avg: 68 }
      ]
    },
    hod: {
      title: "Department Command Center",
      subtitle: "Computer Science Dept Overview",
      score: "8.24",
      scoreLabel: "Dept Avg GPA",
      trend: "-0.12",
      insights: [
        { title: "Faculty Load", value: "Critical", desc: "3 professors exceeding standard credit hours.", icon: <Layers />, alert: true },
        { title: "Research Output", value: "High", desc: "12 papers published this quarter.", icon: <BookOpen />, alert: false },
        { title: "Placement Readiness", value: "94%", desc: "Pre-assessment scores looking strong.", icon: <Crosshair />, alert: false }
      ],
      metrics: [
        { label: "Section A Avg", score: 85, avg: 75 },
        { label: "Section B Avg", score: 72, avg: 75 },
        { label: "Section C Avg", score: 78, avg: 75 },
        { label: "Section D Avg", score: 81, avg: 75 }
      ]
    }
  };

  const activeData = hubData[viewMode];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      className="space-y-10"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black italic text-white tracking-tighter uppercase">{activeData.title}</h2>
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mt-2">{activeData.subtitle}</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all text-white">
            Export Report
          </button>
          <button 
            className="px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-black transition-transform active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.2)]"
            style={{ backgroundColor: color }}
          >
            Run Deep Audit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Main Score Card */}
        <div className="edu-liquid-card p-10 rounded-[3rem] border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <Microscope size={120} style={{ color }} />
          </div>
          <div className="relative z-10">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4">{activeData.scoreLabel}</p>
            <div className="flex items-end gap-4">
              <h3 className="text-7xl font-black italic tracking-tighter text-white">{activeData.score}</h3>
              <div className={`flex items-center gap-1 mb-2 px-3 py-1.5 rounded-xl text-[10px] font-black tracking-wider ${activeData.trend.includes('+') ? 'bg-teal-500/10 text-teal-400' : 'bg-red-500/10 text-red-400'}`}>
                {activeData.trend.includes('+') ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                {activeData.trend}
              </div>
            </div>
            
            <div className="mt-12 space-y-4">
              <div className="h-[1px] w-full bg-white/5" />
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span>Kernel Status</span>
                <span style={{ color }}>Optimized</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeData.insights.map((insight, idx) => (
            <div key={idx} className={`p-8 rounded-[2.5rem] border transition-all hover:-translate-y-1 ${insight.alert ? 'bg-red-500/5 border-red-500/20' : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05]'}`}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: insight.alert ? 'rgba(239,68,68,0.1)' : `${color}22`, color: insight.alert ? '#ef4444' : color }}>
                {insight.icon}
              </div>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">{insight.title}</p>
              <h4 className={`text-xl font-black italic tracking-tight mb-4 ${insight.alert ? 'text-red-400' : 'text-white'}`}>{insight.value}</h4>
              <p className="text-xs font-medium text-slate-400 leading-relaxed">{insight.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Telemetry Section */}
      <div className="edu-liquid-card p-10 rounded-[3rem] border-white/5">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-white flex items-center gap-3">
            <BarChart3 style={{ color }} size={20} />
            Module Telemetry
          </h3>
          <div className="flex gap-2">
            <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-500">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} /> Actual
            </span>
            <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-500 ml-4">
              <div className="w-2 h-2 rounded-full bg-white/10" /> Expected Avg
            </span>
          </div>
        </div>

        <div className="space-y-8">
          {activeData.metrics.map((metric, idx) => (
            <div key={idx} className="relative">
              <div className="flex justify-between items-end mb-3">
                <span className="text-xs font-bold text-slate-300">{metric.label}</span>
                <span className="text-sm font-black italic text-white">{metric.score}%</span>
              </div>
              
              {/* Dual Progress Bar */}
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden relative flex">
                {/* Average Marker line */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white/30 z-20" 
                  style={{ left: `${metric.avg}%` }}
                />
                
                {/* Actual Score Fill */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.score}%` }}
                  transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                  className="h-full relative z-10 rounded-full"
                  style={{ backgroundColor: color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </motion.div>
  );
}