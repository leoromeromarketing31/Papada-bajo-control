import { Sparkles } from 'lucide-react';
import { useFacialYoga } from './hooks/useFacialYoga';

// Screen sub-components
import LandingScreen from './components/screens/LandingScreen';
import DiagnosticScreen from './components/screens/DiagnosticScreen';
import DiagnosticResultScreen from './components/screens/DiagnosticResultScreen';
import ClassesScreen from './components/screens/ClassesScreen';
import ClassDetailScreen from './components/screens/ClassDetailScreen';
import ProgressScreen from './components/screens/ProgressScreen';
import ExpressScreen from './components/screens/ExpressScreen';

// Core layout & modal helpers
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import SelfieGuide from './components/SelfieGuide';
import SupportModal from './components/SupportModal';

export default function App() {
  const {
    currentScreen,
    completedDays,
    diagnosticStepIdx,
    diagnosticSelected,
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
    setActiveDayId,
    setDiagnosticSelected,
    setClassVideoPlaying,
    setClassVideoProgress,
    setPhotoSliderRatio,
    setExpressPlaying,
    setExpressActiveStepIdx,
    setExpressSecondsLeft,
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
  } = useFacialYoga();

  return (
    <div className="min-h-screen bg-[#f9f9f8] text-[#1a1c1b] font-sans pb-24 flex flex-col items-center">
      {/* Top Banner Feedbacks */}
      {feedbackToast && (
        <div className="fixed top-20 z-[60] left-1/2 transform -translate-x-1/2 w-[90%] max-w-sm bg-[#2f3130] text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2 text-xs border border-[#717976]">
          <Sparkles className="text-[#a6cfc6] w-4 h-4 flex-shrink-0 animate-spin" />
          <span>{feedbackToast}</span>
        </div>
      )}

      {/* Persistent global Header app bar */}
      <Header
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
        onBack={handleBack}
        onOpenSelfie={() => setSelfieGuideOpen(true)}
      />

      <main className="w-full max-w-lg sm:max-w-xl md:max-w-2xl px-5 py-4 flex-1">
        {/* SCREEN 1: LANDING */}
        {currentScreen === 'landing' && (
          <LandingScreen
            onStartDiagnostic={() => {
              setCurrentScreen('diagnostic');
            }}
            onStartExpress={() => {
              setCurrentScreen('express');
            }}
          />
        )}

        {/* SCREEN 2: DIAGNOSTIC */}
        {currentScreen === 'diagnostic' && (
          <DiagnosticScreen
            diagnosticStepIdx={diagnosticStepIdx}
            diagnosticSelected={diagnosticSelected}
            setDiagnosticSelected={setDiagnosticSelected}
            onBack={handleBack}
            onNext={handleDiagnosticNext}
            isAnalyzing={isDiagnosticAnalyzing}
          />
        )}

        {/* SCREEN 3: RESULTADOS */}
        {currentScreen === 'diagnostic_result' && (
          <DiagnosticResultScreen
            onNavigate={setCurrentScreen}
            onShowNotification={showToast}
          />
        )}

        {/* SCREEN 4: PLAN (21 DAYS CURRICULUM) */}
        {currentScreen === 'classes' && (
          <ClassesScreen
            daysList={daysList}
            completedDays={completedDays}
            calculatedProgressPercent={calculatedProgressPercent}
            toggleDayCompleteInList={toggleDayCompleteInList}
            setActiveDayId={setActiveDayId}
            setClassVideoProgress={setClassVideoProgress}
            setCurrentScreen={setCurrentScreen}
            setSupportModalOpen={setSupportModalOpen}
            lockedUnlockDay={lockedUnlockDay}
            setLockedUnlockDay={setLockedUnlockDay}
            handleUnlockDayNow={handleUnlockDayNow}
          />
        )}

        {/* SCREEN 5: CLASS DETAIL */}
        {currentScreen === 'class_detail' && (
          <ClassDetailScreen
            activeClass={activeClass}
            classVideoPlaying={classVideoPlaying}
            setClassVideoPlaying={setClassVideoPlaying}
            classVideoProgress={classVideoProgress}
            onCompleteActiveDay={handleCompleteActiveDay}
            setCurrentScreen={setCurrentScreen}
          />
        )}

        {/* SCREEN 6: PROGRESS (PHOTO TIMELINE SLIDER) */}
        {currentScreen === 'progress' && (
          <ProgressScreen
            beforePhoto={beforePhoto}
            afterPhoto={afterPhoto}
            afterPhotoUploaded={afterPhotoUploaded}
            photoSliderRatio={photoSliderRatio}
            setPhotoSliderRatio={setPhotoSliderRatio}
            setSelfieGuideOpen={setSelfieGuideOpen}
            setCurrentScreen={setCurrentScreen}
          />
        )}

        {/* SCREEN 7: EXPRESS ROUTINE (3 MINUTES ACTION) */}
        {currentScreen === 'express' && (
          <ExpressScreen
            expressPlaying={expressPlaying}
            setExpressPlaying={setExpressPlaying}
            expressActiveStepIdx={expressActiveStepIdx}
            setExpressActiveStepIdx={setExpressActiveStepIdx}
            expressSecondsLeft={expressSecondsLeft}
            setExpressSecondsLeft={setExpressSecondsLeft}
            expressPulse={expressPulse}
            profileActivationPercent={profileActivationPercent}
            setProfileActivationPercent={setProfileActivationPercent}
            setCurrentScreen={setCurrentScreen}
            showToast={showToast}
          />
        )}
      </main>

      {/* Persistent global bottom sticky navigation bar */}
      <BottomNav activeScreen={currentScreen} onNavigate={setCurrentScreen} />

      {/* Modal overlays */}
      {selfieGuideOpen && (
        <SelfieGuide
          onClose={() => setSelfieGuideOpen(false)}
          onSavePhoto={handleSavePhoto}
          existingBeforePhoto={beforePhoto}
          existingAfterPhoto={afterPhoto}
        />
      )}

      {supportModalOpen && <SupportModal onClose={() => setSupportModalOpen(false)} />}
    </div>
  );
}
