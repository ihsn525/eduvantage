import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, FileText, PlayCircle, Folder, 
  Download, ExternalLink, MoreVertical, Plus,
  Database, HardDrive, Cpu, Cloud, Layers
} from 'lucide-react';
import { EduGlassCard } from "../components/EduGlassCard";

// Mock Data for Resources
const RESOURCES = [
  { id: 1, name: "Advanced Neural Networks.pdf", type: "PDF", size: "4.2 MB", category: "Course Material", date: "2h ago", downloads: 124 },
  { id: 2, name: "Semester_04_Results_Master.xlsx", type: "DATA", size: "1.8 MB", category: "Reports", date: "5h ago", downloads: 45 },
  { id: 3, name: "Quantum Computing Lecture 12.mp4", type: "VIDEO", size: "850 MB", category: "Lectures", date: "1d ago", downloads: 312 },
  { id: 4, name: "Faculty_Guidelines_2024.pdf", type: "PDF", size: "1.1 MB", category: "Admin", date: "3d ago", downloads: 89 },
  { id: 5, name: "Student_Attendance_Log_C2.csv", type: "DATA", size: "800 KB", category: "Reports", date: "4d ago", downloads: 12 },
];

export default function ResourceVaultView({ viewMode }: { viewMode: 'faculty' | 'hod' }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Nodes');
  const themeColor = viewMode === 'faculty' ? '#14b8a6' : '#f97316';

  const categories = [
    { name: 'All Nodes', icon: <Database size={16} />, count: 154 },
    { name: 'Course Material', icon: <Layers size={16} />, count: 42 },
    { name: 'Reports', icon: <FileText size={16} />, count: 18 },
    { name: 'Lectures', icon: <PlayCircle size={16} />, count: 24 },
    { name: 'Archive', icon: <HardDrive size={16} />, count: 70 },
  ];

  const filteredResources = RESOURCES.filter(res => 
    res.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (activeCategory === 'All Nodes' || res.category === activeCategory)
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="space-y-10"
    >
      {/* Search & Header Section */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-end">
        <div className="space-y-2">
          <h2 className="text-3xl font-black italic font-lexend text-white tracking-tighter">RESOURCE.VAULT</h2>
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Decentralized Academic Storage</p>
        </div>
        
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-80 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-white transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Query Data Nodes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm text-white focus:border-white/20 outline-none transition-all"
            />
          </div>
          <button 
            className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
            style={{ boxShadow: `0 0 20px ${themeColor}10` }}
          >
            <Plus size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Category Sidebar */}
        <div className="space-y-4">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all group ${
                activeCategory === cat.name 
                ? 'bg-white/10 border-white/20 text-white' 
                : 'bg-transparent border-transparent text-slate-500 hover:bg-white/[0.02]'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg transition-colors ${activeCategory === cat.name ? 'text-white' : 'group-hover:text-white'}`} style={{ color: activeCategory === cat.name ? themeColor : '' }}>
                  {cat.icon}
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest">{cat.name}</span>
              </div>
              <span className="text-[10px] font-mono opacity-40">{cat.count}</span>
            </button>
          ))}
          
          <div className="mt-10 p-6 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5">
             <Cloud className="mb-4 opacity-50" style={{ color: themeColor }} size={24} />
             <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Storage Matrix</p>
             <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-2/3" style={{ backgroundColor: themeColor }} />
             </div>
             <p className="text-[9px] font-bold text-white mt-3 uppercase tracking-tighter">12.4 GB / 20 GB USED</p>
          </div>
        </div>

        {/* Resource Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredResources.map((res) => (
              <motion.div
                key={res.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <EduGlassCard className="p-6 group hover:border-white/20 transition-all cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical size={16} className="text-slate-500" />
                  </div>
                  
                  <div className="flex items-start gap-5">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                      {res.type === 'PDF' && <FileText className="text-red-400" size={24} />}
                      {res.type === 'DATA' && <Database className="text-teal-400" size={24} />}
                      {res.type === 'VIDEO' && <PlayCircle className="text-purple-400" size={24} />}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white truncate mb-1 group-hover:text-teal-400 transition-colors">
                        {res.name}
                      </h4>
                      <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">
                        {res.category} • {res.size}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                       <div className="flex -space-x-2">
                          {[1,2].map(i => <div key={i} className="w-5 h-5 rounded-full border border-[#020205] bg-slate-800" />)}
                       </div>
                       <span className="text-[9px] font-bold text-slate-500 uppercase">{res.downloads} synced</span>
                    </div>
                    
                    <div className="flex gap-2">
                       <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white">
                         <Download size={14} />
                       </button>
                       <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white">
                         <ExternalLink size={14} />
                       </button>
                    </div>
                  </div>
                </EduGlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}