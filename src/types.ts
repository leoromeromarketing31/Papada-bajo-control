export type Screen = 
  | 'landing' 
  | 'diagnostic' 
  | 'diagnostic_result' 
  | 'classes' 
  | 'class_detail' 
  | 'progress' 
  | 'express';

export interface DiagnosticOption {
  text: string;
  icon?: string;
  value: string;
}

export interface DiagnosticStep {
  question: string;
  description: string;
  image: string;
  options: DiagnosticOption[];
}

export interface ExerciseStep {
  number: string; // e.g., '01', '02'
  title: string;
  description: string;
  duration?: string;
  bullets?: string[];
  muscleFocus?: string;
}

export interface DayClass {
  id: number;
  dayNum: number;
  title: string;
  description: string;
  duration: string; // e.g. '8 min'
  durationSeconds: number; // e.g., 480
  completed: boolean;
  isUnlocked: boolean;
  phase: string; // e.g. 'Fase 1'
  videoUrlPlaceholder: string;
  videoUrl?: string;
  objective: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  equipment: string;
  exercises: ExerciseStep[];
  tip?: string;
}
