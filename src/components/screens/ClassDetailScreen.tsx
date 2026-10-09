import { Play, Pause, Clock, ShieldCheck } from 'lucide-react';
import { Screen, DayClass } from '../../types';
import AnatomyHighlight from '../AnatomyHighlight';

interface ClassDetailScreenProps {
  activeClass: DayClass;
  classVideoPlaying: boolean;
  setClassVideoPlaying: (playing: boolean | ((p: boolean) => boolean)) => void;
  classVideoProgress: number;
  onCompleteActiveDay: () => void;
  setCurrentScreen: (screen: Screen) => void;
}

export default function ClassDetailScreen({
  activeClass,
  classVideoPlaying,
  setClassVideoPlaying,
  classVideoProgress,
  onCompleteActiveDay,
  setCurrentScreen,
}: ClassDetailScreenProps) {
  return (
    <div className="flex flex-col gap-5 text-left" id="view-class-detail">
      {/* Context title section */}
      <div>
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="bg-[#3d635c]/15 text-[#3d635c] text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
            {activeClass.phase}
          </span>

          <span className="text-[11px] text-[#6b5c4f] flex items-center gap-1">
            ⏱ ~ {activeClass.duration} total
          </span>
        </div>
        <h2 className="font-headline font-black text-xl text-[#3d635c] leading-tight mb-2">
          Día {activeClass.dayNum} — {activeClass.title}
        </h2>
      </div>

      {/* Video player panel */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#1a1c1b] border border-[#e2e3e1] shadow-md group">
        {activeClass.videoUrl ? (
          <iframe
            src={activeClass.videoUrl}
            className="w-full h-full border-0 absolute inset-0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={activeClass.title}
          />
        ) : (
          <>
            <img
              src={activeClass.videoUrlPlaceholder}
              alt="Miniatura de la clase de yoga facial"
              className={`w-full h-full object-cover transition-all ${
                classVideoPlaying ? 'opacity-85' : 'opacity-70 group-hover:scale-105 duration-700'
              }`}
            />

            {/* Play symbol block overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setClassVideoPlaying((p) => !p)}
                className="w-16 h-16 rounded-full bg-[#3d635c]/95 hover:bg-[#274d47] text-white flex items-center justify-center shadow-xl active:scale-90 transition-all cursor-pointer z-10"
              >
                {classVideoPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white fill-current ml-1" />
                )}
              </button>
            </div>

            {/* Simulated active scrubber progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#414846]">
              <div
                className="h-full bg-[#3d635c] shadow-[0_0_8px_#3d635c] transition-all"
                style={{ width: `${classVideoProgress}%` }}
              />
            </div>

            {/* Timing metadata capsule */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black/35 backdrop-blur-md px-3 py-1 rounded-lg text-white text-[10px]">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Tutorial en directo
              </span>
              <span>
                {classVideoPlaying ? 'Reproduciendo' : 'Pausado'} ({Math.round(classVideoProgress)}%)
              </span>
            </div>
          </>
        )}
      </div>

      {/* Clinical Objectives block */}
      <div className="bg-white rounded-3xl p-5 border border-[#eeeeec] shadow-xs">
        <div className="flex items-center gap-2 mb-2 text-[#3d635c]">
          <ShieldCheck className="w-5 h-5 flex-shrink-0" />
          <h4 className="font-headline font-semibold text-xs uppercase tracking-wider">
            Objetivo del Día
          </h4>
          {activeClass.tip && (
            <span className="ml-auto bg-[#f4dfce] text-[#7c5147] text-[8px] font-bold px-1.5 py-0.5 rounded">
              Tip Pro
            </span>
          )}
        </div>
        <p className="text-xs text-[#6b5c4f] leading-relaxed">{activeClass.objective}</p>
        {activeClass.tip && <p className="text-[10px] text-[#7c5147] italic mt-2">💡 {activeClass.tip}</p>}
      </div>

      {/* Exercises equipment cards details panel */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3.5 bg-white border border-[#eeeeec] rounded-2xl shadow-xs">
          <span className="text-[10px] text-[#6b5c4f] font-bold uppercase tracking-wider block mb-1">
            Dificultad
          </span>
          <span className="bg-[#a6cfc6]/20 text-[#3d635c] text-xs font-extrabold px-2 py-0.5 rounded-full">
            {activeClass.difficulty}
          </span>
        </div>
        <div className="p-3.5 bg-white border border-[#eeeeec] rounded-2xl shadow-xs">
          <span className="text-[10px] text-[#6b5c4f] font-bold uppercase tracking-wider block mb-1">
            Equipo
          </span>
          <span className="text-xs font-semibold text-[#1a1c1b]">{activeClass.equipment}</span>
        </div>
      </div>

      {/* Breakdown exercise tasks */}
      <h4 className="font-headline font-bold text-base text-[#3d635c] px-1 mt-1">
        Ejercicios Incluidos
      </h4>

      {activeClass.exercises && activeClass.exercises.length > 0 ? (
        <div className="flex flex-col gap-3">
          {activeClass.exercises.map((exe) => (
            <div
              key={exe.number}
              className="p-4 bg-white border border-[#eeeeec] rounded-2xl shadow-xs text-left"
            >
              <div className="flex gap-3 items-start">
                <span className="w-7 h-7 rounded-lg bg-[#557c74]/10 text-[#3d635c] flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {exe.number}
                </span>
                <div className="flex-1">
                  <div className="flex justify-between items-center gap-2 flex-wrap">
                    <h5 className="font-bold text-xs sm:text-sm text-[#1a1c1b]">{exe.title}</h5>
                    {exe.duration && (
                      <span className="text-[10px] font-mono text-[#717976] bg-[#eeeeec]/50 px-2 py-0.5 rounded">
                        ⏱ {exe.duration}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#6b5c4f] mt-1 mb-2">{exe.description}</p>

                  {/* Bullet instructions checklist */}
                  {exe.bullets && (
                    <ul className="space-y-1 mt-1 border-t border-[#eeeeec]/50 pt-2 text-[10px] text-[#414846]">
                      {exe.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex gap-1.5 items-start">
                          <span className="text-[#3d635c] select-none font-bold">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {exe.muscleFocus && (
                    <div className="text-[10px] text-[#3d635c] font-semibold mt-2.5 flex items-center gap-1">
                      🎯 Mapeo muscular:{' '}
                      <span className="italic font-normal text-[#1a1c1b]">{exe.muscleFocus}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 text-center text-xs text-[#717976] border border-dashed rounded-2xl bg-white">
          Los ejercicios detallados para esta lección están disponibles en su totalidad. Consulta el vídeo tutorial interactivo o contacta con soporte para dudas.
        </div>
      )}

      {/* Interactive Anatomical Reference drawer */}
      <AnatomyHighlight />

      {/* Bottom Actions Row elements */}
      <div className="flex flex-col sm:flex-row gap-3 border-t border-[#eeeeec] pt-5">
        <button
          onClick={() => setCurrentScreen('classes')}
          className="flex-1 py-3 border-2 border-[#3d635c] text-[#3d635c] font-bold rounded-full text-xs hover:bg-[#3d635c]/5 cursor-pointer text-center flex items-center justify-center gap-1"
        >
          Volver al Plan
        </button>
        <button
          onClick={onCompleteActiveDay}
          className="flex-1 py-3 bg-[#3d635c] text-white hover:bg-[#274d47] font-bold rounded-full text-xs shadow-md cursor-pointer text-center flex items-center justify-center gap-1.5"
        >
          <ShieldCheck className="w-4 h-4" /> Marcar como Visto
        </button>
      </div>
    </div>
  );
}
