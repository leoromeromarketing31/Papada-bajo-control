import { Home, Dumbbell, Sparkles, Zap, CalendarDays } from 'lucide-react';
import { Screen } from '../types';

interface BottomNavProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export default function BottomNav({ activeScreen, onNavigate }: BottomNavProps) {
  // Map current view to highlight category
  const isHomeActive = activeScreen === 'landing' || activeScreen === 'diagnostic';
  const isPlanActive = activeScreen === 'classes' || activeScreen === 'class_detail';
  const isProgressActive = activeScreen === 'progress' || activeScreen === 'diagnostic_result';
  const isExpressActive = activeScreen === 'express';

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#eeeeec] py-2 px-6 flex justify-around items-center shadow-[0_-4px_20px_rgba(0,0,0,0.03)] rounded-t-xl max-w-lg mx-auto sm:max-w-2xl md:max-w-4xl">
      {/* Inicio Button */}
      <button
        onClick={() => onNavigate('landing')}
        className={`flex flex-col items-center justify-center p-1 cursor-pointer transition-all ${
          isHomeActive
            ? 'text-[#3d635c] font-semibold transform -translate-y-0.5 scale-105'
            : 'text-[#6b5c4f] opacity-75 hover:opacity-100'
        }`}
        id="nav-btn-home"
      >
        <Home className="w-5 h-5 mb-0.5 transition-transform" />
        <span className="text-[10px] sm:text-xs">Inicio</span>
      </button>

      {/* Plan Button */}
      <button
        onClick={() => onNavigate('classes')}
        className={`flex flex-col items-center justify-center p-1 cursor-pointer transition-all ${
          isPlanActive
            ? 'text-[#3d635c] font-semibold transform -translate-y-0.5 scale-105'
            : 'text-[#6b5c4f] opacity-75 hover:opacity-100'
        }`}
        id="nav-btn-plan"
      >
        <CalendarDays className="w-5 h-5 mb-0.5 transition-transform" />
        <span className="text-[10px] sm:text-xs">Plan</span>
      </button>

      {/* Progreso Button */}
      <button
        onClick={() => onNavigate('progress')}
        className={`flex flex-col items-center justify-center p-1 cursor-pointer transition-all ${
          isProgressActive
            ? 'text-[#3d635c] font-semibold transform -translate-y-0.5 scale-105'
            : 'text-[#6b5c4f] opacity-75 hover:opacity-100'
        }`}
        id="nav-btn-progress"
      >
        <Sparkles className="w-5 h-5 mb-0.5 transition-transform" />
        <span className="text-[10px] sm:text-xs">Progreso</span>
      </button>

      {/* Express Capsule (Stands out!) */}
      <button
        onClick={() => onNavigate('express')}
        className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full cursor-pointer transition-all ${
          isExpressActive
            ? 'bg-[#3d635c] text-white font-semibold shadow-xs scale-105'
            : 'bg-[#557c74]/10 text-[#3d635c] hover:bg-[#557c74]/20'
        }`}
        id="nav-btn-express"
      >
        <Zap className={`w-4 h-4 ${isExpressActive ? 'animate-bounce' : 'text-[#3d635c]'}`} />
        <span className="text-xs font-semibold">Express</span>
      </button>
    </nav>
  );
}
