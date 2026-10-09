import { ArrowLeft, Menu } from 'lucide-react';
import { Screen } from '../types';

interface HeaderProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  onBack?: () => void;
  userPhoto?: string;
  onOpenSelfie?: () => void;
}

export default function Header({
  currentScreen,
  onNavigate,
  onBack,
  userPhoto,
  onOpenSelfie
}: HeaderProps) {
  // Check if we are on a detail or sub-page focused flow
  const isSubPage = ['diagnostic', 'class_detail'].includes(currentScreen);

  // Default user profile placeholder image from the design spec
  const defaultUserPhoto =
    userPhoto ||
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAX1a1pi33-alHTHxz0OQrtbq20ekeK7tcCnqEJAqFZpOhpHlN-lvYygP_zu2kmeukY8qYoWwr82NT39wjoLalZesWnC-ZHKFntsS1Xt51SrZhFZur3zfC5PT7QmUJzaXR2Snxux1ZMi9lr1MGF7ytiwlI1HqUhTHMY2PmdqoXU6DqsKokdwlulgMcXNLnSH1srgcBcMjB9pI2H7wo49HUDBuZO5pVgHJirIRf-ecX0k5szd_9BD4KnfFAdEr75kuuw_tVUL4UEntQ3';

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center w-full px-5 py-3 border-b border-[#eeeeec] shadow-xs">
      <div className="flex items-center gap-3">
        {isSubPage ? (
          <button
            onClick={onBack}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#f3f4f2] text-[#3d635c] transition-colors border border-[#eeeeec] cursor-pointer"
            id="header-back-btn"
            aria-label="Volver"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={() => onNavigate('landing')}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#f3f4f2] text-[#3d635c] transition-all cursor-pointer"
            id="header-menu-btn"
            aria-label="Menú"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}
        <span 
          onClick={() => onNavigate('landing')} 
          className="text-lg font-headline font-semibold text-[#3d635c] tracking-tight cursor-pointer selection:bg-transparent"
        >
          Papada Bajo Control
        </span>
      </div>

      <div className="flex items-center gap-3">
        {/* Quick Selfie Action Badge */}
        {!['diagnostic', 'landing'].includes(currentScreen) && (
          <button 
            onClick={onOpenSelfie}
            className="hidden sm:flex items-center gap-1 bg-[#f4dfce] text-[#716155] px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer active:scale-95 transition-transform"
          >
            📸 Foto Guía
          </button>
        )}

        {/* User profile picture */}
        <div 
          onClick={() => onNavigate('progress')}
          className="w-10 h-10 rounded-full border border-[#c0c8c5] overflow-hidden shadow-xs cursor-pointer active:scale-90 transition-transform bg-[#eeeeec]"
        >
          <img
            alt="Foto de perfil de usuario"
            className="w-full h-full object-cover"
            src={defaultUserPhoto}
          />
        </div>
      </div>
    </header>
  );
}
