import { Play, Pause, Zap } from 'lucide-react';
import { Screen } from '../../types';
import { EXPRESS_EXERCISES } from '../../data';

interface ExpressScreenProps {
  expressPlaying: boolean;
  setExpressPlaying: (playing: boolean | ((p: boolean) => boolean)) => void;
  expressActiveStepIdx: number;
  setExpressActiveStepIdx: (idx: number) => void;
  expressSecondsLeft: number;
  setExpressSecondsLeft: (sec: number) => void;
  expressPulse: boolean;
  profileActivationPercent: number;
  setProfileActivationPercent: (percent: number | ((p: number) => number)) => void;
  setCurrentScreen: (screen: Screen) => void;
  showToast: (msg: string) => void;
}

export default function ExpressScreen({
  expressPlaying,
  setExpressPlaying,
  expressActiveStepIdx,
  setExpressActiveStepIdx,
  expressSecondsLeft,
  setExpressSecondsLeft,
  expressPulse,
  profileActivationPercent,
  setProfileActivationPercent,
  setCurrentScreen,
  showToast,
}: ExpressScreenProps) {
  const currentStep = EXPRESS_EXERCISES[expressActiveStepIdx];

  return (
    <div className="flex flex-col gap-6 text-left" id="view-express">
      {/* Express Routine Top Banner card */}
      <div className="relative overflow-hidden rounded-3xl express-gradient p-6 text-white shadow-lg">
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 bg-[#98695e] text-white rounded-full text-[9px] uppercase tracking-wider font-extrabold mb-3">
            Modo Express
          </span>
          <h2 className="font-headline font-bold text-xl leading-tight mb-2">
            Rutina Express: Perfil Más Firme en 3 Minutos
          </h2>
          <p className="text-xs opacity-90 leading-relaxed max-w-sm mb-4">
            Contracciones isométricas breves y bombeos rápidos ideales antes de fotos, citas, reuniones o videollamadas.
          </p>

          {/* Stats row */}
          <div className="flex gap-4 items-center bg-black/20 backdrop-blur-md p-2.5 rounded-xl text-[10px] sm:text-xs">
            <span className="flex items-center gap-1 text-white">⏱ 03:00 TOTAL</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-white">⚡ ALTA INTENSIDAD</span>
          </div>
        </div>

        {/* Absolute glowing shapes */}
        <div className="absolute right-[-30px] top-[-30px] w-48 h-48 rounded-full bg-[#a6cfc6]/20 blur-3xl" />
      </div>

      {/* Simulated Live counter stage */}
      <div className="bg-[#1a1c1b] rounded-3xl p-5 text-white shadow-lg relative overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Dynamic workout steps display */}
        <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden mb-4 border border-[#414846] relative">
          <img
            src={currentStep.image}
            alt={currentStep.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              expressPulse ? 'opacity-95 scale-[1.01]' : 'opacity-85'
            }`}
          />

          {/* Visual pulse halo when running */}
          {expressPlaying && (
            <div className="absolute top-3 right-3 bg-[#ba1a1a] text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 animate-pulse">
              <span className="w-1.5 h-1.5 bg-white rounded-full" /> EN DIRECTO
            </div>
          )}
        </div>

        <span className="text-[10px] text-[#a6cfc6] uppercase font-bold tracking-widest block mb-1">
          Ejercicio {expressActiveStepIdx + 1} de {EXPRESS_EXERCISES.length}
        </span>
        <h4 className="font-headline font-bold text-md text-[#ffffff] mb-1">
          {currentStep.title}
        </h4>
        <p className="text-xs text-[#c0c8c5] mb-4 max-w-sm leading-relaxed">
          {currentStep.instructions}
        </p>

        {/* Timer wheel layout */}
        <div className="relative w-32 h-32 rounded-full border-4 border-[#3d635c]/30 flex flex-col items-center justify-center mb-6">
          <span className="text-3xl font-headline font-black text-white">
            {Math.floor(expressSecondsLeft / 60)}:
            {(expressSecondsLeft % 60).toString().padStart(2, '0')}
          </span>
          <span className="text-[9px] text-[#c0c8c5] uppercase tracking-wider mt-0.5">
            Segundos restantes
          </span>

          {/* Active vector indicator circle */}
          <div
            className="absolute inset-[3px] rounded-full border-2 border-dashed border-[#a6cfc6]/40 animate-[spin_10s_linear_infinite]"
            style={{ animationPlayState: expressPlaying ? 'running' : 'paused' }}
          />
        </div>

        {/* Controls bar */}
        <div className="flex gap-3 w-full max-w-xs font-semibold">
          <button
            onClick={() => {
              setExpressPlaying(false);
              setExpressActiveStepIdx(0);
              setExpressSecondsLeft(EXPRESS_EXERCISES[0].durationSec);
              showToast('Rutina Express reiniciada.');
            }}
            className="flex-1 py-2.5 rounded-full border border-[#717976] hover:bg-white/5 text-xs font-semibold cursor-pointer text-white"
          >
            Reiniciar
          </button>
          <button
            onClick={() => {
              setExpressPlaying((p) => !p);
              showToast(
                expressPlaying ? 'Rutina pausada.' : '▶ Rutina Express iniciada. ¡A entrenar!'
              );
            }}
            className={`flex-1 py-2.5 rounded-full text-xs font-bold shadow-md cursor-pointer flex items-center justify-center gap-1 ${
              expressPlaying
                ? 'bg-[#ba1a1a] text-white hover:bg-red-700 font-bold'
                : 'bg-[#3d635c] text-white hover:bg-[#274d47] font-bold'
            }`}
          >
            {expressPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-white" />}
            {expressPlaying ? 'Pausar' : 'Comenzar'}
          </button>
        </div>
      </div>

      {/* Static list of Express sequence */}
      <div>
        <h4 className="font-headline font-bold text-base text-[#3d635c] mb-3 px-1">
          Secuencia Flash de la Rutina
        </h4>
        <div className="space-y-3">
          {EXPRESS_EXERCISES.map((expExe, idx) => {
            const isActive = expressActiveStepIdx === idx;
            return (
              <div
                key={expExe.id}
                onClick={() => {
                  setExpressActiveStepIdx(idx);
                  setExpressSecondsLeft(expExe.durationSec);
                  setExpressPlaying(false);
                  showToast(`Cargado: ${expExe.title}`);
                }}
                className={`p-3.5 bg-white rounded-2xl border transition-all flex justify-between items-center cursor-pointer hover:border-[#3d635c]/50 ${
                  isActive
                    ? 'border-[#3d635c] ring-1 ring-[#3d635c]/20 bg-[#3d635c]/[0.01]'
                    : 'border-[#eeeeec]'
                }`}
              >
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden border border-[#eeeeec] flex-shrink-0">
                    <img src={expExe.image} alt={expExe.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <h5 className="font-bold text-xs text-[#1a1c1b] leading-tight">
                      {expExe.title}
                    </h5>
                    <p className="text-[11px] text-[#6b5c4f] mt-0.5">{expExe.description}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#3d635c] font-black bg-[#eeeeec] px-2 py-0.5 rounded">
                  ⏱ {expExe.duration}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Jawline status validator card */}
      <div className="bg-[#f3f4f2] p-5 rounded-3xl border border-[#eeeeec] text-left">
        <h5 className="font-headline font-semibold text-xs text-[#3d635c] uppercase tracking-wider block mb-1">
          Estado del Perfil
        </h5>

        <div className="flex items-baseline gap-2.5 mb-2">
          <span className="text-3xl font-headline font-black text-[#3d635c] leading-none">
            {profileActivationPercent}%
          </span>
          <span className="text-xs font-semibold text-[#6b5c4f]">Activado</span>
        </div>

        <div className="h-2 w-full bg-white rounded-full overflow-hidden mb-3">
          <div
            className="h-full bg-[#3d635c] rounded-full transition-all duration-500"
            style={{ width: `${profileActivationPercent}%` }}
          />
        </div>

        <p className="text-[11px] text-[#6b5c4f] leading-normal opacity-90 mb-3">
          {profileActivationPercent < 100
            ? 'Realiza la rutina express de 3 minutos para contraer las fibras del platisma e incrementar la turgencia del perfil hasta el 100% de activación.'
            : '🏆 ¡Enhorabuena! Tu contorno facial se encuentra al 100% de activación celular. Listo para fotos y videollamadas.'}
        </p>

        {profileActivationPercent < 100 && (
          <button
            onClick={() => {
              setProfileActivationPercent(100);
              showToast('🎯 Masaje drenaje re-analizado. Perfil activado al 100%.');
            }}
            className="bg-white hover:bg-[#eeeeec] text-[#3d635c] border border-[#3d635c] font-bold text-[10px] px-3.5 py-1.5 rounded-full cursor-pointer uppercase transition-transform active:scale-95"
          >
            Escanear Perfil Ahora
          </button>
        )}
      </div>

      {/* Pro Tip Card */}
      <div className="p-5 bg-[#7c5147]/5 border border-[#7c5147]/20 rounded-3xl text-left">
        <div className="flex items-center gap-1.5 text-[#7c5147] mb-2 font-bold text-xs">
          💡 Tip Pro Fisionómico
        </div>
        <p className="text-[11px] text-[#643c33] leading-relaxed">
          Bebe un sorbo de agua sumamente fría antes de empezar para contraer por vasetemperatura los vasos sanguíneos capilares y acelerar la desinflamación linfática profunda subcutánea.
        </p>
      </div>

      {/* Return action button */}
      <button
        onClick={() => setCurrentScreen('classes')}
        className="w-full py-4 bg-[#3d635c] hover:bg-[#274d47] text-white font-bold rounded-full text-xs shadow-md uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer text-center"
      >
        Volver al Protocolo Principal
      </button>
    </div>
  );
}
