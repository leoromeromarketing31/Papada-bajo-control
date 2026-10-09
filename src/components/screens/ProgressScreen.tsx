import { Camera, TrendingUp } from 'lucide-react';
import { Screen } from '../../types';
import AnatomyHighlight from '../AnatomyHighlight';

interface ProgressScreenProps {
  beforePhoto: string;
  afterPhoto: string;
  afterPhotoUploaded: boolean;
  photoSliderRatio: number;
  setPhotoSliderRatio: (ratio: number) => void;
  setSelfieGuideOpen: (open: boolean) => void;
  setCurrentScreen: (screen: Screen) => void;
}

export default function ProgressScreen({
  beforePhoto,
  afterPhoto,
  afterPhotoUploaded,
  photoSliderRatio,
  setPhotoSliderRatio,
  setSelfieGuideOpen,
  setCurrentScreen,
}: ProgressScreenProps) {
  return (
    <div className="flex flex-col gap-6 text-left" id="view-progress">
      {/* Upper checklist analysis summary */}
      <div className="rounded-3xl border border-[#eeeeec] bg-white p-5 shadow-xs">
        <div className="flex items-center gap-2 mb-2 text-[#3d635c]">
          <TrendingUp className="w-5 h-5 flex-shrink-0" />
          <h4 className="font-headline font-bold text-sm">Contorno y Evolución</h4>
        </div>
        <p className="text-xs text-[#6b5c4f] leading-relaxed">
          El método más fiable para comprobar los resultados de la reprogramación muscular platisma es la fotografía comparativa de perfil lateral.
        </p>
      </div>

      {/* Interactive Before After Comparison Slider component */}
      <div className="bg-white rounded-3xl p-5 border border-[#eeeeec] shadow-xs">
        <h5 className="font-headline font-bold text-sm text-[#3d635c] mb-2">
          Línea de Tiempo Comparativa
        </h5>
        <p className="text-[11px] text-[#6b5c4f] mb-4">
          Desliza la barra central para comparar tu estado inicial (Antes) con tu perfil actual (Después):
        </p>

        {/* Slider wrapper stage */}
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-100 border border-[#eeeeec] select-none shadow-sm">
          {/* AFTER photo layer (displays on right) */}
          <div className="absolute inset-0">
            <img
              src={
                afterPhotoUploaded
                  ? afterPhoto
                  : 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiNS9wVJBXoB1r7j9kN5rSBijJhhm5T5ptXvLRZBm2aR2_CNgV2BHpTI4A5nBFsMJO9dm9OLg1ry5myktjVT9UaSU_LgVrlnDoBOx1c4bvl1KuihJP-NLmv-OLacmKlVdJnZeTUwyNuQEwFXUfP4tRxdmlghgTRvOdehIsSSdrPGUpk0rN8iv85eIs-W9OyEkMTTaeqAWbayw9TRcOkcRREoUvyZ30ccUl4_57BUuN7KU27LmJOlKW9Wu41566Kp2hdajt9cjsjmKD'
              }
              alt="Perfil después"
              className="w-full h-full object-cover"
            />
            {/* Status label bottom right in card */}
            <span className="absolute bottom-3 right-3 bg-[#3d635c] text-white font-black text-[9px] px-2 py-0.5 rounded shadow-md select-none uppercase tracking-wider">
              Día 5 (Hoy)
            </span>
          </div>

          {/* BEFORE photo layer clipping overlay (displays on left) */}
          <div
            className="absolute inset-y-0 left-0 right-0 overflow-hidden"
            style={{ width: `${photoSliderRatio}%` }}
          >
            <img
              src={beforePhoto}
              alt="Perfil antes"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Status label bottom left */}
            <span className="absolute bottom-3 left-3 bg-[#ba1a1a] text-white font-black text-[9px] px-2 py-0.5 rounded shadow-md select-none uppercase tracking-wider">
              Análisis Inicial (Antes)
            </span>
          </div>

          {/* Sliding division bar handle trigger */}
          <div
            className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center justify-items-center"
            style={{ left: `${photoSliderRatio}%` }}
          >
            <div className="w-7 h-7 rounded-full bg-white text-[#3d635c] border border-[#eeeeec] flex items-center justify-center shadow-lg transform -translate-x-3.5 select-none font-bold text-xs">
              ↔
            </div>
          </div>

          {/* Invisible native range slider covering area to ease touch interaction */}
          <input
            type="range"
            min="0"
            max="100"
            value={photoSliderRatio}
            onChange={(e) => setPhotoSliderRatio(Number(e.target.value))}
            className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
          />
        </div>

        {/* Timeline action buttons */}
        <div className="flex gap-2.5 mt-4">
          <button
            onClick={() => setSelfieGuideOpen(true)}
            className="w-full py-3 bg-[#3d635c] hover:bg-[#274d47] text-white font-bold rounded-full text-xs shadow-md cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Camera className="w-4 h-4" /> Tomar Foto Comparativa
          </button>
        </div>

        {afterPhotoUploaded && (
          <p className="text-[10px] text-[#3d635c] text-center mt-3 font-semibold">
            ✓ Foto comparativa cargada. Arrastra la barra para calibrar la reducción de tu papada baja.
          </p>
        )}
      </div>

      {/* Medical analysis diagnostic result details inside timeline focus */}
      <AnatomyHighlight />

      {/* Bottom button anchor back to days */}
      <button
        onClick={() => setCurrentScreen('classes')}
        className="w-full py-4 bg-white hover:bg-[#eeeeec] text-[#3d635c] border border-[#3d635c] font-black rounded-full text-xs shadow-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
      >
        Ir a Mi Plan de 21 Días
      </button>
    </div>
  );
}
