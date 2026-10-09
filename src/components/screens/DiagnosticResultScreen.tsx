import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Screen } from '../../types';

interface DiagnosticResultScreenProps {
  onNavigate: (screen: Screen) => void;
  onShowNotification: (msg: string) => void;
}

export default function DiagnosticResultScreen({
  onNavigate,
  onShowNotification,
}: DiagnosticResultScreenProps) {
  return (
    <div className="flex flex-col gap-6 text-center" id="view-diagnostic-result">
      {/* Top anatomical round shield and badge */}
      <div className="flex flex-col items-center">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#3d635c]/30 shadow-xl mb-4 relative bg-[#eeeeec]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiNS9wVJBXoB1r7j9kN5rSBijJhhm5T5ptXvLRZBm2aR2_CNgV2BHpTI4A5nBFsMJO9dm9OLg1ry5myktjVT9UaSU_LgVrlnDoBOx1c4bvl1KuihJP-NLmv-OLacmKlVdJnZeTUwyNuQEwFXUfP4tRxdmlghgTRvOdehIsSSdrPGUpk0rN8iv85eIs-W9OyEkMTTaeqAWbayw9TRcOkcRREoUvyZ30ccUl4_57BUuN7KU27LmJOlKW9Wu41566Kp2hdajt9cjsjmKD"
            alt="Anatomía muscular cabeza y cuello"
            className="w-full h-full object-cover"
          />
        </div>

        <span className="px-3 py-1 bg-[#f4dfce] text-[#716155] rounded-full text-[10px] font-bold uppercase tracking-widest mb-2">
          Resultado del diagnóstico
        </span>
        <h3 className="font-headline font-bold text-2xl text-[#3d635c] tracking-tight">
          Tipo 4: Papada Mixta
        </h3>
        <p className="text-xs text-[#6b5c4f] max-w-sm mt-2 leading-relaxed">
          Tu caso combina hinchazón por retención hídrica, ligera flexión postural "text-neck" y falta de contracción isométrica en el músculo platisma superior.
        </p>
      </div>

      {/* Custom Protocol Detail Card */}
      <div className="bg-white rounded-3xl p-5 border border-[#eeeeec] shadow-xs text-left">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="text-[#3d635c] w-5 h-5 flex-shrink-0" />
          <h4 className="font-bold text-sm text-[#3d635c]">Tu Plan Personalizado</h4>
        </div>
        <p className="text-xs text-[#6b5c4f] leading-relaxed mb-4">
          El algoritmo ha combinado drenajes linfáticos rítmicos para descongestionar el tejido, estiramientos cervicales de reajuste muscular y ejercicios isométricos para tensar la platisma. Tendrás acceso instantáneo a los 21 días.
        </p>

        {/* Fast parameters labels */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-[#f3f4f2] text-[#3d635c] px-3 py-1 rounded-full text-[10px] font-medium flex items-center gap-1">
            📅 21 Días Completos
          </span>
          <span className="bg-[#f3f4f2] text-[#3d635c] px-3 py-1 rounded-full text-[10px] font-medium flex items-center gap-1">
            📐 4 Focos de trabajo
          </span>
          <span className="bg-[#f3f4f2] text-[#3d635c] px-3 py-1 rounded-full text-[10px] font-medium flex items-center gap-1">
            ⚡ Resultados Progresivos
          </span>
        </div>
      </div>

      {/* Activation status bar card */}
      <div className="bg-[#3d635c] rounded-3xl p-5 text-white shadow-md text-left relative overflow-hidden">
        <span className="text-[9px] uppercase tracking-wider font-bold opacity-85">Estado del Plan</span>
        <h4 className="font-headline font-bold text-lg mt-0.5 mb-2">Activación Lista</h4>
        
        <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden mb-2">
          <div className="h-full bg-white w-full rounded-full" />
        </div>
        <p className="text-[10px] text-[#f4fffb] opacity-90">
          Todo cargado y listo para comenzar tu Día 1: Desbloqueo.
        </p>
      </div>

      {/* Clinical focus areas expansion card */}
      <div className="text-left">
        <h4 className="font-headline font-bold text-base text-[#3d635c] mb-3">
          Áreas clínicas de Enfoque
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-white rounded-2xl border border-[#eeeeec] shadow-xs text-left active:border-[#3d635c] transition-all">
            <div className="w-7 h-7 rounded-lg bg-[#a6cfc6]/20 text-[#3d635c] flex items-center justify-center mb-2">
              🎯
            </div>
            <h5 className="font-bold text-xs text-[#1a1c1b]">Drenaje</h5>
            <p className="text-[10px] text-[#6b5c4f]">Reduce la retención submentoniana.</p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-[#eeeeec] shadow-xs text-left active:border-[#3d635c] transition-all">
            <div className="w-7 h-7 rounded-lg bg-[#f4dfce] text-[#7c5147] flex items-center justify-center mb-2">
              🧘
            </div>
            <h5 className="font-bold text-xs text-[#1a1c1b]">Postura</h5>
            <p className="text-[10px] text-[#6b5c4f]">Alineación de vértebras cervicales.</p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-[#eeeeec] shadow-xs text-left active:border-[#3d635c] transition-all">
            <div className="w-7 h-7 rounded-lg bg-[#eeeeec] text-[#6b5c4f] flex items-center justify-center mb-2">
              🔑
            </div>
            <h5 className="font-bold text-xs text-[#1a1c1b]">Tensión</h5>
            <p className="text-[10px] text-[#6b5c4f]">Relaja la tensión masticatoria.</p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-[#eeeeec] shadow-xs text-left active:border-[#3d635c] transition-all">
            <div className="w-7 h-7 rounded-lg bg-[#3d635c]/10 text-[#3d635c] flex items-center justify-center mb-2">
              💪
            </div>
            <h5 className="font-bold text-xs text-[#1a1c1b]">Activación</h5>
            <p className="text-[10px] text-[#6b5c4f]">Tonifica los músculos caídos.</p>
          </div>
        </div>
      </div>

      {/* Complete onboarding and redirect block */}
      <button
        onClick={() => {
          onShowNotification('🚀 Sesión pre-cargada. ¡Buen entrenamiento!');
          onNavigate('classes');
        }}
        className="w-full py-4 bg-[#3d635c] hover:bg-[#274d47] text-white font-bold rounded-full text-xs shadow-md uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
      >
        IR A MI PLAN <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
