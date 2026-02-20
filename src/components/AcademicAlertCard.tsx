import { EduGlassCard } from "./EduGlassCard";
import { Lightbulb, ArrowRight, AlertTriangle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface AcademicAlertCardProps {
  viewMode: 'faculty' | 'hod' | 'student';
  category: 'warning' | 'trend';
  title: string;
  description: string;
  onViewDetails?: () => void; // Add this line with the '?'
}

export function AcademicAlertCard({ title, description, category = "tip", viewMode }: AcademicAlertCardProps) {
  const isStudent = viewMode === 'student';
  
  // Logic: If Student view, use Ferrari Red. Otherwise, use Category logic.
  const accentColor = isStudent ? '#FF2800' : (category === "warning" ? "#f97316" : "#14b8a6");
  const Icon = category === "warning" ? AlertTriangle : category === "trend" ? TrendingUp : Lightbulb;

  return (
    <EduGlassCard 
      className="flex flex-col justify-between hover:bg-white/5 cursor-pointer group active:scale-[0.98] transition-all duration-500"
      style={{ borderLeft: `4px solid ${accentColor}` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-white/5 transition-colors duration-500" style={{ color: accentColor }}>
          <Icon size={20} />
        </div>
        <div>
          <h4 className="font-semibold text-white mb-1 uppercase text-xs tracking-widest">{title}</h4>
          <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{description}</p>
        </div>
      </div>
      
      <div className="flex justify-end mt-4">
        <button className="text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
          Analyze Report <ArrowRight size={14} />
        </button>
      </div>
    </EduGlassCard>
  );
}