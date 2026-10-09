import { useState } from 'react';
import { Target, Shield, HeartPulse, Sparkles } from 'lucide-react';

interface Muscle {
  id: string;
  name: string;
  latinName: string;
  description: string;
  function: string;
  tip: string;
  color: string;
  svgHighlight: string; // Describes focus area details
}

const MUSCLES: Muscle[] = [
  {
    id: 'platisma',
    name: 'Músculo Platisma',
    latinName: 'Platysma Myoides',
    description: 'Una lámina muscular muy ancha y delgada que recubre la parte anterior del cuello. Es la "faja" de contorno natural del cuello.',
    function: 'Sostiene la caja subcutánea del cuello. Su debilitamiento provoca el descolgamiento clásico en "cuello de pavo".',
    tip: 'El ejercicio del "Beso al techo" estira y contrae directamente las fibras del platisma.',
    color: '#3d635c',
    svgHighlight: 'M70 120 C 70 160, 130 160, 130 120 C 130 180, 70 180, 70 120'
  },
  {
    id: 'masetero',
    name: 'Músculo Masetero',
    latinName: 'Musculus Masseter',
    description: 'El principal músculo de la masticación. Guarda una inmensa tensión debido al estrés cotidiano y el bruxismo.',
    function: 'Eleva la mandíbula inferior. Su hipertrofia o tensión excesiva altera el ángulo de perfil y ensancha la mandíbula baja.',
    tip: 'El masaje manual del Día 1 libera la fascia del masetero aliviando la fatiga nocturna.',
    color: '#7c5147',
    svgHighlight: 'M 140 100 A 15 15 0 1 1 140 70'
  },
  {
    id: 'milohioideo',
    name: 'Suelo de la Boca',
    latinName: 'M. Mylohyoideus & Digastricus',
    description: 'Los músculos suprahioideos que constituyen la base física sobre la que reposa la lengua.',
    function: 'Elevan el hueso hioides e impulsan la deglución. Son críticos para evitar el descolgamiento graso del submentón.',
    tip: 'Presiona la lengua contra el paladar con fuerza durante 5 segundos para endurecer este soporte al instante.',
    color: '#98695e',
    svgHighlight: 'M 90 90 A 20 20 0 1 1 110 90'
  },
  {
    id: 'esternocleido',
    name: 'Esternocleidomastoideo',
    latinName: 'M. Stermocleidomastoideus',
    description: 'Los potentes pilares ubicados a ambos lados del cuello, encargados de la rotación y flexión cervical.',
    function: 'Sostiene el equilibrio del cráneo. Si tu cabeza se desplaza al frente, este músculo se fatiga y presiona la linfa cervical.',
    tip: 'Estíralo inclinando la cabeza a un hombro y bajando la clavícula opuesta.',
    color: '#557c74',
    svgHighlight: 'M 120 120 L 140 180 M 80 120 L 60 180'
  }
];

export default function AnatomyHighlight() {
  const [selectedMuscle, setSelectedMuscle] = useState<Muscle>(MUSCLES[0]);

  return (
    <div className="bg-white rounded-2xl p-5 border border-[#eeeeec] shadow-xs">
      <div className="flex items-center gap-2 mb-4">
        <Target className="text-[#3d635c] w-5 h-5" />
        <h3 className="font-headline font-semibold text-base text-[#3d635c]">
          Exploración de la Musculatura Facial
        </h3>
      </div>

      <p className="text-xs text-[#6b5c4f] mb-4">
        Haz clic en cada área del diagrama médico para entender su función clínica y cómo tu plan de 21 días lo fortalece:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        {/* Interactive Medical Illustration */}
        <div className="relative flex flex-col items-center justify-center bg-[#f3f4f2] rounded-xl p-4 border border-[#e2e3e1]">
          {/* Main SVG Anatomy Layout */}
          <svg
            viewBox="0 0 200 200"
            className="w-40 h-40 md:w-48 md:h-48 drop-shadow-md"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Soft Gray Head contour */}
            <path
              d="M100 20 C60 20, 50 60, 50 90 C50 120, 70 140, 100 140 C130 140, 150 120, 150 90 C150 60, 140 20, 100 20 Z"
              fill="#e2e3e1"
              stroke="#c0c8c5"
              strokeWidth="1.5"
            />
            {/* Neck contour */}
            <path
              d="M80 140 L70 180 L130 180 L120 140 Z"
              fill="#dadad8"
              stroke="#c0c8c5"
              strokeWidth="1.5"
            />

            {/* Mapped SVG Highlighted Muscles overlay */}
            {/* 1. Platisma Layer */}
            <path
              d="M75 130 C75 140, 125 140, 125 130 L130 175 L70 175 Z"
              fill={selectedMuscle.id === 'platisma' ? '#3d635c' : '#717976'}
              opacity={selectedMuscle.id === 'platisma' ? '0.85' : '0.25'}
              className="transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedMuscle(MUSCLES[0])}
            />

            {/* 2. Suelo de la Boca (Milohioideo) */}
            <path
              d="M75 110 C75 125, 125 125, 125 110 C125 130, 75 130, 75 110 Z"
              fill={selectedMuscle.id === 'milohioideo' ? '#98695e' : '#717976'}
              opacity={selectedMuscle.id === 'milohioideo' ? '0.85' : '0.25'}
              className="transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedMuscle(MUSCLES[2])}
            />

            {/* 3. Maseteros (Left and Right jaw cheekbones) */}
            <rect
              x="62"
              y="90"
              width="14"
              height="25"
              rx="4"
              transform="rotate(-15 62 90)"
              fill={selectedMuscle.id === 'masetero' ? '#7c5147' : '#717976'}
              opacity={selectedMuscle.id === 'masetero' ? '0.85' : '0.25'}
              className="transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedMuscle(MUSCLES[1])}
            />
            <rect
              x="124"
              y="90"
              width="14"
              height="25"
              rx="4"
              transform="rotate(15 124 90)"
              fill={selectedMuscle.id === 'masetero' ? '#7c5147' : '#717976'}
              opacity={selectedMuscle.id === 'masetero' ? '0.85' : '0.25'}
              className="transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedMuscle(MUSCLES[1])}
            />

            {/* 4. Esternocleidomastoideo lateral bars */}
            <path
              d="M73 130 L63 175 L73 175 L83 130 Z"
              fill={selectedMuscle.id === 'esternocleido' ? '#557c74' : '#717976'}
              opacity={selectedMuscle.id === 'esternocleido' ? '0.85' : '0.25'}
              className="transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedMuscle(MUSCLES[3])}
            />
            <path
              d="M127 130 L137 175 L127 175 L117 130 Z"
              fill={selectedMuscle.id === 'esternocleido' ? '#557c74' : '#717976'}
              opacity={selectedMuscle.id === 'esternocleido' ? '0.85' : '0.25'}
              className="transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedMuscle(MUSCLES[3])}
            />

            {/* Simple face details */}
            <circle cx="85" cy="70" r="2.5" fill="#a6cfc6" opacity="0.6" />
            <circle cx="115" cy="70" r="2.5" fill="#a6cfc6" opacity="0.6" />
            <path d="M96 90 L104 90" stroke="#717976" strokeWidth="1" />
            <path d="M92 110 C92 115, 108 115, 108 110" stroke="#717976" strokeWidth="1.5" fill="none" />
          </svg>

          {/* Quick selection tabs inside card overlay */}
          <div className="flex flex-wrap gap-1.5 justify-center mt-3">
            {MUSCLES.map((muscle) => (
              <button
                key={muscle.id}
                onClick={() => setSelectedMuscle(muscle)}
                className={`px-2 py-1 rounded-full text-[10px] font-medium transition-all ${
                  selectedMuscle.id === muscle.id
                    ? 'bg-[#3d635c] text-white'
                    : 'bg-white text-[#6b5c4f] hover:bg-[#eeeeec] border border-[#eeeeec]'
                }`}
              >
                {muscle.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Muscle description details */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-1.5">
            <span
              className="w-3 	h-3 rounded-full"
              style={{ backgroundColor: selectedMuscle.color }}
            />
            <h4 className="font-bold text-sm text-[#1a1c1b]">
              {selectedMuscle.name}
            </h4>
            <span className="text-[10px] font-mono text-[#717976] italic">
              ({selectedMuscle.latinName})
            </span>
          </div>

          <p className="text-xs text-[#414846] leading-relaxed">
            {selectedMuscle.description}
          </p>

          <div className="bg-[#fcfbf9] p-2 rounded-lg border border-[#e2e3e1] text-[11px] text-[#414846]">
            <strong className="text-[#7c5147]">Función:</strong> {selectedMuscle.function}
          </div>

          <div className="bg-[#f4fffb] p-2 rounded-lg border border-[#c1ebe1] text-[11px] text-[#274d47]">
            <strong className="text-[#3d635c]">Tip Clínico:</strong> {selectedMuscle.tip}
          </div>
        </div>
      </div>
    </div>
  );
}
