import { useState, useEffect } from 'react';
import { Screen, DayClass } from '../types';
import { DIAGNOSTIC_STEPS, INITIAL_DAYS, EXPRESS_EXERCISES } from '../data';

export function useFacialYoga() {
  // Navigation & Core States
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [activeDayId, setActiveDayId] = useState<number>(1);
  const [diagnosticStepIdx, setDiagnosticStepIdx] = useState<number>(0);
  const [diagnosticSelected, setDiagnosticSelected] = useState<string | null>(null);
  const [diagnosticResultsReady, setDiagnosticResultsReady] = useState(false);
  const [isDiagnosticAnalyzing, setIsDiagnosticAnalyzing] = useState(false);

  // Class detail video player state
  const [classVideoPlaying, setClassVideoPlaying] = useState(false);
  const [classVideoProgress, setClassVideoProgress] = useState(0); // value between 0-100%

  // Selfie/Timeline photo database stored in local state
  const [beforePhoto, setBeforePhoto] = useState<string>(
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDoYCQMT4p4F10KcCofEyCNZJUSH9Ow-_3LgmqJ7c0sVxfHFk8KIjqh40RJVbU0_RF0ZMJaMyqu6X92-7sPoVJ5hJjHHyEN_Qo277QjczGV_qVlIchFDYwQYSaEVxEdc99bAKgIbfkOF37W0kKFFtLlFOJr9ssIB3HnQZJ3RpSHgGSPUWTPZ4MeAyvqGCgMybo7YZQ-QhhofdEEQ7RPfiYM-UzrwqX6URIafm9wq5utzYPHlRW2JdGlnBFU2Bzje31qTvP6Wj6bNEYs'
  );
  const [afterPhoto, setAfterPhoto] = useState<string>('');
  const [afterPhotoUploaded, setAfterPhotoUploaded] = useState(false);

  // Interactive custom photo progress-slider separation percentage
  const [photoSliderRatio, setPhotoSliderRatio] = useState<number>(50);

  // Active Express routine state machine
  const [expressPlaying, setExpressPlaying] = useState(false);
  const [expressActiveStepIdx, setExpressActiveStepIdx] = useState<number>(0);
  const [expressSecondsLeft, setExpressSecondsLeft] = useState<number>(45); // countdown timer
  const [expressPulse, setExpressPulse] = useState(false);
  const [profileActivationPercent, setProfileActivationPercent] = useState<number>(0);

  // Modals / Overlays
  const [selfieGuideOpen, setSelfieGuideOpen] = useState(false);
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [lockedUnlockDay, setLockedUnlockDay] = useState<DayClass | null>(null);
  const [feedbackToast, setFeedbackToast] = useState<string | null>(null);

  // Class days local list state to allow toggling locks and completions
  const [daysList, setDaysList] = useState<DayClass[]>(INITIAL_DAYS);

  // Reference index calculation
  const activeClass = daysList.find((d) => d.id === activeDayId) || daysList[0];

  // Simulated class video progression hook
  useEffect(() => {
    let videoTimer: any;
    if (classVideoPlaying) {
      videoTimer = setInterval(() => {
        setClassVideoProgress((prev) => {
          if (prev >= 100) {
            setClassVideoPlaying(false);
            showToast('¡Has visto todo el tutorial clínico! Haz clic en "Marcar como visto" para completarlo.');
            return 100;
          }
          return prev + 1.2;
        });
      }, 800);
    }
    return () => clearInterval(videoTimer);
  }, [classVideoPlaying]);

  // Express Routine countdown interval hook
  useEffect(() => {
    let expressInterval: any;
    if (expressPlaying) {
      expressInterval = setInterval(() => {
        setExpressPulse((p) => !p); // toggle pulser visual cue
        setExpressSecondsLeft((prev) => {
          if (prev <= 1) {
            // Move to next step or complete
            const nextIdx = expressActiveStepIdx + 1;
            if (nextIdx < EXPRESS_EXERCISES.length) {
              setExpressActiveStepIdx(nextIdx);
              showToast(`Estiramiento completado. Iniciando: ${EXPRESS_EXERCISES[nextIdx].title}`);
              return EXPRESS_EXERCISES[nextIdx].durationSec;
            } else {
              setExpressPlaying(false);
              setProfileActivationPercent(100); // Activate profile to 100%!
              showToast('🎉 ¡Perfecto! Rutina Express Completa. Estado del Perfil activado al 100%.');
              return 0;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(expressInterval);
  }, [expressPlaying, expressActiveStepIdx]);

  // Toast auto-destruction
  const showToast = (msg: string) => {
    setFeedbackToast(msg);
    setTimeout(() => setFeedbackToast(null), 4000);
  };

  // Nav helper keeping back button history intact
  const handleBack = () => {
    if (currentScreen === 'diagnostic') {
      if (diagnosticStepIdx > 0) {
        setDiagnosticStepIdx((idx) => idx - 1);
        setDiagnosticSelected(null);
      } else {
        setCurrentScreen('landing');
      }
    } else if (currentScreen === 'class_detail') {
      setCurrentScreen('classes');
    } else if (currentScreen === 'diagnostic_result') {
      setCurrentScreen('landing');
    } else {
      setCurrentScreen('landing');
    }
  };

  // Diagnostic questionnaire selection coordinator
  const handleDiagnosticNext = () => {
    if (!diagnosticSelected) {
      showToast('Por favor, selecciona una opción clínica para avanzar.');
      return;
    }

    if (diagnosticStepIdx < DIAGNOSTIC_STEPS.length - 1) {
      setDiagnosticStepIdx((idx) => idx + 1);
      setDiagnosticSelected(null);
    } else {
      // Last step: Trigger medical scanning simulation
      setIsDiagnosticAnalyzing(true);
      setTimeout(() => {
        setIsDiagnosticAnalyzing(false);
        setCurrentScreen('diagnostic_result');
        setDiagnosticResultsReady(true);
        showToast('📍 Plan personalizado calculado con éxito: Tipo 4: Papada Mixta.');
      }, 2500);
    }
  };

  // Save webcam/stencil photo as comparison asset
  const handleSavePhoto = (photoBase64: string) => {
    if (!afterPhotoUploaded) {
      setAfterPhoto(photoBase64);
      setAfterPhotoUploaded(true);
      showToast('📸 Foto para la línea de tiempo guardada con éxito.');
    } else {
      setBeforePhoto(photoBase64);
      setAfterPhoto('');
      setAfterPhotoUploaded(false);
      showToast('📸 Foto inicial reemplazada.');
    }
  };

  // Toggle Day completion from Day list checkboxes
  const toggleDayCompleteInList = (id: number) => {
    if (completedDays.includes(id)) {
      setCompletedDays((prev) => prev.filter((dId) => dId !== id));
      showToast(`Día ${id} marcado como pendiente.`);
    } else {
      setCompletedDays((prev) => [...prev, id]);
      showToast(`🎉 ¡Enhorabuena! Has completado la clase del Día ${id}.`);
    }
  };

  // Complete current active class from class details panel
  const handleCompleteActiveDay = () => {
    if (!completedDays.includes(activeClass.id)) {
      setCompletedDays((prev) => [...prev, activeClass.id]);
    }
    showToast(`🏆 ¡Sesión del Día ${activeClass.id} completada con éxito!`);
    
    const nextDayId = activeClass.id + 1;
    if (nextDayId <= 21) {
      setDaysList((prevList) =>
        prevList.map((day) =>
          day.id === nextDayId ? { ...day, isUnlocked: true } : day
        )
      );
    }

    setClassVideoPlaying(false);
    setCurrentScreen('classes');
  };

  // Unlock locked day simulation
  const handleUnlockDayNow = (day: DayClass) => {
    setDaysList((prev) =>
      prev.map((d) => (d.id === day.id ? { ...d, isUnlocked: true } : d))
    );
    setLockedUnlockDay(null);
    setActiveDayId(day.id);
    setCurrentScreen('class_detail');
    showToast(`🔑 Día ${day.id} disponible para su realización.`);
  };

  // Auto layout parameters
  const calculatedProgressPercent = Math.round((completedDays.length / 21) * 100);

  return {
    currentScreen,
    completedDays,
    activeDayId,
    diagnosticStepIdx,
    diagnosticSelected,
    diagnosticResultsReady,
    isDiagnosticAnalyzing,
    classVideoPlaying,
    classVideoProgress,
    beforePhoto,
    afterPhoto,
    afterPhotoUploaded,
    photoSliderRatio,
    expressPlaying,
    expressActiveStepIdx,
    expressSecondsLeft,
    expressPulse,
    profileActivationPercent,
    selfieGuideOpen,
    supportModalOpen,
    lockedUnlockDay,
    feedbackToast,
    daysList,
    activeClass,
    calculatedProgressPercent,
    setCurrentScreen,
    setCompletedDays,
    setActiveDayId,
    setDiagnosticStepIdx,
    setDiagnosticSelected,
    setDiagnosticResultsReady,
    setIsDiagnosticAnalyzing,
    setClassVideoPlaying,
    setClassVideoProgress,
    setBeforePhoto,
    setAfterPhoto,
    setAfterPhotoUploaded,
    setPhotoSliderRatio,
    setExpressPlaying,
    setExpressActiveStepIdx,
    setExpressSecondsLeft,
    setExpressPulse,
    setProfileActivationPercent,
    setSelfieGuideOpen,
    setSupportModalOpen,
    setLockedUnlockDay,
    showToast,
    handleBack,
    handleDiagnosticNext,
    handleSavePhoto,
    toggleDayCompleteInList,
    handleCompleteActiveDay,
    handleUnlockDayNow,
  };
}
