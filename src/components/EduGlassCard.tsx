import React from "react";

interface EduGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function EduGlassCard({ children, className = "", ...props }: EduGlassCardProps) {
  return (
    <div
      className={`glass-panel rounded-2xl p-6 transition-all duration-300 border border-white/5 hover:border-white/10 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}