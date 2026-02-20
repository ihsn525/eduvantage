import React from 'react';
import { motion } from 'framer-motion';
import { EduGlassCard } from "../components/EduGlassCard";
import { AcademicMetricCard } from "../components/AcademicMetricCard";
import { BookOpen, Award, Clock, Star } from 'lucide-react';

export default function StudentView() {
  const accent = '#3b82f6'; // Student Blue

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AcademicMetricCard title="My CGPA" value="9.82" change="+0.2" isPositive={true} icon={<Star />} viewMode="student" />
        <AcademicMetricCard title="Course Credits" value="124/160" change="77%" isPositive={true} icon={<Award />} viewMode="student" />
        <AcademicMetricCard title="Next Deadline" value="2 Days" change="Urgent" isPositive={false} icon={<Clock />} viewMode="student" />
      </div>

      <EduGlassCard className="p-10">
        <h3 className="text-white font-black italic uppercase tracking-widest mb-6">Learning Path Progress</h3>
        <div className="space-y-6">
          {['Advanced React', 'Data Structures', 'Neural Networks'].map((course, i) => (
            <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5 flex justify-between items-center">
              <span className="text-sm font-bold">{course}</span>
              <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: `${80 - (i*15)}%` }} />
              </div>
            </div>
          ))}
        </div>
      </EduGlassCard>
    </motion.div>
  );
}