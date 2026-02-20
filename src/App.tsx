import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, PieChart, Users, Settings as SettingsIcon, LogOut, 
  TrendingUp, BookOpen, GraduationCap, ShieldCheck, Bell, Activity, 
  ChevronRight, ArrowRight, Sparkles, Target, Clock, Globe, Database,
  Search, Filter, Calendar, BarChart3, AlertCircle, CheckCircle2,
  Fingerprint, ShieldAlert, Cpu, Zap, Lock, ScanEye, Key, Info, Award, Star,
  Share2, Users2, X, Microscope
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import { EduGlassCard } from "./components/EduGlassCard";
import { AcademicMetricCard } from "./components/AcademicMetricCard";
import { AcademicAlertCard } from "./components/AcademicAlertCard";
import { PerformanceCurve } from "./components/PerformanceCurve";
import { AcademicProgress } from "./components/AcademicProgress";

// View Imports
import PerformanceView from "./views/PerformanceView";
import StudentView from "./views/StudentView";
import SettingsView from "./views/SettingsView";
import ResourceVaultView from "./views/ResourceVaultView";

// --- AUTH CONFIGURATION ---
const SUBMISSION_ACCOUNTS = {
  faculty: { id: "faculty@edu.com", pass: "teach123", name: "Dr. Arvinth", role: "FACULTY" },
  hod: { id: "hod@edu.com", pass: "admin456", name: "Dr. Sarah Jonas", role: "DEPT HEAD" },
  student: { id: "rahul@edu.com", pass: "student789", name: "Rahul Sharma", role: "STUDENT" }
};

// --- AUTH PAGE COMPONENT ---
function AuthPage({ onLoginSuccess }: { onLoginSuccess: (user: string, role: 'faculty' | 'hod' | 'student') => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState('');

  const handleValidation = async () => {
    setIsAuthenticating(true);
    setError('');

    // Simulate Network/Security Handshake
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (email === SUBMISSION_ACCOUNTS.faculty.id && password === SUBMISSION_ACCOUNTS.faculty.pass) {
      onLoginSuccess(SUBMISSION_ACCOUNTS.faculty.name, 'faculty');
    } else if (email === SUBMISSION_ACCOUNTS.hod.id && password === SUBMISSION_ACCOUNTS.hod.pass) {
      onLoginSuccess(SUBMISSION_ACCOUNTS.hod.name, 'hod');
    } else if (email === SUBMISSION_ACCOUNTS.student.id && password === SUBMISSION_ACCOUNTS.student.pass) {
      onLoginSuccess(SUBMISSION_ACCOUNTS.student.name, 'student');
    } else {
      setError('AUTHENTICATION_FAILURE: INVALID_CREDENTIALS');
      setIsAuthenticating(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#020205] flex items-center justify-center p-6 relative overflow-hidden">
      {/* iOS Mesh Gradient Background */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-teal-500/10 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-[480px] w-full relative z-10">
        <div className="mb-8 flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-xl">
           <Info className="text-teal-400 shrink-0" size={18} />
           <p className="text-[10px] font-bold text-slate-300 leading-relaxed uppercase tracking-widest">
             Use the Quick-Access nodes below or enter university credentials to initialize kernel session.
           </p>
        </div>

        <div className="edu-liquid-card rounded-[3rem] p-12 border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.9)] overflow-hidden">
          
          {isAuthenticating && (
            <motion.div 
              initial={{ top: 0 }} 
              animate={{ top: '100%' }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-teal-500/50 z-20 shadow-[0_0_20px_#14b8a6]"
            />
          )}

          <div className="flex items-center gap-5 mb-12">
            <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-2xl shadow-teal-500/30">
              {isAuthenticating ? <ScanEye className="text-black animate-pulse" size={32} /> : <ShieldCheck className="text-black" size={32} />}
            </div>
            <div>
              <h1 className="text-2xl font-black italic font-lexend text-white tracking-tighter">VANTAGE.CORE</h1>
              <p className="text-[10px] font-black text-teal-500 uppercase tracking-[0.4em]">Security Gateway</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Identity Provider</label>
              <div className="relative group">
                <Users className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-teal-500 transition-colors" size={20} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@university.edu" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-[1.5rem] pl-14 pr-6 py-5 text-white focus:border-teal-500/50 transition-all outline-none font-medium" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Access Token</label>
              <div className="relative group">
                <Key className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-teal-500 transition-colors" size={20} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-[1.5rem] pl-14 pr-6 py-5 text-white focus:border-teal-500/50 transition-all outline-none" 
                />
              </div>
            </div>

            {error && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-red-400 text-[10px] font-black uppercase tracking-tighter bg-red-500/10 p-4 rounded-2xl border border-red-500/20">
                <AlertCircle size={16} /> {error}
              </motion.div>
            )}

            <button 
              onClick={handleValidation}
              disabled={isAuthenticating}
              className={`btn-liquid w-full py-5 rounded-[1.5rem] font-black transition-all flex items-center justify-center gap-3 group ${isAuthenticating ? 'opacity-50 grayscale' : 'text-white'}`}
            >
              <span className="tracking-[0.2em] relative z-10">
                {isAuthenticating ? 'DECRYPTING...' : 'INITIALIZE SESSION'}
              </span>
              {!isAuthenticating && <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform relative z-10" />}
              {isAuthenticating && <Zap size={20} className="animate-spin relative z-10" />}
            </button>
          </div>

          <div className="mt-12 p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 relative group">
            <div className="absolute -top-3 left-6 px-3 bg-[#020205] text-[9px] font-black text-slate-500 uppercase tracking-widest">Master Access (DA Submission)</div>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="space-y-1 cursor-pointer hover:bg-white/5 p-3 rounded-2xl transition-all" onClick={() => {setEmail('faculty@edu.com'); setPassword('teach123');}}>
                <p className="text-[9px] font-bold text-teal-500 uppercase">Faculty</p>
                <p className="text-[8px] text-slate-500 font-mono">faculty@edu.com</p>
              </div>
              <div className="space-y-1 cursor-pointer hover:bg-white/5 p-3 rounded-2xl transition-all" onClick={() => {setEmail('hod@edu.com'); setPassword('admin456');}}>
                <p className="text-[9px] font-bold text-orange-500 uppercase">HOD</p>
                <p className="text-[8px] text-slate-500 font-mono">hod@edu.com</p>
              </div>
              <div className="space-y-1 cursor-pointer hover:bg-white/5 p-3 rounded-2xl transition-all" onClick={() => {setEmail('rahul@edu.com'); setPassword('student789');}}>
                <p className="text-[9px] font-bold text-red-500 uppercase">Student</p>
                <p className="text-[8px] text-slate-500 font-mono">rahul@edu.com</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10 text-slate-600 text-[10px] font-black uppercase tracking-[0.5em] opacity-50">Secure Kernel // Node-X26</p>
      </motion.div>
    </div>
  );
}

// --- MAIN APP COMPONENT ---
export default function App() {
  const [session, setSession] = useState<{name: string, role: 'faculty' | 'hod' | 'student'} | null>(null);
  const [viewMode, setViewMode] = useState<'faculty' | 'hod' | 'student'>('faculty');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifCount, setNotifCount] = useState(3);
  const [nodeId, setNodeId] = useState('0x442');
  const [nodeStatus, setNodeStatus] = useState('Operational');
  
  // FIX IMPLEMENTED HERE: Added state for the analyze report modal
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (session) setViewMode(session.role);
  }, [session]);

  const themeColor = viewMode === 'student' ? '#FF2800' : viewMode === 'faculty' ? '#14b8a6' : '#f97316';

  if (!session) return <AuthPage onLoginSuccess={(name, role) => setSession({name, role})} />;

  return (
    <div className={`min-h-screen bg-[#020205] text-slate-200 font-sans selection:bg-[#FF2800]/30 overflow-x-hidden transition-colors duration-700`}>
      
      {/* Sidebar */}
      <aside className="fixed left-6 top-6 bottom-6 w-72 edu-liquid-card rounded-[3rem] border-white/5 z-50 flex flex-col">
        <div className="p-10 flex items-center gap-4 shrink-0">
          <motion.div animate={{ backgroundColor: themeColor }} className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/20">
            <TrendingUp size={24} className="text-black" strokeWidth={3} />
          </motion.div>
          <div>
            <h1 className="text-xl font-black tracking-tighter italic font-lexend text-white leading-none">EduVantage</h1>
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Liquid OS v26</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 custom-scrollbar">
          <nav className="space-y-2 mb-12">
            <NavItem icon={<LayoutDashboard size={20}/>} label={viewMode === 'student' ? "My Journey" : "Academic Overview"} active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} color={themeColor} />
            <NavItem icon={<PieChart size={20}/>} label={viewMode === 'student' ? "My Insights" : "Analytics Hub"} active={activeTab === 'performance'} onClick={() => setActiveTab('performance')} color={themeColor} />
            <NavItem icon={<Users size={20}/>} label={viewMode === 'student' ? "Peer Circle" : "Student Base"} active={activeTab === 'students'} onClick={() => setActiveTab('students')} color={themeColor} />
            <NavItem icon={<Database size={20}/>} label="Resource Vault" active={activeTab === 'resources'} onClick={() => setActiveTab('resources')} color={themeColor} />
            <NavItem icon={<SettingsIcon size={20}/>} label="System Config" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} color={themeColor} />
          </nav>

          <div className="px-4 pb-8">
             <h4 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] mb-8">Neural Activity</h4>
             <div className="space-y-8 border-l-2 border-white/5 ml-1 pl-6">
                <ActivityItem text={viewMode === 'student' ? "LMS Progress Sync" : "SIS Database Sync"} time="2m ago" active color={themeColor} />
                <ActivityItem text={viewMode === 'student' ? "New Grade Posted" : "Anomalous Grade Pattern"} time="15m ago" active={false} color={themeColor} />
                <ActivityItem text="API Endpoint Valid" time="1h ago" active={false} color={themeColor} />
             </div>
          </div>
        </div>

        <div className="p-8 shrink-0">
            <div className="edu-liquid-card p-5 bg-white/[0.02] border-white/5 rounded-[2rem]">
              <div className="flex items-center gap-4 mb-6">
                <motion.div animate={{ borderColor: themeColor, color: themeColor }} className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-black text-xs">
                  {session.name[0]}
                </motion.div>
                <div className="overflow-hidden text-left">
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{session.role}</p>
                  <p className="text-xs font-bold text-white truncate">{session.name}</p>
                </div>
              </div>
              <button onClick={() => setSession(null)} className="btn-liquid w-full py-3 flex items-center justify-center gap-3 text-[9px] font-black text-red-500 rounded-xl bg-red-500/5 hover:bg-red-500/10 border border-red-500/20 transition-all">
                <ShieldAlert size={14} /> SECURE LOGOUT
              </button>
            </div>
        </div>
      </aside>

      <main className="ml-[20rem] pt-12 pr-12 pb-24 relative z-10">
        <header className={`fixed top-6 left-[23rem] right-12 px-10 py-6 z-40 transition-all duration-500 rounded-[2.5rem] ${isScrolled ? 'edu-liquid-card border-white/10' : ''}`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                <motion.div animate={{ color: themeColor }}><Cpu size={20} /></motion.div>
              </div>
              <div>
                <input 
                  className="text-xs font-black text-slate-500 uppercase tracking-[0.5em] bg-transparent border-none outline-none focus:text-white transition-colors" 
                  value={`Node Cluster: ${nodeId}`} 
                  onChange={(e) => setNodeId(e.target.value.replace('Node Cluster: ', ''))} 
                />
                <select 
                  className="block text-[9px] font-bold uppercase tracking-widest mt-1 bg-transparent text-slate-500 outline-none border-none cursor-pointer" 
                  style={{ color: `${themeColor}aa` }} 
                  value={nodeStatus} 
                  onChange={(e) => setNodeStatus(e.target.value)}
                >
                  <option className="bg-[#020205]" value="Operational">Status: Operational</option>
                  <option className="bg-[#020205]" value="Maintenance">Status: Maintenance</option>
                  <option className="bg-[#020205]" value="Standby">Status: Standby</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex bg-white/5 p-1.5 rounded-[1.5rem] border border-white/5 shadow-inner backdrop-blur-md">
                <button onClick={() => setViewMode('faculty')} className={`px-6 py-3 rounded-2xl text-[9px] font-black tracking-widest transition-all ${viewMode === 'faculty' ? 'bg-[#14B8A6] text-black shadow-2xl' : 'text-slate-500 hover:text-white'}`}>FACULTY</button>
                <button onClick={() => setViewMode('hod')} className={`px-6 py-3 rounded-2xl text-[9px] font-black tracking-widest transition-all ${viewMode === 'hod' ? 'bg-[#f97316] text-black shadow-2xl' : 'text-slate-500 hover:text-white'}`}>H.O.D</button>
                <button onClick={() => setViewMode('student')} className={`px-6 py-3 rounded-2xl text-[9px] font-black tracking-widest transition-all ${viewMode === 'student' ? 'bg-[#FF2800] text-white shadow-2xl' : 'text-slate-500 hover:text-white'}`}>STUDENT</button>
              </div>
              
              <div className="h-12 w-[1px] bg-white/10" />
              
              <div className="relative">
                <button 
                  onClick={() => { setShowNotifications(!showNotifications); setNotifCount(0); }}
                  className="w-14 h-14 rounded-[1.5rem] bg-white/5 border border-white/5 flex items-center justify-center relative hover:bg-white/10 transition-all group"
                >
                  <Bell size={24} className={`transition-transform group-hover:rotate-12 ${notifCount > 0 ? "animate-swing text-orange-500" : ""}`} />
                  {notifCount > 0 && <span className="absolute top-4 right-4 w-3 h-3 bg-orange-500 rounded-full border-2 border-[#020205] animate-ping" />}
                </button>
                
                <AnimatePresence>
                  {showNotifications && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="absolute right-0 mt-6 w-[380px] edu-liquid-card rounded-[2.5rem] p-8 z-50 border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                      <div className="flex justify-between items-center mb-8">
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400">System Logs</h4>
                      </div>
                      <div className="space-y-6">
                        <NotificationItem icon={<ShieldAlert className="text-orange-500"/>} title="Security Alert" desc="Login attempt from unrecognized IP." time="4m" />
                        <NotificationItem icon={<CheckCircle2 className="text-teal-500"/>} title="Export Ready" desc="Semester performance PDF generated." time="1h" />
                        <NotificationItem icon={<Zap className="text-yellow-500"/>} title="System Update" desc="Vantage Kernel updated to v26.0.4." time="3h" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        <div className="mt-40">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-12">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <AcademicMetricCard 
                    title={viewMode === 'student' ? "My CGPA" : "Class GPA Avg"} 
                    value={viewMode === 'faculty' ? "8.42" : viewMode === 'student' ? "9.82" : "7.25"} 
                    change="+0.4%" isPositive={true} icon={<Star />} viewMode={viewMode} 
                  />
                  <AcademicMetricCard 
                    title={viewMode === 'student' ? "Course Credits" : "Syllabus Progress"} 
                    value={viewMode === 'student' ? "124 / 160" : "92%"} 
                    change={viewMode === 'student' ? "77%" : "+5%"} isPositive={true} icon={<Award />} viewMode={viewMode} 
                  />
                  <AcademicMetricCard 
                    title={viewMode === 'student' ? "Next Deadline" : "Attendance Stability"} 
                    value={viewMode === 'student' ? "2 Days" : "88%"} 
                    change={viewMode === 'student' ? "Urgent" : "-2%"} isPositive={false} icon={<Clock />} viewMode={viewMode} 
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
                  <div className="lg:col-span-2">
                    <PerformanceCurve viewMode={viewMode} color={themeColor} />
                  </div>
                  <div className="flex flex-col gap-10 h-full">
                    <AcademicProgress viewMode={viewMode} data={[90, 85, 92, 88, 95]} color={themeColor} />
                    {/* FIX IMPLEMENTED HERE: Added onViewDetails to trigger the modal */}
                    <AcademicAlertCard 
                      viewMode={viewMode}
                      category={viewMode === 'student' ? "trend" : "warning"} 
                      title={viewMode === 'student' ? "Grade Prediction" : "Retention Risk"} 
                      description={viewMode === 'student' ? "Kernel trajectory indicates 9.5+ potential. Run detailed analysis." : "4 students in Section C have missed labs."} 
                      onViewDetails={() => setShowAnalytics(true)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                  <div className="lg:col-span-2">
                    <div className="edu-liquid-card p-12 border-l-[6px] rounded-[3rem] transition-all bg-white/[0.01]" style={{ borderColor: themeColor }}>
                      <div className="flex justify-between items-center mb-12">
                         <h4 className="text-xs font-black uppercase tracking-[0.4em] text-white">
                           {viewMode === 'student' ? "Learning Path Efficiency" : "Top Performer Matrix"}
                         </h4>
                         <Sparkles className="animate-pulse" size={24} style={{ color: themeColor }} />
                      </div>
                      <div className="space-y-6">
                        {(viewMode === 'student' ? [
                          { name: "Advanced React Patterns", gpa: "9.2", rank: "A+", trend: "+2%" },
                          { name: "Neural Networks 101", gpa: "8.8", rank: "A", trend: "-1%" }
                        ] : [
                          { name: "Rahul Sharma", gpa: "9.82", rank: "01", trend: "+0.2" },
                          { name: "Ananya Iyer", gpa: "9.65", rank: "02", trend: "+0.1" }
                        ]).map((s, i) => (
                          <div key={i} className="flex items-center justify-between p-6 bg-white/[0.02] rounded-[2rem] border border-white/5 hover:bg-white/[0.05] transition-all cursor-pointer">
                             <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center font-black" style={{ color: themeColor }}>{s.name[0]}</div>
                                <span className="text-sm font-bold text-slate-200">{s.name}</span>
                             </div>
                             <div className="text-right">
                               <p className="text-base font-black text-white italic">{s.gpa}</p>
                               <p className={`text-[9px] font-black ${s.trend.includes('+') ? (viewMode === 'student' ? 'text-[#FF2800]' : 'text-teal-500') : 'text-red-500'}`}>{s.trend}</p>
                             </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                     <AcademicAlertCard 
                        viewMode={viewMode}
                        category="trend" 
                        title={viewMode === 'student' ? "Peak Study Time" : "System Load"} 
                        description={viewMode === 'student' ? "High focus activity detected between 21:00 - 01:00. Clearing backlogs recommended." : "Vantage core load at 84%. Schedule sync for off-peak hours."} 
                        onViewDetails={() => setShowAnalytics(true)}
                     />
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'performance' && <PerformanceView viewMode={viewMode} color={themeColor} />}
            {activeTab === 'students' && <StudentView viewMode={viewMode} color={themeColor} />}
            {activeTab === 'resources' && <ResourceVaultView viewMode={viewMode} color={themeColor} />}
            {activeTab === 'settings' && <SettingsView viewMode={viewMode} color={themeColor} />}
          </AnimatePresence>
        </div>
      </main>

      {/* FIX IMPLEMENTED HERE: Added the missing Analytics Modal triggered by AcademicAlertCard */}
      <AnimatePresence>
        {showAnalytics && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setShowAnalytics(false)} 
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl" 
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative w-full max-w-2xl edu-liquid-card p-12 border-white/10 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.9)] overflow-hidden bg-[#0a0a0f]"
            >
              <div className="absolute top-0 left-0 w-full h-1.5" style={{ backgroundColor: themeColor }} />
              <div className="flex justify-between items-start mb-12">
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10" style={{ color: themeColor }}>
                    <Microscope size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black italic text-white uppercase tracking-tighter">Analyzed Kernel Report</h2>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Neural Computation Engine v2.0</p>
                  </div>
                </div>
                <button onClick={() => setShowAnalytics(false)} className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all text-slate-400">
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[2.5rem]">
                  <p className="text-[9px] font-black text-slate-500 uppercase mb-2">Confidence Level</p>
                  <p className="text-4xl font-black italic text-white">98.4%</p>
                  <div className="w-full h-1 bg-white/5 mt-4 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '98.4%' }} className="h-full" style={{ backgroundColor: themeColor }} />
                  </div>
                </div>
                <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[2.5rem]">
                  <p className="text-[9px] font-black text-slate-500 uppercase mb-2">Data Integrity</p>
                  <p className="text-4xl font-black italic text-white" style={{ color: themeColor }}>OPTIMAL</p>
                  <div className="flex gap-1 mt-4">
                    {[1,2,3,4,5].map(i => <div key={i} className="h-1 flex-1 rounded-full" style={{ backgroundColor: themeColor }} />)}
                  </div>
                </div>
                <div className="col-span-2 p-8 bg-white/[0.03] border border-white/5 rounded-[2.5rem]">
                  <h4 className="text-[10px] font-black text-slate-500 uppercase mb-4">Neural Insight Suggestion</h4>
                  <p className="text-sm text-slate-300 italic leading-relaxed">
                    "Correlation found between session duration and grade stability. Recommending focused 45-minute sprint modules for {viewMode === 'student' ? 'exam prep' : 'syllabus coverage'}. Peak cognitive performance detected in early morning cycles."
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setShowAnalytics(false)}
                  className="flex-1 py-5 rounded-[1.5rem] font-black uppercase tracking-widest text-black transition-transform active:scale-95 shadow-xl hover:scale-[1.02]"
                  style={{ backgroundColor: themeColor }}
                >
                  Download Dataset
                </button>
                <button 
                  onClick={() => setShowAnalytics(false)}
                  className="flex-1 py-5 rounded-[1.5rem] font-black uppercase tracking-widest text-white border border-white/10 hover:bg-white/5 transition-all"
                >
                  Dismiss Report
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function NavItem({ icon, label, active, onClick, color }: any) {
  return (
    <button 
      onClick={onClick} 
      className={`w-full flex items-center gap-6 px-7 py-5 rounded-3xl transition-all group relative overflow-hidden ${
        active ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'
      }`}
    >
      <div 
        className="transition-transform duration-500 group-hover:scale-110 z-10" 
        style={{ color: active ? color : undefined }}
      >
        {icon}
      </div>

      <span className={`text-[10px] font-black uppercase tracking-[0.25em] z-10 transition-opacity ${
        active ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'
      }`}>
        {label}
      </span>

      {active && (
        <>
          <motion.div 
            layoutId={`sidebar-active-${label}`} 
            className="absolute left-0 w-1.5 h-8 rounded-full" 
            style={{ backgroundColor: color }} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-transparent pointer-events-none rounded-3xl" />
        </>
      )}
    </button>
  );
}

function ActivityItem({ text, time, active, color }: any) {
  return (
    <div className="flex items-start gap-5 group">
      <div className={`w-2 h-2 rounded-full mt-2 transition-shadow ${active ? 'animate-pulse' : 'bg-slate-800'}`} style={{ backgroundColor: active ? color : undefined, boxShadow: active ? `0 0 12px ${color}` : undefined }} />
      <div className="text-left">
        <p className={`text-[11px] font-bold transition-colors tracking-tight ${active ? 'text-white' : 'text-slate-500 group-hover:text-slate-400'}`}>{text}</p>
        <p className="text-[9px] text-slate-700 font-black uppercase tracking-widest mt-1 group-hover:text-slate-600 transition-colors">{time}</p>
      </div>
    </div>
  );
}

function NotificationItem({ icon, title, desc, time }: any) {
  return (
    <div className="flex gap-5 p-5 rounded-[2rem] hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/10">
      <div className="p-4 bg-white/5 rounded-2xl h-fit border border-white/5">{icon}</div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1.5">
          <h5 className="text-[12px] font-black text-white uppercase tracking-tight">{title}</h5>
          <span className="text-[10px] font-bold text-slate-600">{time}</span>
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{desc}</p>
      </div>
    </div>
  );
}