import { DiagnosticStep, DayClass } from './types';

export const DIAGNOSTIC_STEPS: DiagnosticStep[] = [
  {
    question: '¿Dónde notas más la papada?',
    description: 'Para diseñar tu protocolo de yoga facial de precisión clínica, necesitamos entender tus objetivos actuales.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
    options: [
      { text: 'Debajo del mentón', value: 'menton' },
      { text: 'En el perfil lateral', value: 'perfil' },
      { text: 'En el cuello', value: 'cuello' },
      { text: 'En fotos y videollamadas', value: 'fotos' },
      { text: 'En todas las anteriores', value: 'todas' }
    ]
  },
  {
    question: '¿Cuál es tu principal objetivo facial?',
    description: 'Cada persona tiene zonas que requieren mayor estimulación de drenaje o contracción muscular.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop',
    options: [
      { text: 'Definir mi línea mandibular', value: 'definir' },
      { text: 'Reducir la flacidez del cuello', value: 'flacidez' },
      { text: 'Desinflamar y eliminar líquidos acumulados', value: 'desinflamar' },
      { text: 'Mejorar postura en el trabajo (cuello de texto)', value: 'postura' }
    ]
  },
  {
    question: '¿Sueles amanecer con la cara hinchada?',
    description: 'La hinchazón matutina es un síntoma directo de estancamiento linfático que altera el contorno de la papada.',
    image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=600&auto=format&fit=crop',
    options: [
      { text: 'Sí, casi todas las mañanas', value: 'si_frecuente' },
      { text: 'Solo si ceno tarde o duermo mal', value: 'si_ocasional' },
      { text: 'Rara vez', value: 'raramente' },
      { text: 'Nunca', value: 'nunca' }
    ]
  },
  {
    question: '¿Qué herramientas utilizas en tu cuidado diario?',
    description: 'Podemos adaptar tu plan para incluir masajes manuales tradicionales o accesorios de estimulación.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop',
    options: [
      { text: 'Ninguna (prefiero masajes manuales)', value: 'manos' },
      { text: 'Gua Sha o rodillo de cuarzo/jade', value: 'guasha' },
      { text: 'Crema reafirmante / Aceites especializados', value: 'cremas' },
      { text: 'Ganas de empezar de cero', value: 'ninguna' }
    ]
  },
  {
    question: '¿Cómo calificarías tu postura frente a las pantallas?',
    description: 'La flexión continua del cuello ("text-neck") acorta la platisma y favorece la aparición prematura de la papada.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX1a1pi33-alHTHxz0OQrtbq20ekeK7tcCnqEJAqFZpOhpHlN-lvYygP_zu2kmeukY8qYoWwr82NT39wjoLalZesWnC-ZHKFntsS1Xt51SrZhFZur3zfC5PT7QmUJzaXR2Snxux1ZMi9lr1MGF7ytiwlI1HqUhTHMY2PmdqoXU6DqsKokdwlulgMcXNLnSH1srgcBcMjB9pI2H7wo49HUDBuZO5pVgHJirIRf-ecX0k5szd_9BD4KnfFAdEr75kuuw_tVUL4UEntQ3',
    options: [
      { text: 'Mala: paso horas con la barbilla pegada al pecho', value: 'mala_postura' },
      { text: 'Regular: me doblo con frecuencia pero intento corregirme', value: 'regular' },
      { text: 'Excelente: mantengo mis pantallas a la altura de los ojos', value: 'excelente' }
    ]
  }
];

export const INITIAL_DAYS: DayClass[] = [
  {
    id: 1,
    dayNum: 1,
    phase: 'Fase 1',
    title: 'Desbloqueo de cuello y mandíbula',
    description: 'Elimina la tensión acumulada y prepara los músculos para el drenaje.',
    duration: '8 min',
    durationSeconds: 480,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL',
    videoUrl: 'https://player.vimeo.com/video/1194060892',
    objective: 'Preparar cuello, mentón y mandíbula para empezar el protocolo sin tensión. Buscamos liberar la fascia acumulada por malas posturas digitales y estrés tensional.',
    difficulty: 'Principiante',
    equipment: 'Ninguno / Espejo',
    tip: 'Mantén los hombros relajados y la espalda recta. La tensión en los hombros reduce el flujo de drenaje linfático.',
    exercises: [
      {
        number: '01',
        title: 'Respiración facial consciente',
        description: 'Relajación profunda de la base de la lengua y suelo bucal.',
        duration: '2 min',
        bullets: [
          'Siéntate con la espalda recta y los hombros relajados.',
          'Inhala profundamente por la nariz expandiendo el abdomen.',
          'Al exhalar por la boca, relaja la mandíbula dejando caer los labios entreabiertos.',
          'Siente cómo la base de la lengua pierde tensión acumulada.'
        ],
        muscleFocus: 'Músculo Milohioideo y base lingual'
      },
      {
        number: '02',
        title: 'Relajación de mandíbula',
        description: 'Apertura lateral suave y controlada para soltar la articulación temporomandibular.',
        duration: '3 min',
        bullets: [
          'Coloca la punta de los dedos índice y corazón sobre la articulación delante del oído.',
          'Abre la boca suavemente en forma de "O" vertical alargada.',
          'Mueve lentamente la mandíbula inferior hacia la derecha y luego hacia la izquierda.',
          'Haz 10 repeticiones lentas sin forzar ni provocar chasquidos.'
        ],
        muscleFocus: 'Músculo Masetero'
      },
      {
        number: '03',
        title: 'Estiramiento lateral de cuello',
        description: 'Liberación miofascial del músculo esternocleidomastoideo.',
        duration: '3 min',
        bullets: [
          'Inclina la cabeza hacia el hombro derecho y gira la barbilla ligeramente hacia arriba.',
          'Coloca tu mano izquierda sobre la clavícula contraria aplicando una leve presión de anclaje hacia abajo.',
          'Siente un estiramiento profundo y elegante en la pared lateral del cuello.',
          'Mantén 45 segundos y repite suavemente en el lado opuesto.'
        ],
        muscleFocus: 'Esternocleidomastoideo y Platisma'
      }
    ]
  },
  {
    id: 2,
    dayNum: 2,
    phase: 'Fase 1',
    title: 'Drenaje linfático inicial',
    description: 'Técnicas suaves para reducir la retención de líquidos en la zona submentoniana.',
    duration: '10 min',
    durationSeconds: 600,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoYCQMT4p4F10KcCofEyCNZJUSH9Ow-_3LgmqJ7c0sVxfHFk8KIjqh40RJVbU0_RF0ZMJaMyqu6X92-7sPoVJ5hJjHHyEN_Qo277QjczGV_qVlIchFDYwQYSaEVxEdc99bAKgIbfkOF37W0kKFFtLlFOJr9ssIB3HnQZJ3RpSHgGSPUWTPZ4MeAyvqGCgMybo7YZQ-QhhofdEEQ7RPfiYM-UzrwqX6URIafm9wq5utzYPHlRW2JdGlnBFU2Bzje31qTvP6Wj6bNEYs',
    objective: 'Estimular los ganglios linfáticos submentonianos y cervicales para acelerar la eliminación de toxinas e inflamación de la papada baja.',
    difficulty: 'Principiante',
    equipment: 'Aceite facial ligero u crema',
    tip: 'El drenaje linfático requiere un toque sumamente suave, como acariciar un melocotón. Una presión alta colapsará los finos capilares linfáticos impidiendo el drenaje.',
    exercises: [
      {
        number: '01',
        title: 'Bombeo de la base clavicular',
        description: 'Preparación de las terminales linfáticas mayores.',
        duration: '2 min',
        bullets: [
          'Cruza tus manos sobre el pecho y coloca las yemas de tus dedos en las depresiones justo encima de las clavículas.',
          'Realiza bombeos circulares lentos y rítmicos presionando suavemente hacia abajo y hacia adentro.',
          'Haz 20 bombeos lentos en sintonía con tu respiración habitual.'
        ],
        muscleFocus: 'Términus Linfático Mayor'
      },
      {
        number: '02',
        title: 'Deslizamiento sublingual suave',
        description: 'Barrido del mentón hacia las orejas.',
        duration: '4 min',
        bullets: [
          'Forma una "V" con tus dedos índice y corazón de ambas manos.',
          'Apóyalos en el centro de tu barbilla, justo debajo del labio inferior y por debajo de la mandíbula.',
          'Desliza los dedos suavemente a lo largo del contorno óseo hasta el lóbulo de la oreja.',
          'Aplica unas gotas de aceite antes para lubricar el movimiento y evitar arrugar la piel.'
        ],
        muscleFocus: 'Ganglios Submentonianos y Submandibulares'
      },
      {
        number: '03',
        title: 'Canalización cervical descendente',
        description: 'Transporte de linfa para su absorción definitiva.',
        duration: '4 min',
        bullets: [
          'Usa las palmas completas de ambas manos apoyándolas a los lados del cuello, debajo del lóbulo auricular.',
          'Desliza rítmicamente las manos con caricias descendentes hacia el inicio del pecho y clavícula.',
          'Repite 15 veces para asegurar que toda el agua acumulada bajo el mentón ruede hacia abajo.'
        ],
        muscleFocus: 'Cadena Linfática Cervical Superficial'
      }
    ]
  },
  {
    id: 3,
    dayNum: 3,
    phase: 'Fase 1',
    title: 'Activación del músculo platisma',
    description: 'Fortalecimiento de la capa muscular superficial para tensar la piel.',
    duration: '12 min',
    durationSeconds: 720,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL',
    objective: 'Reeducar y tonificar el músculo platisma, que actúa como una faja elástica natural en el frente de tu cuello protegiéndolo de la caída por gravedad.',
    difficulty: 'Intermedio',
    equipment: 'Espejo',
    tip: 'Intenta no fruncir el ceño ni arrugar los ojos mientras contraes el cuello. El esfuerzo debe localizarse exclusivamente desde los labios hacia abajo.',
    exercises: [
      {
        number: '01',
        title: 'Expansión de la sonrisa forzada',
        description: 'Tensión isométrica controlada del cuello mediante la sonrisa invertida.',
        duration: '4 min',
        bullets: [
          'Frente al espejo, estira las comisuras de los labios hacia afuera y hacia abajo con fuerza.',
          'Verás que los tendones del cuello se marcan fuertemente (el platisma se contrae).',
          'Mantén esta posición de tensión durante 6 segundos y relaja completamente.',
          'Completa 3 series de 8 repeticiones.'
        ],
        muscleFocus: 'Músculo Platisma y Depresor del Ángulo de la Boca'
      },
      {
        number: '02',
        title: 'Presión lingual invertida',
        description: 'Tono en el suelo de la boca para aplanar la papada.',
        duration: '4 min',
        bullets: [
          'Coloca la lengua completamente pegada contra el paladar duro superior.',
          'Presiona toda la superficie de la lengua contra el techo bucal con fuerza mientras respiras con normalidad.',
          'Pega la barbilla ligeramente hacia tu pecho para maximizar la contracción sublingual.',
          'Siente cómo el área de la papada sube visiblemente hacia arriba y se tensa.'
        ],
        muscleFocus: 'Suprahioideos: Digástrico y Milohioideo'
      },
      {
        number: '03',
        title: 'El beso al infinito',
        description: 'Estiramiento concéntrico de las fibras anteriores del cuello.',
        duration: '4 min',
        bullets: [
          'Lleva la cabeza ligeramente hacia atrás mirando al techo.',
          'Proyecta tus labios hacia adelante con fuerza como si fueras a dar un beso exagerado.',
          'Siente el fabuloso estiramiento desde la base del pecho hasta debajo de tu mentón.',
          'Haz este estiramiento de forma sostenida 10 segundos, relaja, y repite 6 veces.'
        ],
        muscleFocus: 'Fibras anteriores del Platisma'
      }
    ]
  },
  {
    id: 4,
    dayNum: 4,
    phase: 'Fase 1',
    title: 'Postura y alineación cervical',
    description: 'La base de una mandíbula definida comienza con la posición de tu cuello.',
    duration: '15 min',
    durationSeconds: 900,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL',
    objective: 'Corregir la postura adosando las vértebras cervicales para que el mentón descanse de forma natural sin sobrecarga en la base tensional de la mandíbula.',
    difficulty: 'Intermedio',
    equipment: 'Una pared lisa donde apoyarte',
    tip: 'Un milímetro de desplazamiento de tu cabeza hacia adelante añade kilo y medio de presión inútil sobre tu columna cervical. ¡Alineación es salud!',
    exercises: [
      {
        number: '01',
        title: 'El doble mentón controlado (Chin Tuck)',
        description: 'Deslizamiento posterior de la cabeza.',
        duration: '5 min',
        bullets: [
          'Apoya tu espalda y cabeza erguida relajadamente frente a ti.',
          'Desliza tu cabeza hacia atrás, como si quisieras sacar una papada gigante a propósito.',
          'Mantén tus ojos y barbilla alineados horizontalmente al suelo (no mires abajo).',
          'Siente cómo se estira la nuca. Mantén 5 segundos y vuelve a la posición central.'
        ],
        muscleFocus: 'Músculos Flexores Profundos del Cuello'
      },
      {
        number: '02',
        title: 'Estiramiento del Gato Esfinge',
        description: 'Alineación de hombros y liberación de trapecio superior.',
        duration: '5 min',
        bullets: [
          'Apoya los antebrazos sobre una mesa alta, manteniendo la espalda neutra.',
          'Lleva el pecho hacia adelante mientras empujas los hombros hacia abajo y atrás.',
          'Alarga el cuello hacia arriba como si un hilo tirara de la coronilla hacia el techo.',
          'Evita colapsar la nuca comprimiendo las cervicales posteriores.'
        ],
        muscleFocus: 'Trapecio Superior y Angular de la Escápula'
      },
      {
        number: '03',
        title: 'Apertura pectoral asistida',
        description: 'Liberación del pectoral para evitar la rotación interna del cuello.',
        duration: '5 min',
        bullets: [
          'Coloca un antebrazo plano sobre el marco de una puerta o pared resistente.',
          'Da un paso suave adelante con el mismo pie hasta sentir un estiramiento sutil en el pecho.',
          'Mantén el cuello alineado sin rotarlo exageradamente.',
          'Respira libremente y mantén 30 segundos de cada lado.'
        ],
        muscleFocus: 'Pectoral Mayor e Intercostales'
      }
    ]
  },
  {
    id: 5,
    dayNum: 5,
    phase: 'Fase 1',
    title: 'Masaje Gua Sha Manual',
    description: 'Esculpe los bordes de la mandíbula con tus manos.',
    duration: '10 min',
    durationSeconds: 600,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL',
    objective: 'Ejercitar la estimulación sanguínea y remover grasas/líquidos asentados aplicando fuerza contorneada táctil.',
    difficulty: 'Intermedio',
    equipment: 'Aceite facial hidratante',
    tip: 'Utiliza suficiente aceite facial antes del masaje para evitar la fricción ruda sobre la epidermis.',
    exercises: [
      {
        number: '01',
        title: 'Deslizamiento profundo en J',
        description: 'Modelado manual para el contorno de la mandíbula.',
        duration: '4 min',
        bullets: [
          'Aplica abundante crema o aceite hidratante en el cuello.',
          'Usa los nudillos de tus dedos índice y medio flexionados en forma de pinzas.',
          'Desliza desde el mentón siguiendo firmemente la línea ósea hasta la oreja.',
          'Sube dibujando una J ligera y presiona suavemente al final.'
        ],
        muscleFocus: 'Fascia Maseterina y Borde Mandibular'
      },
      {
        number: '02',
        title: 'Anclaje temporomandibular',
        description: 'Relajamiento de los puntos gatillo del bruxismo.',
        duration: '3 min',
        bullets: [
          'Coloca los dedos pulgares debajo del ángulo de la mandíbula y estabilízalos.',
          'Presiona suavemente hacia arriba mientras abres la boca de manera progresiva y controlada.',
          'Siente la descompresión mecánica de la musculatura lateral profunda.',
          'Mantén la presión moderada sin provocar dolor durante 15 segundos.'
        ],
        muscleFocus: 'Músculos Pterigoideos Medial y Lateral'
      },
      {
        number: '03',
        title: 'Drenaje de vaciado submentoniano',
        description: 'Eliminación manual del exceso de linfa circulante.',
        duration: '3 min',
        bullets: [
          'Apoya tus pulgares juntos en el centro blando debajo de tu barbilla.',
          'Desliza los pulgares horizontalmente hacia afuera, rozando el hueso, hasta el ángulo de la mandíbula.',
          'Al llegar a la oreja, baja por los laterales del cuello usando las palmas. Repite 10 veces.'
        ],
        muscleFocus: 'Conducto sublingual y ganglios cervicales superiores'
      }
    ]
  },
  {
    id: 6,
    dayNum: 6,
    phase: 'Fase 2',
    title: 'Tonificación de la Lengua',
    description: 'Ejercicios internos para elevar el suelo de la boca.',
    duration: '7 min',
    durationSeconds: 420,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL',
    objective: 'Apretar las fascias internas del paladar posterior para subir el declive mentoniano.',
    difficulty: 'Principiante',
    equipment: 'Ninguno / Espejo',
    tip: 'Tener una posición labial y lingual correcta durante el día evita la caída de la platisma facial.',
    exercises: [
      {
        number: '01',
        title: 'La ventosa lingual',
        description: 'Activador completo del suelo muscular de la boca.',
        duration: '3 min',
        bullets: [
          'Pega toda la superficie de tu lengua (punta, centro y parte posterior) contra tu paladar superior.',
          'Cierra los labios e inhala, succionando la lengua firmemente hacia arriba.',
          'Mantén esta succión durante 30 segundos sintiendo la elevación justo de la papada.',
          'Suelta provocando un sonido de clic suave al despagar.'
        ],
        muscleFocus: 'Músculo Milohioideo y Geniohioideo'
      },
      {
        number: '02',
        title: 'El limpiaparabrisas bucal',
        description: 'Fortalecimiento de las paredes bucaneras laterales.',
        duration: '2 min',
        bullets: [
          'Con la boca cerrada, presiona la punta de la lengua contra el interior de tu mejilla izquierda.',
          'Desliza la lengua dibujando un semicírculo lento por debajo de la mandíbula hacia la mejilla derecha.',
          'Regresa por la misma ruta ejerciendo firme presión constante de resistencia.',
          'Completa 12 deslizamientos controlados.'
        ],
        muscleFocus: 'Músculo Buccinador y Orbicular de los labios'
      },
      {
        number: '03',
        title: 'Estiramiento lingual descendente',
        description: 'Descompresión del hueso hioides.',
        duration: '2 min',
        bullets: [
          'Abre la boca cómodamente y saca la lengua lo máximo que puedas intentando apuntar hacia abajo.',
          'Mantén la mirada al frente sin inclinar el cuello hacia adelante.',
          'Siente una contracción isométrica intensa debajo del mentón.',
          'Sostén la tensión 5 segundos, retrae la lengua lentamente y repite 5 veces.'
        ],
        muscleFocus: 'Músculo Geniogloso e Hiogloso'
      }
    ]
  },
  {
    id: 7,
    dayNum: 7,
    phase: 'Fase 2',
    title: 'Rutina Intensiva de Contorno',
    description: 'Combinación de todos los movimientos aprendidos.',
    duration: '20 min',
    durationSeconds: 1200,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL',
    objective: 'Consolidar fuerza de contracción y estimulación linfática fluida de alta duración.',
    difficulty: 'Avanzado',
    equipment: 'Aceite facial / Crema',
    tip: 'Respira pausadamente durante toda la sesión. Retener el aire bloquea la oxigenación celular facial.',
    exercises: [
      {
        number: '01',
        title: 'La gárgara isométrica',
        description: 'Contracción estática e intensa de la base lingual.',
        duration: '5 min',
        bullets: [
          'Inclina la cabeza hacia atrás, a un ángulo cómodo de 45 grados mirando el techo.',
          'Pega la lengua al paladar y finge el gesto de tragar saliva.',
          'Notarás cómo toda la estructura submentoniana se aplana y se pega al hueso.',
          'Mantén la deglución estática durante 4 segundos y relaja lentamente.'
        ],
        muscleFocus: 'Suprahioideos e Infrahioideos'
      },
      {
        number: '02',
        title: 'Masaje de definición en gancho',
        description: 'Drenaje profundo táctil y modelaje de papada.',
        duration: '5 min',
        bullets: [
          'Flexiona tu dedo índice en forma de gancho de pirata.',
          'Usa la falange media apoyada firmemente debajo de todo tu mentón.',
          'Desliza desde el mentón hasta las orejas con ritmo lento y precisión de esculpido.',
          'Realiza 15 pases lentos de cada lado aplicando aceite ligero.'
        ],
        muscleFocus: 'Borde inferior submentoniano de la mandíbula'
      },
      {
        number: '03',
        title: 'Estiramiento de cobra facial',
        description: 'Estiramiento integral del torso con rotación mandibular.',
        duration: '10 min',
        bullets: [
          'Boca abajo en el suelo o colchoneta, elévate suavemente en posición de media cobra.',
          'Mantén los hombros lejos de las orejas.',
          'Estira el mentón hacia arriba y a la derecha sintiendo estirar la platisma izquierda.',
          'Mantén 15 segundos y repite inclinando la mirada arriba a la izquierda.'
        ],
        muscleFocus: 'Músculo Platisma anterior y tendones escalenos'
      }
    ]
  },
  {
    id: 8,
    dayNum: 8,
    phase: 'Fase 2',
    title: 'Reset Metabólico Facial',
    description: 'Activación circulatoria profunda.',
    duration: '9 min',
    durationSeconds: 540,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL',
    objective: 'Incrementar flujo celular y oxigenación localizada de la platisma.',
    difficulty: 'Principiante',
    equipment: 'Ninguno',
    tip: 'Un leve hormigueo o aumento de temperatura es totalmente normal y demuestra el retorno de nutrición capilar.',
    exercises: [
      {
        number: '01',
        title: 'Pellizcos energizantes de Jacquet',
        description: 'Estimulación circulatoria microcapilar.',
        duration: '3 min',
        bullets: [
          'Utiliza tus dedos pulgar e índice de forma perpendicular a la mandíbula.',
          'Realiza pellizcos suaves pero rápidos atrapando el tejido adiposo y soltando de inmediato.',
          'Avanza desde el centro de la barbilla hacia las sienes para oxigenar la zona.',
          'Siente cómo la piel se calienta ligeramente, señal del fluido metabólico activo.'
        ],
        muscleFocus: 'Tejido subcutáneo graso submentoniano'
      },
      {
        number: '02',
        title: 'Bombeo periauricular rítmico',
        description: 'Liberación de los ganglios de evacuación facial anterior.',
        duration: '3 min',
        bullets: [
          'Coloca tus dedos separados en forma de "V" alrededor de tus orejas.',
          'Ejerce bombeos rítmicos circulares de adentro hacia afuera de forma sutil.',
          'Hazlo con ambos lados al mismo tiempo coordinando respiraciones.',
          'Ayuda a vaciar la linfa estancada que desciende por la papada alta.'
        ],
        muscleFocus: 'Ganglios Linfáticos Parotídeos y Retroauriculares'
      },
      {
        number: '03',
        title: 'Respiración de fuego diafragmática',
        description: 'Suministro metabólico rápido de oxígeno celular.',
        duration: '3 min',
        bullets: [
          'Adopta una postura sentada erguida con las manos relajadas.',
          'Inhala y exhala rápidamente por la nariz expandiendo tu diafragma abdominal.',
          'Mantén los hombros bajos y el mentón recogido un centímetro.',
          'Este reinicio equilibra el aporte de oxígeno y reduce el cortisol celular bioquímico.'
        ],
        muscleFocus: 'Fibras musculares accesorias respiratorias'
      }
    ]
  },
  {
    id: 9,
    dayNum: 9,
    phase: 'Fase 3',
    title: 'Drenaje Avanzado',
    description: 'Técnicas de bombeo para resultados visibles.',
    duration: '12 min',
    durationSeconds: 720,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL',
    objective: 'Canalizar retención profunda por debajo de las orejas hacia extremos claviculares.',
    difficulty: 'Intermedio',
    equipment: 'Aceite facial / Crema',
    tip: 'Haz los pases siempre en sentido descendente por los laterales libres del cuello, nunca sobre la tiroides.',
    exercises: [
      {
        number: '01',
        title: 'Deslizamiento bilateral con palmas',
        description: 'Movimiento de canalización de líquidos persistentes.',
        duration: '4 min',
        bullets: [
          'Aplica una capa de aceite o emulsión hidratante.',
          'Fija una mano en el mentón y otra en la nuca de manera estable.',
          'Desliza suavemente la mano del mentón hacia abajo por el músculo esternocleidomastoideo.',
          'Siente una suave descompresión. Repite 15 veces por lado.'
        ],
        muscleFocus: 'Cadena cervical lateral y vena yugular externa'
      },
      {
        number: '02',
        title: 'Bombeo de ganglios profundos',
        description: 'Remoción de la linfa profunda de la garganta submentoniana.',
        duration: '4 min',
        bullets: [
          'Coloca las yemas de los dedos debajo del mentón en la base mandibular.',
          'Realiza 3 bombeos lentos seguidos de un deslizamiento de evacuación hacia el lateral del cuello.',
          'Mantén una presión sumamente sutil constante.'
        ],
        muscleFocus: 'Ganglios submandibulares profundos'
      },
      {
        number: '03',
        title: 'Vaciado clavicular invertido',
        description: 'Canalización definitiva de desechos linfáticos celulares.',
        duration: '4 min',
        bullets: [
          'Adosa tus manos cruzadas debajo de la base del cuello.',
          'Ejerce una tracción hacia abajo mientras elevas el mentón ligeramente.',
          'Regula pequeños bombeos en los huecos claviculares para liberar definitivamente la linfa reunida.'
        ],
        muscleFocus: 'Conducto torácico y linfático derecho'
      }
    ]
  },
  {
    id: 10,
    dayNum: 10,
    phase: 'Fase 3',
    title: 'Yoga Facial Express',
    description: 'Mantén tus resultados en menos de 10 minutos.',
    duration: '8 min',
    durationSeconds: 480,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL',
    objective: 'Reactivar contracción breve en días de alta carga laboral o viajes.',
    difficulty: 'Principiante',
    equipment: 'Ninguno',
    tip: 'Perfecta rutina rápida de activación celular ideal para realizar por las mañanas.',
    exercises: [
      {
        number: '01',
        title: 'La faja platisma express',
        description: 'Contracciones rápidas de mantenimiento celular acelerado.',
        duration: '3 min',
        bullets: [
          'Mira de frente al espejo con los dientes suavemente juntos y labios entreabiertos.',
          'Tensa los tendones cervicales rítmicamente: 1 segundo de tensión, 1 de relajación completa.',
          'Completa 20 pulsos rápidos de contracción isométrica cervical.'
        ],
        muscleFocus: 'Músculo platisma superior y hioideo'
      },
      {
        number: '02',
        title: 'El águila submentoniana',
        description: 'Elevación instantánea de la papada flácida de perfil.',
        duration: '3 min',
        bullets: [
          'Mira hacia arriba inclinando tu cuello 45 grados hacia atrás con suavidad.',
          'Coloca la punta de tu lengua en el paladar superior y sonríe amplio hacia los lados.',
          'Pega y despega la lengua rítmicamente manteniendo la mirada fija en el cielo.'
        ],
        muscleFocus: 'Músculos masetero y suprahioideos'
      },
      {
        number: '03',
        title: 'Liberación de mandíbula express',
        description: 'Suelto rápido de tensión masetera para el día a día.',
        duration: '2 min',
        bullets: [
          'Abre la boca fingiendo un bostezo sutil pero exagerado.',
          'Masajea en círculos con la punta de tus dedos la zona de unión temporomandibular.',
          'Suelta todo el aire por la boca desinflando con soplido suave relajante.'
        ],
        muscleFocus: 'Músculo masetero y fascia auricular'
      }
    ]
  },
  {
    id: 11,
    dayNum: 11,
    phase: 'Fase 3',
    title: 'Elevación de Mejillas',
    description: 'Soportar la estructura inferior desde arriba.',
    duration: '11 min',
    durationSeconds: 660,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL',
    objective: 'Apretar pómulos y elevar fascia facial media para estirar ópticamente la mandíbula inferior.',
    difficulty: 'Intermedio',
    equipment: 'Espejo',
    tip: 'Un contorno bien definido se ve muy beneficiado por el soporte muscular de toda la mejilla media.',
    exercises: [
      {
        number: '01',
        title: 'La O y la Sonrisa asistida',
        description: 'Fortalecimiento de la musculatura cigomática superior.',
        duration: '4 min',
        bullets: [
          'Pon tu boca en forma de "O" alargada tapando los dientes con los labios.',
          'Desde ahí, intenta sonreír amplio elevando los pómulos sin marcar arrugas de expresión.',
          'Coloca tus dedos índices sobre tus mejillas para generar una resistencia suave.',
          'Tensa, mantén 5 segundos y vuelve a la posición de reposo inicial.'
        ],
        muscleFocus: 'Músculo Cigomático Mayor y Menor'
      },
      {
        number: '02',
        title: 'El estiramiento del globo bucal',
        description: 'Elasticidad de las paredes musculares de las mejillas.',
        duration: '3 min',
        bullets: [
          'Llena tu boca de aire inflando completamente ambas mejillas como un globo facial.',
          'Traslada el aire acumulado hacia la mejilla izquierda con fuerza estirando el tejido interno.',
          'Pasa el aire hacia el labio superior, luego a la mejilla derecha y labio inferior.',
          'Sigue este ciclo circular 10 veces en una dirección y 10 en sentido puesto.'
        ],
        muscleFocus: 'Músculos buccinadores y orbicular facial'
      },
      {
        number: '03',
        title: 'Anclaje temporal superior',
        description: 'Estiramiento facial de las fascias en sentido ascendente.',
        duration: '4 min',
        bullets: [
          'Coloca los talones de tus palmas en la zona de las sienes.',
          'Ejerce una suave presión hacia adentro y empuja la piel hacia arriba y hacia atrás.',
          'Mira cómodamente hacia abajo extendiendo el cuello sintiendo el estiramiento.',
          'Mantén la postura estática 30 segundos respirando hondo por la nariz.'
        ],
        muscleFocus: 'Aponeurosis Temporal y fascia de la galea aponeurótica'
      }
    ]
  },
  {
    id: 12,
    dayNum: 12,
    phase: 'Fase 3',
    title: 'Tensión y Relajación',
    description: 'Contraste muscular para máxima definición.',
    duration: '10 min',
    durationSeconds: 600,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL',
    objective: 'Trabajar elasticidad mediante contracción intensa seguida de relajamiento profundo.',
    difficulty: 'Intermedio',
    equipment: 'Ninguno',
    tip: 'La alternancia entre esfuerzo estricto y desconexión acelera considerablemente los resultados reafirmantes.',
    exercises: [
      {
        number: '01',
        title: 'La cobra facial isométrica',
        description: 'Tirantez muscular extrema y relajamiento compensatorio.',
        duration: '4 min',
        bullets: [
          'Toma aire hondo y empuja tu mandíbula inferior hacia adelante lo más que puedas.',
          'Eleva la barbilla hacia el techo estirando las comisuras hacia abajo de forma contundente.',
          'Sostén la tensión máxima 8 segundos sintiendo el temblor platisma.',
          'Sopla el aire por la boca relajando la cabeza al centro.'
        ],
        muscleFocus: 'Platisma y hioideo profundo'
      },
      {
        number: '02',
        title: 'El toque de mariposa',
        description: 'Sedación nerviosa de las fibras musculares de la mandíbula.',
        duration: '3 min',
        bullets: [
          'Usa las yemas del dedo medio e índice acariciando muy sutilmente la piel del mentón y cuello.',
          'Dibuja trayectos lineales de arriba hacia abajo como si fueran susurros táctiles libres.',
          'Esto restaura el tono de reposo neuromuscular reduciendo la rigidez masticatoria estática.'
        ],
        muscleFocus: 'Dermatomas cervicales superficiales'
      },
      {
        number: '03',
        title: 'Doble presión palmar craneal',
        description: 'Descompresión de las vértebras cervicales superiores.',
        duration: '3 min',
        bullets: [
          'Cruza tus dedos de las manos detrás de tu cabeza en la base de la nuca.',
          'Empuja tu cabeza hacia atrás mientras tus palmas resisten rígidamente con la misma fuerza.',
          'No debe existir movimiento real, es una contracción de fuerzas balanceadas.',
          'Mantén la tensión 6 segundos y relaja respirando profundamente.'
        ],
        muscleFocus: 'Músculos suboccipitales de la nuca'
      }
    ]
  },
  {
    id: 13,
    dayNum: 13,
    phase: 'Fase 3',
    title: 'Protocolo de Noche',
    description: 'Prepara tus músculos para la regeneración nocturna.',
    duration: '14 min',
    durationSeconds: 840,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL',
    objective: 'Rutina calmante para drenar la acumulación hídrica del día laborable antes de ir a dormir.',
    difficulty: 'Principiante',
    equipment: 'Aceite facial relajante',
    tip: 'Un masaje lento por la noche evita levantarse con congestión ocular o papada inflamada.',
    exercises: [
      {
        number: '01',
        title: 'Drenaje calmante para el descanso',
        description: 'Barrido linfático nocturno para evacuar la hidratación excesiva.',
        duration: '5 min',
        bullets: [
          'Calienta unas gotas de aceite facial relajante (lavanda, manzanilla o almendras).',
          'Desliza las palmas muy suavemente desde bajo de los ojos, por los pómulos, orejas y laterales del cuello.',
          'Coordina el movimiento lento descendente acompañando el flujo circulatorio nocturno.',
          'Realiza 15 pases de forma sumamente pausada.'
        ],
        muscleFocus: 'Vía linfática cervical transversa'
      },
      {
        number: '02',
        title: 'Amasamiento del músculo masetero',
        description: 'Alivio del bruxismo y la tensión de tensión nocturna.',
        duration: '4 min',
        bullets: [
          'Abre la boca suavemente un centímetro.',
          'Con los nudillos flexionados planos, realiza círculos profundos continuos sobre el músculo masetero.',
          'Comienza cerca de los pómulos y desciende despacio hasta el borde de tu mandíbula lateral.',
          'Siente cómo ceden los puntos de dolor o rigidez dental acumulados.'
        ],
        muscleFocus: 'Fibras centrales del masticador masetero'
      },
      {
        number: '03',
        title: 'Estiramiento pasivo cervical',
        description: 'Alineación de la articulación cervical alta.',
        duration: '5 min',
        bullets: [
          'Boca arriba sobre tu cama o tapete, deja colgar tu cabeza suavemente por el borde.',
          'Extiende los brazos a los lados y mantén la posición relajada durante 2 minutos.',
          'Siente cómo actúa la ley de la gravedad estirando tu platisma sin ningún esfuerzo activo.'
        ],
        muscleFocus: 'Músculos escalenos y esternocleidomastoideo'
      }
    ]
  },
  {
    id: 14,
    dayNum: 14,
    phase: 'Fase 3',
    title: 'Simetría Mandibular',
    description: 'Corrige desequilibrios entre lado izquierdo y derecho.',
    duration: '12 min',
    durationSeconds: 720,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL',
    objective: 'Igualar la potencia del músculo masetero mediante masticación guiada mímica.',
    difficulty: 'Avanzado',
    equipment: 'Espejo',
    tip: 'Masticar el alimento siempre por un solo lado de la boca acaba acortando la platisma del lado opuesto de forma asimétrica.',
    exercises: [
      {
        number: '01',
        title: 'Resistencia mandibular unilateral con puño',
        description: 'Compensación de la fuerza masticatoria desigual de la mandíbula baja.',
        duration: '5 min',
        bullets: [
          'Apoya tu puño derecho cerrado justo debajo de la mandíbula en el lado lateral que sientas más caído.',
          'Intenta abrir la boca ejerciendo una fuerza hacia abajo mientras tu puño aplica resistencia impidiéndolo.',
          'Esto tonifica selectivamente el lado platisma masetero debilitado.',
          'Sostén la tensión isométrica durante 5 segundos, y repite 10 veces continuas.'
        ],
        muscleFocus: 'Músculo Pterigoideo y milohioideo unilateral'
      },
      {
        number: '02',
        title: 'Masticación mímica asistida',
        description: 'Reeducación de los ejes de masticación mandibular.',
        duration: '4 min',
        bullets: [
          'Frente al espejo, simula masticar un bocado de goma imaginaria exagerada.',
          'Abre y cierra desplazando la mandíbula inferior en círculos amplios equilibrados a izquierda y derecha.',
          'Concentra tu atención en usar la misma fuerza en ambos lados óseos.',
          'Completa 20 revoluciones lentas y pausadas.'
        ],
        muscleFocus: 'Pares maseteros y temporales conjuntos'
      },
      {
        number: '03',
        title: 'Sonrisa simétrica guiada de precisión',
        description: 'Rebalance neuromuscular del labio inferior.',
        duration: '3 min',
        bullets: [
          'Coloca tus dedos índices sutilmente en ambos extremos labiales o comisuras.',
          'Sonríe con firmeza intentando subir ambos extremos a la misma altura horizontal según veas en el espejo.',
          'Mantén esta pose sonriente y simétrica con tu respiración durante 10 segundos continuos.'
        ],
        muscleFocus: 'Músculo Elevador del ángulo de la boca y Cigomático'
      }
    ]
  },
  {
    id: 15,
    dayNum: 15,
    phase: 'Fase 3',
    title: 'Protocolo de Mantenimiento',
    description: 'Tu guía definitiva para no perder el progreso.',
    duration: '18 min',
    durationSeconds: 1080,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL',
    objective: 'Rutina completa de consolidación con técnicas preventivas a largo plazo.',
    difficulty: 'Avanzado',
    equipment: 'Aceite facial / Espejo',
    tip: '¡Felicitaciones! Repite esta rutina integral de 3 a 4 veces por semana para retener tu perfil definido permanentemente.',
    exercises: [
      {
        number: '01',
        title: 'La gimnasia facial definitiva',
        description: 'Consolidación integral de la musculatura platisma y el suelo bucal.',
        duration: '6 min',
        bullets: [
          'Adopta un estiramiento posterior de cabeza (Tuck) mientras succionas la lengua contra el paladar duro.',
          'Proyecta al mismo tiempo tus labios en un beso sostenido mirando ligeramente hacia el techo.',
          'Esta pose avanzada junta todos los focos contráctiles para obtener un efecto tensor óptimo.'
        ],
        muscleFocus: 'Platisma, suprahioideos y flexores profundos cervicales'
      },
      {
        number: '02',
        title: 'Barrido desinflamante tridimensional',
        description: 'Vaciado linfático de máxima efectividad.',
        duration: '6 min',
        bullets: [
          'Usa las palmas unidas debajo de tu barbilla presionando con firmeza la base de tu lengua para drenarla.',
          'Abre las manos rozando las orejas y deslizando con caricia profunda los laterales de tu garganta.',
          'Termina bombeando suavemente con tus dedos pulgares los huecos de la clavícula.'
        ],
        muscleFocus: 'Canales linfáticos faciales y cervicales'
      },
      {
        number: '03',
        title: 'Anclaje clavicular con tracción cervical',
        description: 'Estiramiento fascial mayor de toda la pared anterior celular.',
        duration: '6 min',
        bullets: [
          'Cruza tus brazos sobre tu pecho sujetando firmemente la porción de piel sobre tus clavículas.',
          'Lleva el mentón firmemente hacia el cielo estirando la platisma izquierda y derecha en su máxima extensión.',
          'Toma 10 respiraciones respirando hondo sintiendo el estiramiento muscular activo.'
        ],
        muscleFocus: 'Fascia cervical superficial anterior'
      }
    ]
  },
  {
    id: 16,
    dayNum: 16,
    phase: 'Fase 4',
    title: 'Escultura del Borde Mandibular',
    description: 'Técnicas de fricción profunda para definir el ángulo goníaco y estilizar la mandíbula.',
    duration: '12 min',
    durationSeconds: 720,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL',
    objective: 'Definir el ángulo mandibular goníaco y liberar adherencias fasciales que retienen toxinas.',
    difficulty: 'Avanzado',
    equipment: 'Aceite facial / Nudillos',
    tip: 'Utiliza el pliegue del índice y el pulgar en forma de pinza deslizando con ritmo constante y controlado.',
    exercises: [
      {
        number: '01',
        title: 'Pinza de definición goníaca',
        description: 'Técnica de esculpido en tijera a lo largo del arco óseo mandibular.',
        duration: '4 min',
        bullets: [
          'Aplica unas gotas de aceite facial en la línea mandibular.',
          'Coloca el índice y el medio flexionados en forma de "V" abrazando el hueso de la mandíbula.',
          'Desliza con presión firme y sostenida desde el centro del mentón hacia el lóbulo de la oreja.',
          'Realiza 15 repeticiones de cada lado manteniendo el cuello erguido.'
        ],
        muscleFocus: 'Borde inferior de la mandíbula y platisma mandibular'
      },
      {
        number: '02',
        title: 'Fricción ascendente del músculo triangular',
        description: 'Elevación del depresor del ángulo de la boca para prevenir el descolgamiento.',
        duration: '4 min',
        bullets: [
          'Coloca la yema de tus pulgares bajo las comisuras labiales.',
          'Ejerce un movimiento semicircular ascendente hacia los pómulos.',
          'Siente cómo se activan los músculos elevadores contra la gravedad.',
          'Completa 20 pases rítmicos sin tirar de la piel superficial.'
        ],
        muscleFocus: 'Músculo depresor del ángulo oral y cigomáticos'
      },
      {
        number: '03',
        title: 'Drenaje post-escultura clavicular',
        description: 'Canalización linfática de los residuos liberados hacia la base del cuello.',
        duration: '4 min',
        bullets: [
          'Con ambas palmas planas, acaricia los laterales del cuello de arriba a abajo.',
          'Finaliza con ligeras presiones suaves sobre el hueco de las clavículas.',
          'Respira hondo para promover el retorno venoso y linfático.'
        ],
        muscleFocus: 'Conducto torácico y ganglios cervicales profundos'
      }
    ]
  },
  {
    id: 17,
    dayNum: 17,
    phase: 'Fase 4',
    title: 'Elevación Sublingual y Suelo Bucal',
    description: 'Activación de la raíz lingual para retraer y compactar la papada baja.',
    duration: '10 min',
    durationSeconds: 600,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoYCQMT4p4F10KcCofEyCNZJUSH9Ow-_3LgmqJ7c0sVxfHFk8KIjqh40RJVbU0_RF0ZMJaMyqu6X92-7sPoVJ5hJjHHyEN_Qo277QjczGV_qVlIchFDYwQYSaEVxEdc99bAKgIbfkOF37W0kKFFtLlFOJr9ssIB3HnQZJ3RpSHgGSPUWTPZ4MeAyvqGCgMybo7YZQ-QhhofdEEQ7RPfiYM-UzrwqX6URIafm9wq5utzYPHlRW2JdGlnBFU2Bzje31qTvP6Wj6bNEYs',
    objective: 'Reeducar la postura biomecánica lingual y tensar el músculo milohioideo de forma activa.',
    difficulty: 'Intermedio',
    equipment: 'Espejo',
    tip: 'Pega toda la superficie de la lengua contra el paladar duro, no únicamente la punta.',
    exercises: [
      {
        number: '01',
        title: 'Succión lingual palatina profunda',
        description: 'Adherencia completa del dorso lingual para elevar el diafragma bucal.',
        duration: '3 min',
        bullets: [
          'Abre la boca ligeramente y presiona la lengua completa contra el cielo de la boca.',
          'Cierra la mandíbula sin apretar los dientes y deglute manteniendo la succión.',
          'Observa en el espejo cómo la zona bajo el mentón se aplana de inmediato.',
          'Sostén 15 segundos y repite 8 veces consecutivas.'
        ],
        muscleFocus: 'Músculo Milohioideo y Geniogloso'
      },
      {
        number: '02',
        title: 'El pulso de cuello de cisne',
        description: 'Estiramiento en extensión con contracción muscular anterior.',
        duration: '4 min',
        bullets: [
          'Gira la cabeza 45 grados a la derecha y eleva la barbilla hacia el techo.',
          'Presiona la lengua firmemente contra el paladar y sonríe con los labios cerrados.',
          'Siente la tensión focalizada en el cordón muscular lateral del cuello.',
          'Mantén 20 segundos y alterna con el lado izquierdo.'
        ],
        muscleFocus: 'Platisma y suprahioideos'
      },
      {
        number: '03',
        title: 'Resistencia con pulgares bajo barbilla',
        description: 'Ejercicio isométrico para fortalecer los flexores craneales.',
        duration: '3 min',
        bullets: [
          'Coloca ambos pulgares bajo el hueso del mentón empujando suavemente hacia arriba.',
          'Intenta abrir la mandíbula ligeramente contra la resistencia de tus pulgares.',
          'Sostén 5 segundos de tensión y relaja lentamente.',
          'Realiza 12 repeticiones concentradas.'
        ],
        muscleFocus: 'Vientre anterior del digástrico'
      }
    ]
  },
  {
    id: 18,
    dayNum: 18,
    phase: 'Fase 4',
    title: 'Drenaje Coreano Antigravedad',
    description: 'Estimulación profunda de la microcirculación y vaciado de toxinas retenidas.',
    duration: '14 min',
    durationSeconds: 840,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL',
    objective: 'Movilizar la linfa estancada en la bolsa submentoniana y acelerar el metabolismo celular.',
    difficulty: 'Avanzado',
    equipment: 'Gua Sha o Nudillos con aceite',
    tip: 'Mantén siempre una inclinación casi plana (15°) respecto a la piel para drenar sin irritar.',
    exercises: [
      {
        number: '01',
        title: 'Raspado suave submentoniano',
        description: 'Vaciado linfático profundo desde la base mandibular hasta el ángulo auricular.',
        duration: '5 min',
        bullets: [
          'Utiliza el borde curvado de tu Gua Sha o los nudillos planos.',
          'Desliza desde el centro bajo el mentón contorneando la mandíbula hasta la oreja.',
          'Aplica presión ligera a moderada, asegurando un deslizamiento suave.',
          'Haz 20 pases por lado con ritmo lento y respiración pausada.'
        ],
        muscleFocus: 'Red linfática submandibular'
      },
      {
        number: '02',
        title: 'Desahogo cervical lateral descendente',
        description: 'Canalización hacia los ganglios linfáticos de la fosa supraclavicular.',
        duration: '5 min',
        bullets: [
          'Desde atrás del lóbulo de la oreja, desliza hacia la base de la clavícula.',
          'No presiones sobre las arterias carótidas, mantén el movimiento lateral.',
          'Repite 15 veces por cada costado del cuello.'
        ],
        muscleFocus: 'Cadena cervical superficial'
      },
      {
        number: '03',
        title: 'Bombeo supraclavicular de cierre',
        description: 'Apertura de las terminales linfáticas para facilitar la eliminación hídrica.',
        duration: '4 min',
        bullets: [
          'Coloca los dedos índice y medio en el hueco superior de cada clavícula.',
          'Realiza pequeños bombeos circulares suaves al ritmo de tu respiración.',
          'Inhala profundo y bombea al exhalar durante 3 minutos.'
        ],
        muscleFocus: 'Ganglios supraclaviculares'
      }
    ]
  },
  {
    id: 19,
    dayNum: 19,
    phase: 'Fase 4',
    title: 'Tonificación Fascial y Corrección Cervical',
    description: 'Corrección activa del Text-Neck y estiramiento de la fascia anterior del cuello.',
    duration: '11 min',
    durationSeconds: 660,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoYCQMT4p4F10KcCofEyCNZJUSH9Ow-_3LgmqJ7c0sVxfHFk8KIjqh40RJVbU0_RF0ZMJaMyqu6X92-7sPoVJ5hJjHHyEN_Qo277QjczGV_qVlIchFDYwQYSaEVxEdc99bAKgIbfkOF37W0kKFFtLlFOJr9ssIB3HnQZJ3RpSHgGSPUWTPZ4MeAyvqGCgMybo7YZQ-QhhofdEEQ7RPfiYM-UzrwqX6URIafm9wq5utzYPHlRW2JdGlnBFU2Bzje31qTvP6Wj6bNEYs',
    objective: 'Realinear las vértebras cervicales y restaurar la longitud anatómica del platisma.',
    difficulty: 'Intermedio',
    equipment: 'Espejo',
    tip: 'Imagina que un hilo invisible tira de la coronilla hacia el techo durante todo el ejercicio.',
    exercises: [
      {
        number: '01',
        title: 'Retracción cervical con doble mentón postural',
        description: 'Reeducación de los músculos flexores profundos del cuello.',
        duration: '4 min',
        bullets: [
          'Con la mirada al frente, desliza la cabeza recta hacia atrás sin inclinarla.',
          'Siente cómo se comprimen y alinean las vértebras cervicales medias.',
          'Mantén 5 segundos en retracción y relaja suavemente al centro.',
          'Realiza 15 repeticiones conscientes.'
        ],
        muscleFocus: 'Largo del cuello y músculos suboccipitales'
      },
      {
        number: '02',
        title: 'Proyección anterior mandibular y beso al cielo',
        description: 'Estiramiento máximo de la pared miofascial anterior.',
        duration: '4 min',
        bullets: [
          'Eleva la mirada hacia arriba y adelanta suavemente la mandíbula inferior.',
          'Lanza un beso exagerado hacia el techo proyectando los labios con firmeza.',
          'Siente el estiramiento intenso y tonificante desde el pecho hasta el mentón.',
          'Sostén 10 segundos, descansa 5 y repite 8 veces.'
        ],
        muscleFocus: 'Platisma y orbicular de los labios'
      },
      {
        number: '03',
        title: 'Auto-resistencia lateral de cuello',
        description: 'Estabilización de las cadenas musculares laterales de la cabeza.',
        duration: '3 min',
        bullets: [
          'Coloca la palma derecha en la sien derecha.',
          'Empuja la cabeza contra la mano sin permitir que se desplace.',
          'Mantén 6 segundos y repite en el lado izquierdo.',
          'Completa 5 series por lado.'
        ],
        muscleFocus: 'Esternocleidomastoideo y escalenos'
      }
    ]
  },
  {
    id: 20,
    dayNum: 20,
    phase: 'Fase 4',
    title: 'Tensión Isométrica Integral y Simetría',
    description: 'Contracción simultánea de los grupos musculares inferiores para máxima firmeza.',
    duration: '15 min',
    durationSeconds: 900,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL',
    objective: 'Coordinar la fuerza isométrica de la musculatura peribucal, lingual y cervical.',
    difficulty: 'Avanzado',
    equipment: 'Espejo',
    tip: 'Controla en el espejo que ambos lados de la boca y cuello se contraigan simétricamente.',
    exercises: [
      {
        number: '01',
        title: 'La contracción del dragón coreano',
        description: 'Tensión isométrica combinada de cuello y mandíbula.',
        duration: '5 min',
        bullets: [
          'Separa los dientes ligeramente y ensancha la mandíbula mostrando los dientes inferiores.',
          'Tensa fuertemente las bandas del platisma en el cuello hasta ver los cordones tensos.',
          'Mantén la tensión activa durante 8 segundos sin contener la respiración.',
          'Relaja lentamente y repite 10 veces.'
        ],
        muscleFocus: 'Fibras musculares del platisma completo'
      },
      {
        number: '02',
        title: 'Sonrisa de resistencia con soporte mentoniano',
        description: 'Fortalecimiento de los músculos risorios y elevadores mandibulares.',
        duration: '5 min',
        bullets: [
          'Coloca tus manos unidas bajo el mentón para bloquear su movimiento descendente.',
          'Sonríe con fuerza empujando las comisuras hacia arriba y hacia afuera.',
          'Siente la oposición de fuerzas tonificando el tercio inferior del rostro.',
          'Mantén 6 segundos y repite 12 veces.'
        ],
        muscleFocus: 'Músculo Risorio y Cigomáticos'
      },
      {
        number: '03',
        title: 'Vaciado linfático en abanico',
        description: 'Relajación miofascial y redistribución de líquidos tras el esfuerzo.',
        duration: '5 min',
        bullets: [
          'Con las palmas abiertas, realiza pases suaves desde el mentón abriéndose hacia las sienes.',
          'Desciende suavemente por el cuello hasta la base clavicular.',
          'Respira profundamente dejando que los músculos se oxigenen por completo.'
        ],
        muscleFocus: 'Fascia superficial de la cara y cuello'
      }
    ]
  },
  {
    id: 21,
    dayNum: 21,
    phase: 'Fase 4',
    title: 'Consolidación Maestra y Mantenimiento Definitivo',
    description: 'La rutina completa de fijación neuromuscular para retener los resultados permanentemente.',
    duration: '16 min',
    durationSeconds: 960,
    completed: false,
    isUnlocked: true,
    videoUrlPlaceholder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsYmBEYDRUIZdkFXGQK0KNS-SPNuIAJ4CTeqnjIy_gBo862xP3PW9CRu7PgMbXmVoD8iuZV7TxLzHCMy-9zLozGn0Pue70-_f5_63SIOG2mjwl-IyBQn2mwElOWkDGEiwOaHLYjdM6vGPJSh8haropDFbKfV4BYwr7NjlWR3pvSGohvralD0v5Su8W0Qermm_vuEgC237_3ESleKpODiNw641GE4ZsBlCXtqdp_DEZoB5Ma1ZowYM9_3Sm8svDiaUhRoAvj3Td6KkL',
    objective: 'Sellar el patrón neuromuscular del protocolo de 21 días para un perfil esculpido duradero.',
    difficulty: 'Avanzado',
    equipment: 'Aceite facial / Espejo',
    tip: '¡Felicitaciones por completar los 21 días! Practica esta rutina 2-3 veces por semana para conservar tu firmeza.',
    exercises: [
      {
        number: '01',
        title: 'El ritual maestro de escultura en 5 pasos',
        description: 'Secuencia fluida combinando drenaje, contracción y estiramiento.',
        duration: '6 min',
        bullets: [
          'Paso 1: Drenaje submentoniano hacia las orejas (1 min).',
          'Paso 2: Elevación lingual sostenida contra el paladar (1.5 min).',
          'Paso 3: Proyección mandibular con beso al techo (1.5 min).',
          'Paso 4: Pinza escultora goníaca bilateral (1 min).',
          'Paso 5: Vaciado linfático hacia clavículas (1 min).'
        ],
        muscleFocus: 'Musculatura completa del cuello, mentón y mandíbula'
      },
      {
        number: '02',
        title: 'Fijación isométrica del ángulo mentocervical',
        description: 'Máxima compactación y definición del ángulo entre cuello y barbilla.',
        duration: '5 min',
        bullets: [
          'Adopta una postura perfectamente erguida con los hombros abajo y atrás.',
          'Succiona la lengua contra el paladar duro y proyecta la mandíbula 2 milímetros al frente.',
          'Sostén esta postura anatómica ideal durante 15 segundos respirando por la nariz.',
          'Repite 6 ciclos consolidando la memoria muscular permanente.'
        ],
        muscleFocus: 'Suprahioideos, platisma y milohioideo'
      },
      {
        number: '03',
        title: 'Sellado térmico con palmas y calma neuromuscular',
        description: 'Cierre relajante que fija la circulación y calma los tejidos faciales.',
        duration: '5 min',
        bullets: [
          'Frota tus palmas enérgicamente hasta generar calor agradable.',
          'Posa las palmas tibias sobre la mandíbula y el cuello envolviendo la zona.',
          'Toma 5 respiraciones profundas agradeciendo el compromiso con tu bienestar y salud facial.'
        ],
        muscleFocus: 'Terminaciones nerviosas faciales y cervicales'
      }
    ]
  }
];

export const TIPS = [
  'Bebe un sorbo de agua fría antes de empezar para contraer los vasos sanguíneos y reducir la inflamación facial.',
  'Mantén tu cabeza erguida al usar el teléfono celular. Por cada centímetro que bajas la cabeza, aumentas el peso sobre el cuello.',
  'Usa una crema de masaje o aceite ligero para que tus dedos se deslicen suavemente sobre la piel sin estirarla de manera agresiva.',
  'Realiza la rutina express antes de salir a eventos sociales o videoconferencias para lucir tu perfil más firme al instante.',
  'Los resultados permanentes se vuelven notorios a partir de la constancia sostenida durante 21 días consecutivos.'
];

export const EXPRESS_EXERCISES = [
  {
    id: 'exp-1',
    title: 'Drenaje rápido bajo mentón',
    duration: '45s',
    durationSec: 45,
    description: 'Activa la circulación',
    instructions: 'Utiliza tus dedos pulgares planos deslizando desde abajo de la barbilla hacia las orejas ejerciendo presión moderada.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDDr5blYcK_jHPLatCjKIpU3v1fxxM74JqFdfMRFKMSeS0IASpKEkXNjBmlGLSty6CvliTRYW6aCLTVuTucVwr5ipaJOaIVCe0NxGZjE3j_5XKGsAGM7T8xAfWVdeYztRwTvNPZ-vmGCAS6kocS852mVrTBq9NYwWd-FkTS8IRKltAOnU9CIOls_pqNcozZkt2pianYVoUnZ6bpltx-vr89TU9SwHj0B69VbFnBdo4bsy8yUr-yvnB79S-OApaMT89lGW4gYeVm_gm'
  },
  {
    id: 'exp-2',
    title: 'Lengua al paladar',
    duration: '30s',
    durationSec: 30,
    description: 'Tensión muscular inmediata',
    instructions: 'Pega toda la superficie de la lengua al techo de la boca y presiona con fuerza. Notarás cómo la papada sube inmediatamente.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD95Z__LDS1-oeeC0ZHwZ0seL810IqN4rtlMktFrW4V_e2HibPHt0bc0TLkZKoSlyIBf6hOpQx7799X6mJ1s1GjyoOvGXmomnM-fAC4GnGDB2r_7nb7XoCgw4DPbVBi4YjvbLXz-xpWmnegGLlyhjL_oAr8pvmibmFOqE7bDsgc12bXG2eZUwVY39iaU8sBTZU_Gaw8L6wrOcgzjC4HLRsd1UxaqmWw0auD_hLF03Hh6AV2M7zaPBWkUdnnGQ2PeGROrfYNt_zL4L4k'
  },
  {
    id: 'exp-3',
    title: 'Beso al techo',
    duration: '30s',
    durationSec: 30,
    description: 'Estiramiento frontal',
    instructions: 'Mira hacia arriba e inclina suavemente la cabeza hacia atrás. Lanza un beso exagerado apuntando hacia el techo.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNh6p2fGUolxyhTGtfUjDjinHUpcluGj-X9WSuc7XW7N3flbKWPq9ed-f7CEuzePcXXzjRMPyN1BdKLDjvoDlQaDFCZJ74I12YS7-x8BgisyTVo3xUzhO433sysBkAJlKK6nKUhBH4SlHnh71sY1jK73VJqwjz2qN-C1R8yBPyIhgqi9IRVQ-LizG1Vn0XyCTw89MCommOIMB0v_FGETWdYKYaJEyBCr0WDt70BZGlq6bCoXsmYYPvxDOWX5G1-Bydy7SQ7nrlzCWA'
  },
  {
    id: 'exp-4',
    title: 'Mentón hacia atrás',
    duration: '30s',
    durationSec: 30,
    description: 'Corrección postural rápida',
    instructions: 'Mantén la mirada al frente y desliza tu cabeza recta hacia atrás (haciendo papada exagerada) para realinear tus vértebras.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQLXQnhZfp8Nr1sKseUGnKLX1VuGUmFVDGyVvamUDI5dNUGBU_wYsfsyjYALG5mk5SYHljKs0ZN_pYq9fE5GdTz3eMBXUbIZUxuz4y44bt3a2BMXXMVGfmzHtJyCyGIdNmxHGShF3VGoZDm-t44EQ4ITvAvO4z0Y537qC5sz-9BspKk36SwCDys8adk8ZSRaBYDNXxJu7FV6LlyaHQhzN95R9dFudPGbS_Txba6i7DyTH_VgM9Tna21QqKtAZ8dEfasVgKIrFMXw-O'
  },
  {
    id: 'exp-5',
    title: 'Drenaje hacia orejas y cuello',
    duration: '45s',
    durationSec: 45,
    description: 'Desinflamación final',
    instructions: 'Usa la palma de tus manos para acariciar desde abajo de las orejas hacia las clavículas con movimientos descendentes lentos.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4rGL74uCBx9SiMYxps3YYuZIb3bo50i_z69lYNDkv0Pl0eSp1H89ECe7_Ph8L564bP6lZIi5NGsey9vw3iJgCqZBhxNd4KZP1zxF5gMnZO-q5Lv20QK3VNnqOcdSGYodhdjunqceq2O3BDUfRd36190Eru_8Gt0IQAZC_J1SLQu5j3y0bOF_ZyuKLdra62BO3RItVasYs5iHVmUZg2Pbw7ipLpyWdqDVrjVGh-w5Ou8k-I5OsNG4fXXIkmOtTlUWO0pbK0FwSEFYz'
  }
];
