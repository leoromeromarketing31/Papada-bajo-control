import { Calendar, ChevronRight, Check, MessageSquare } from 'lucide-react';
import { Screen, DayClass } from '../../types';

interface ClassesScreenProps {
  daysList: DayClass[];
  completedDays: number[];
  calculatedProgressPercent: number;
  toggleDayCompleteInList: (id: number) => void;
  setActiveDayId: (id: number) => void;
  setClassVideoProgress: (progress: number) => void;
  setCurrentScreen: (screen: Screen) => void;
  setSupportModalOpen: (open: boolean) => void;
  lockedUnlockDay?: DayClass | null;
  setLockedUnlockDay?: (day: DayClass | null) => void;
  handleUnlockDayNow?: (day: DayClass) => void;
}

export default function ClassesScreen({
  daysList,
  completedDays,
  calculatedProgressPercent,
  toggleDayCompleteInList,
  setActiveDayId,
  setClassVideoProgress,
  setCurrentScreen,
  setSupportModalOpen,
}: ClassesScreenProps) {
  // Dynamic Streak / Consistency (consecutive days starting from Day 1)
  let consistencyStreak = 0;
  while (completedDays.includes(consistencyStreak + 1)) {
    consistencyStreak++;
  }

  // Dynamic Next Milestone
  const nextUncompletedDay = daysList.find((d) => !completedDays.includes(d.id));
  const nextMilestoneStr = nextUncompletedDay ? `Día ${nextUncompletedDay.id}` : '¡Completo!';

  return (
    <div className="flex flex-col gap-5 text-left animate-fade-in" id="view-classes">
      {/* Top protocol greeting summary */}
      <div className="rounded-3xl border border-[#eeeeec] bg-white p-5 shadow-xs relative overflow-hidden">
        <h3 className="font-headline font-bold text-lg text-[#3d635c] mb-1">
          Tu Plan de 21 Días
        </h3>
        <p className="text-xs text-[#6b5c4f] leading-relaxed">
          Sigue una sesión de precisión por día en orden o avanza a tu propio ritmo. Todos los vídeos están 100% desbloqueados y disponibles desde el inicio.
        </p>

        {/* Background botanical contour vector decoration */}
        <div className="absolute right-[-10px] bottom-[-20px] w-24 h-24 bg-[#3d635c]/5 rounded-full blur-xl pointer-events-none" />
      </div>

      {/* Micro stats analytics table */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white border border-[#eeeeec] p-4 rounded-3xl shadow-xs">
        <div className="flex flex-col items-center justify-center text-center p-2 border-r border-[#eeeeec]/50 last:border-0">
          <span className="text-[9px] uppercase tracking-wider text-[#6b5c4f] font-bold">Progreso Total</span>
          <span className="text-lg font-headline font-semibold text-[#3d635c] mt-0.5">
            {calculatedProgressPercent}%
          </span>
          <div className="h-1.5 w-16 bg-[#eeeeec] rounded-full overflow-hidden mt-1">
            <div className="h-full bg-[#3d635c]" style={{ width: `${calculatedProgressPercent}%` }} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center p-2 border-r border-[#eeeeec]/50 last:border-0">
          <span className="text-[9px] uppercase tracking-wider text-[#6b5c4f] font-bold">Días Completos</span>
          <span className="text-lg font-headline font-semibold text-[#3d635c] mt-0.5">
            {completedDays.length} / 21
          </span>
          <span className="text-[9px] text-[#717976] mt-0.5">Completado</span>
        </div>

        <div className="flex flex-col items-center justify-center text-center p-2 border-r border-[#eeeeec]/50 last:border-0">
          <span className="text-[9px] uppercase tracking-wider text-[#6b5c4f] font-bold">Siguiente hito</span>
          <span className="text-lg font-headline font-semibold text-[#7c5147] mt-0.5">
            {nextMilestoneStr}
          </span>
          <span className="text-[9px] text-[#717976] mt-0.5">Hito de fase</span>
        </div>

        <div className="flex flex-col items-center justify-center text-center p-2 last:border-0">
          <span className="text-[9px] uppercase tracking-wider text-[#6b5c4f] font-bold">Consistencia</span>
          <span className="text-lg font-headline font-semibold text-[#3d635c] flex items-center gap-0.5 mt-0.5">
            🔥 {consistencyStreak}
          </span>
          <span className="text-[9px] text-[#717976] mt-0.5">Días racha</span>
        </div>
      </div>

      {/* 21 Days checklist queue list */}
      <div className="flex flex-col gap-3">
        <h4 className="font-headline font-bold text-base text-[#3d635c] px-1">
          Módulos del Plan (21 Días)
        </h4>

        {daysList.map((day) => {
          const isCompleted = completedDays.includes(day.id);
          const isNextRecommended =
            !isCompleted && (day.id === 1 || completedDays.includes(day.id - 1));

          return (
            <div
              key={day.id}
              className={`bg-white rounded-2xl p-4 border border-[#eeeeec] shadow-xs hover:border-[#3d635c]/50 transition-all flex flex-col gap-3 relative ${
                isNextRecommended ? 'ring-1 ring-[#3d635c]/30 bg-[#3d635c]/[0.01]' : ''
              }`}
            >
              {/* Header line day number, title, badge context */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#557c74]/10 text-[#3d635c] flex flex-col items-center justify-center font-bold text-xs flex-shrink-0 border border-[#eeeeec]">
                    <span className="text-[9px] uppercase font-normal opacity-85">Día</span>
                    <span className="font-headline font-black leading-none">{day.dayNum}</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[9px] uppercase tracking-wider text-[#6b5c4f] font-bold">
                        {day.phase}
                      </span>
                      {isCompleted && (
                        <span className="bg-[#a6cfc6]/20 text-[#274d47] text-[8px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5 shadow-xs">
                          ✓ Completado
                        </span>
                      )}
                      {isNextRecommended && (
                        <span className="bg-[#f4dfce] text-[#7c5147] text-[8px] font-black px-1.5 py-0.5 rounded-full animate-pulse uppercase">
                          ¡Siguiente!
                        </span>
                      )}
                    </div>
                    <h5 className="font-bold text-xs sm:text-sm text-[#1a1c1b] leading-snug mt-0.5">
                      {day.title}
                    </h5>
                    <p className="text-[11px] text-[#6b5c4f] leading-snug mt-0.5 max-w-sm">
                      {day.description}
                    </p>
                  </div>
                </div>

                {/* Day manual completion checklist bubble */}
                <button
                  onClick={() => toggleDayCompleteInList(day.id)}
                  className={`w-6 h-6 rounded-full border flex items-center justify-center cursor-pointer flex-shrink-0 border-[#eeeeec] ${
                    isCompleted
                      ? 'bg-[#3d635c] border-[#3d635c] text-white'
                      : 'hover:border-[#3d635c] bg-transparent'
                  }`}
                  aria-label="Toggle completado"
                >
                  {isCompleted && <Check className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Sub-line duration, tools and interactive button action */}
              <div className="flex items-center justify-between border-t border-[#eeeeec]/60 pt-3 text-[11px] text-[#6b5c4f]">
                <div className="flex gap-2.5">
                  <span className="flex items-center gap-0.5">⏱ {day.duration}</span>
                  <span>•</span>
                  <span className="text-[10px]">
                    🛠 {day.id <= 3 ? 'Sin equipo' : 'Espejo/Gua Sha'}
                  </span>
                </div>

                {/* All modules unlocked from Day 1 */}
                <button
                  onClick={() => {
                    setActiveDayId(day.id);
                    setClassVideoProgress(0);
                    setCurrentScreen('class_detail');
                  }}
                  className="bg-[#3d635c] hover:bg-[#274d47] text-white text-[10px] font-bold px-3 py-1.5 rounded-full cursor-pointer transition-all flex items-center gap-0.5"
                >
                  Ver Clase <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Contact Support Card element */}
      <div className="bg-[#f4dfce] rounded-3xl p-5 border border-[#eeeeec]/50 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div>
          <h4 className="font-headline font-bold text-sm text-[#716155] mb-1">
            ¿Tienes dudas con los ejercicios?
          </h4>
          <p className="text-[11px] text-[#716155] leading-relaxed max-w-sm">
            Nuestros asesores expertos en fisionomía facial están activos para resolver dudas posturales de inmediato.
          </p>
        </div>
        <button
          onClick={() => setSupportModalOpen(true)}
          className="bg-[#7c5147] hover:bg-[#7c5147]/95 text-white font-bold text-[10px] px-4 py-2.5 rounded-full cursor-pointer uppercase shadow-xs flex items-center gap-1.5 self-stretch md:self-auto text-center justify-center transition-transform active:scale-95"
        >
          <MessageSquare className="w-3.5 h-3.5" /> Contactar Soporte
        </button>
      </div>
    </div>
  );
}
