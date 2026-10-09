import { RotateCcw, Sparkles } from 'lucide-react';
import { DIAGNOSTIC_STEPS } from '../../data';

interface DiagnosticScreenProps {
  diagnosticStepIdx: number;
  diagnosticSelected: string | null;
  setDiagnosticSelected: (val: string | null) => void;
  onBack: () => void;
  onNext: () => void;
  isAnalyzing: boolean;
}

export default function DiagnosticScreen({
  diagnosticStepIdx,
  diagnosticSelected,
  setDiagnosticSelected,
  onBack,
  onNext,
  isAnalyzing,
}: DiagnosticScreenProps) {
  const currentStep = DIAGNOSTIC_STEPS[diagnosticStepIdx];

  return (
    <div className="flex flex-col gap-5 text-left" id="view-diagnostic">
      {/* Top diagnostic progress bar */}
      <div>
        <div className="flex justify-between items-center text-[10px] text-[#6b5c4f] uppercase font-bold tracking-widest mb-1.5">
          <span>Diagnóstico de Salud Facial</span>
          <span>
            {diagnosticStepIdx + 1} de {DIAGNOSTIC_STEPS.length}
          </span>
        </div>
        <div className="h-2 w-full bg-white border border-[#eeeeec] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#3d635c] transition-all duration-300 rounded-full"
            style={{ width: `${((diagnosticStepIdx + 1) / DIAGNOSTIC_STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Active Question Panel */}
      <div className="bg-white rounded-3xl p-5 border border-[#eeeeec] shadow-xs flex flex-col">
        {/* Question Headline block */}
        <h3 className="font-headline font-bold text-lg text-[#3d635c] leading-tight mb-1.5">
          {currentStep.question}
        </h3>
        <p className="text-xs text-[#6b5c4f] mb-4">{currentStep.description}</p>

        {/* Anatomy or educational visual aids */}
        <div className="aspect-[21/9] w-full rounded-xl overflow-hidden mb-4 border border-[#e2e3e1]">
          <img
            src={currentStep.image}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            alt="Sección del diagnóstico"
          />
        </div>

        {/* Vertical question options */}
        <div className="space-y-2 mb-6">
          {currentStep.options.map((opt) => {
            const isSel = diagnosticSelected === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => setDiagnosticSelected(opt.value)}
                className={`w-full p-4 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer flex items-center justify-between active:scale-[0.99] ${
                  isSel
                    ? 'border-[#3d635c] bg-[#3d635c]/5 text-[#3d635c] ring-1 ring-[#3d635c]'
                    : 'border-[#c0c8c5]/40 hover:border-[#3d635c] text-[#1a1c1b] bg-transparent'
                }`}
              >
                <span>{opt.text}</span>
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    isSel ? 'border-[#3d635c] bg-[#3d635c]' : 'border-[#c0c8c5]'
                  }`}
                >
                  {isSel && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom buttons row */}
        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="flex-1 py-3 text-xs font-bold text-[#6b5c4f] border border-[#c0c8c5] rounded-full hover:bg-[#eeeeec] cursor-pointer"
          >
            Anterior
          </button>
          <button
            onClick={onNext}
            className="flex-1 py-3 bg-[#3d635c] text-white hover:bg-[#274d47] text-xs font-bold rounded-full shadow-md cursor-pointer text-center"
          >
            Siguiente
          </button>
        </div>
      </div>

      {/* Diagnostic safety warning */}
      <p className="text-[10px] text-[#717976] flex items-center gap-1 justify-center">
        🛡️ Tus respuestas están protegidas y solo se usan para calcular tu protocolo de contracción física.
      </p>

      {/* Medical analysis loader popup */}
      {isAnalyzing && (
        <div className="fixed inset-0 z-50 bg-[#1a1c1b]/80 backdrop-blur-md flex flex-col items-center justify-center p-6 text-white">
          <div className="w-16 h-16 rounded-full bg-[#3d635c] text-[#a6cfc6] flex items-center justify-center shadow-lg relative mb-4">
            <RotateCcw className="w-8 h-8 animate-spin" />
            <Sparkles className="absolute top-1 right-1 w-4 h-4 text-[#f4dfce] animate-bounce" />
          </div>
          <h4 className="font-headline font-bold text-lg mb-1.5">Modelando tu protocolo clínico...</h4>
          <p className="text-xs text-[#c0c8c5] text-center max-w-xs animate-pulse">
            Unificando nivel de tensión masseter, turgencia cervical, flacidez platismal y simetría de retención linfática.
          </p>
        </div>
      )}
    </div>
  );
}
