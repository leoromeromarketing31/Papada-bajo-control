import { Sparkles, Zap, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

interface LandingScreenProps {
  onStartDiagnostic: () => void;
  onStartExpress: () => void;
}

export default function LandingScreen({ onStartDiagnostic, onStartExpress }: LandingScreenProps) {
  return (
    <div className="flex flex-col gap-6" id="view-landing">
      {/* Banner Modality Premium Hero card */}
      <div className="relative overflow-hidden rounded-3xl express-gradient p-6 text-white shadow-md">
        <div className="relative z-10 flex flex-col items-start">
          <span className="bg-[#98695e] text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full mb-3 shadow-xs">
            Modo Express Disponible
          </span>
          <h2 className="font-headline font-bold text-2xl tracking-tight leading-tight mb-2">
            Rutina Express: Perfil Más Firme en 3 Minutos
          </h2>
          <p className="text-xs text-[#f4fffb] leading-relaxed max-w-sm opacity-90 mb-4">
            Hazla antes de fotos, citas, reuniones o videollamadas para lucir un perfil esculpido y desinflamado al instante.
          </p>
          <button
            onClick={onStartExpress}
            className="bg-white text-[#3d635c] hover:bg-[#f3f4f2] text-xs font-bold px-4 py-2 rounded-full cursor-pointer transition-all uppercase tracking-wider flex items-center gap-1.5 active:scale-95 shadow-xs"
          >
            <Zap className="w-4 h-4 animate-bounce" /> Probar Ahora
          </button>
        </div>
        
        {/* Semi-transparent absolute accent decor shape */}
        <div className="absolute right-[-20px] bottom-[-20px] w-44 h-44 rounded-full bg-[#557c74] opacity-20 blur-2xl" />
      </div>

      {/* Introductory Clinical Portal Card */}
      <div className="bg-white rounded-3xl border border-[#eeeeec] p-5 shadow-xs flex flex-col text-left relative overflow-hidden">
        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 mb-4 border border-[#eeeeec]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL"
            alt="Modelo de yoga facial clínico"
            className="w-full h-full object-cover shadow-inner hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="flex items-center gap-1 bg-[#eeeeec]/60 border border-[#c0c8c5]/30 rounded-full px-2.5 py-1 text-[10px] text-[#3d635c] font-semibold self-start mb-2.5">
          <ShieldCheck className="w-3.5 h-3.5" /> Eficacia Probada • Protocolos Clínicos
        </div>

        <h3 className="font-headline font-bold text-xl text-[#3d635c] tracking-tight mb-2">
          Papada Bajo Control
        </h3>
        <p className="text-xs text-[#6b5c4f] leading-relaxed mb-4">
          Protocolo certificado de 21 días diseñado por fisioterapeutas para activar cuello, mentón y mandíbula con ejercicios de yoga facial guiados.
        </p>

        {/* Unique Features Stack */}
        <div className="space-y-3 mb-5">
          <div className="flex gap-3 text-left">
            <div className="w-8 h-8 rounded-full bg-[#a6cfc6]/20 text-[#3d635c] flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1a1c1b]">Diagnóstico Inteligente</h4>
              <p className="text-[11px] text-[#6b5c4f]">Identificamos tu tipo de piel, postura y tono muscular facial para modelar tu plan.</p>
            </div>
          </div>

          <div className="flex gap-3 text-left">
            <div className="w-8 h-8 rounded-full bg-[#f4dfce] text-[#7c5147] flex items-center justify-center flex-shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1a1c1b]">Rutina Diaria de 10 min</h4>
              <p className="text-[11px] text-[#6b5c4f]">Ejercicios sencillos guiados por vídeo paso a paso para resultados progresivos y duraderos.</p>
            </div>
          </div>
        </div>

        {/* Empezar Diagnóstico Action */}
        <button
          onClick={onStartDiagnostic}
          className="w-full py-3.5 bg-[#3d635c] hover:bg-[#274d47] text-white font-bold rounded-full text-xs shadow-md tracking-widest uppercase transition-all duration-150 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          Empezar Diagnóstico <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Quick Scientific Trust Badges Container */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 bg-white rounded-2xl border border-[#eeeeec] flex flex-col items-center justify-center text-center">
          <span className="text-[#3d635c] font-black font-headline text-lg">+15k</span>
          <span className="text-[9px] text-[#6b5c4f] uppercase tracking-wider font-semibold">Usuarios Activos</span>
        </div>
        <div className="p-3 bg-white rounded-2xl border border-[#eeeeec] flex flex-col items-center justify-center text-center">
          <span className="text-[#3d635c] font-black font-headline text-lg">4.9 ★</span>
          <span className="text-[9px] text-[#6b5c4f] uppercase tracking-wider font-semibold">Calificación</span>
        </div>
        <div className="p-3 bg-white rounded-2xl border border-[#eeeeec] flex flex-col items-center justify-center text-center">
          <span className="text-[#3d635c] font-black font-headline text-lg">21 Días</span>
          <span className="text-[9px] text-[#6b5c4f] uppercase tracking-wider font-semibold">Duración del Plan</span>
        </div>
        <div className="p-3 bg-white rounded-2xl border border-[#eeeeec] flex flex-col items-center justify-center text-center">
          <span className="text-[#3d635c] font-black font-headline text-lg">100%</span>
          <span className="text-[9px] text-[#6b5c4f] uppercase tracking-wider font-semibold">Aval Clínico</span>
        </div>
      </div>
    </div>
  );
}
