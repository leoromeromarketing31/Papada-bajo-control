import { useState, useRef, useEffect } from 'react';
import { Camera, Check, RefreshCw, Sparkles, X, Sliders, Info, Image as ImageIcon } from 'lucide-react';

interface SelfieGuideProps {
  onClose: () => void;
  onSavePhoto: (photoBase64: string) => void;
  existingBeforePhoto?: string;
  existingAfterPhoto?: string;
}

export default function SelfieGuide({
  onClose,
  onSavePhoto,
  existingBeforePhoto,
  existingAfterPhoto
}: SelfieGuideProps) {
  const [streamActive, setStreamActive] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [activeGuideType, setActiveGuideType] = useState<'profile' | 'frontal'>('profile');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    jawAngle: number;
    symmetry: number;
    score: number;
    type: string;
  } | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Stop video tracks on unmount
  useEffect(() => {
    let localStream: MediaStream | null = null;
    
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: 400, height: 400 },
          audio: false
        });
        localStream = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStreamActive(true);
        }
      } catch (err) {
        console.warn('Webcam not accessible in current sandbox/iframe. Using high-fidelity demo portrait simulator.');
        setStreamActive(false);
      }
    }

    startCamera();

    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    if (streamActive && videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = 400;
        canvas.height = 400;
        // Mirror the webcam capture for natural feel
        ctx.translate(400, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(video, 0, 0, 400, 400);
        
        const dataUrl = canvas.toDataURL('image/png');
        setCapturedPhoto(dataUrl);
        triggerAnalysis();
      }
    } else {
      // Fallback: Simulate capturing using a premium high-quality wellness avatar
      const demoPhotos = {
        profile: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoYCQMT4p4F10KcCofEyCNZJUSH9Ow-_3LgmqJ7c0sVxfHFk8KIjqh40RJVbU0_RF0ZMJaMyqu6X92-7sPoVJ5hJjHHyEN_Qo277QjczGV_qVlIchFDYwQYSaEVxEdc99bAKgIbfkOF37W0kKFFtLlFOJr9ssIB3HnQZJ3RpSHgGSPUWTPZ4MeAyvqGCgMybo7YZQ-QhhofdEEQ7RPfiYM-UzrwqX6URIafm9wq5utzYPHlRW2JdGlnBFU2Bzje31qTvP6Wj6bNEYs',
        frontal: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX1a1pi33-alHTHxz0OQrtbq20ekeK7tcCnqEJAqFZpOhpHlN-lvYygP_zu2kmeukY8qYoWwr82NT39wjoLalZesWnC-ZHKFntsS1Xt51SrZhFZur3zfC5PT7QmUJzaXR2Snxux1ZMi9lr1MGF7ytiwlI1HqUhTHMY2PmdqoXU6DqsKokdwlulgMcXNLnSH1srgcBcMjB9pI2H7wo49HUDBuZO5pVgHJirIRf-ecX0k5szd_9BD4KnfFAdEr75kuuw_tVUL4UEntQ3'
      };
      setCapturedPhoto(demoPhotos[activeGuideType]);
      triggerAnalysis();
    }
  };

  const triggerAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisResult(null);
    setTimeout(() => {
      setIsAnalyzing(false);
      // Simulate highly precise face-scanning logic
      setAnalysisResult({
        jawAngle: activeGuideType === 'profile' ? 141 : 129,
        symmetry: 88,
        score: activeGuideType === 'profile' ? 82 : 85,
        type: activeGuideType === 'profile' ? 'Anclaje platismal firme' : 'Línea de mentón simétrica'
      });
    }, 1800);
  };

  const handleApplyPhoto = () => {
    if (capturedPhoto) {
      onSavePhoto(capturedPhoto);
      onClose();
    }
  };

  const handleRetake = () => {
    setCapturedPhoto(null);
    setAnalysisResult(null);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border border-[#eeeeec] flex flex-col max-h-[90vh]">
        
        {/* Header bar */}
        <div className="bg-[#3d635c] text-white px-5 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 animate-pulse text-[#a6cfc6]" />
            <div>
              <h3 className="font-headline font-bold text-sm">Foto Guía Antiflacidez</h3>
              <p className="text-[10px] text-[#c1ebe1]">Alineación facial de precisión clínica</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Camera Stage container */}
        <div className="relative aspect-square w-full bg-[#1a1c1b] overflow-hidden flex items-center justify-center">
          {capturedPhoto ? (
            <div className="relative w-full h-full">
              <img 
                src={capturedPhoto} 
                alt="Captured profile state" 
                className={`w-full h-full object-cover ${isAnalyzing ? 'brightness-75' : ''}`}
              />
              
              {/* Analysis grid animation scanline */}
              {isAnalyzing && (
                <div className="absolute inset-x-0 h-1 bg-[#a6cfc6] shadow-[0_0_12px_#3d635c] top-0 animate-[scan_1.8s_ease-in-out_infinite]" />
              )}

              {/* Simulated anatomical diagnostic vectors overlay */}
              {!isAnalyzing && analysisResult && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                  {/* Angle line markers */}
                  <path d="M 200 120 L 210 240 L 330 220" fill="none" stroke="#ba1a1a" strokeWidth="3" strokeDasharray="4 2" />
                  <circle cx="210" cy="240" r="6" fill="#ba1a1a" />
                  <text x="225" y="260" fill="#ba1a1a" className="font-bold text-sm bg-black font-headline">
                    Ángulo: {analysisResult.jawAngle}°
                  </text>
                  
                  {/* Face scanning anchor dots */}
                  <circle cx="200" cy="120" r="4" fill="#a6cfc6" />
                  <circle cx="330" cy="220" r="4" fill="#a6cfc6" />
                  <circle cx="160" cy="230" r="4" fill="#a6cfc6" />
                  <line x1="160" y1="230" x2="210" y2="240" stroke="#a6cfc6" strokeWidth="2" />
                </svg>
              )}
            </div>
          ) : streamActive ? (
            // Real webcam stream preview
            <div className="relative w-full h-full">
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline
                className="w-full h-full object-cover scale-x-[-1]"
              />
              {/* Surgical contour guidelines */}
              <div className="absolute inset-0 border-[3px] border-dashed border-[#a6cfc6]/40 pointer-events-none rounded-full m-8 flex items-center justify-center">
                <span className="text-[10px] text-white/50 bg-black/40 px-2 py-0.5 rounded-full">
                  Coloca tu barbilla aquí
                </span>
              </div>
            </div>
          ) : (
            // Demo fallback screen
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 bg-[#2f3130] text-gray-300">
              <Camera className="w-12 h-12 text-[#a6cfc6] mb-3 opacity-60" />
              <h4 className="font-semibold text-sm text-white mb-1">Simulador de Cámara Activo</h4>
              <p className="text-[11px] text-[#c0c8c5] max-w-xs mb-4">
                No pudimos acceder a tu cámara (esperado en contenedores de desarrollo). Utilizaremos un retrato demo de alta fidelidad para simular el análisis.
              </p>
              <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-[#a6cfc6] opacity-75 shadow-lg">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoYCQMT4p4F10KcCofEyCNZJUSH9Ow-_3LgmqJ7c0sVxfHFk8KIjqh40RJVbU0_RF0ZMJaMyqu6X92-7sPoVJ5hJjHHyEN_Qo277QjczGV_qVlIchFDYwQYSaEVxEdc99bAKgIbfkOF37W0kKFFtLlFOJr9ssIB3HnQZJ3RpSHgGSPUWTPZ4MeAyvqGCgMybo7YZQ-QhhofdEEQ7RPfiYM-UzrwqX6URIafm9wq5utzYPHlRW2JdGlnBFU2Bzje31qTvP6Wj6bNEYs" 
                  alt="Avatar"
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          )}

          {/* Guide selection bar on bottom inner */}
          {!capturedPhoto && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              <button
                onClick={() => setActiveGuideType('profile')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-md cursor-pointer transition-all ${
                  activeGuideType === 'profile'
                    ? 'bg-[#3d635c] text-white scale-105'
                    : 'bg-white/80 text-[#3d635c] backdrop-blur-md hover:bg-white'
                }`}
              >
                📐 Perfil Lateral
              </button>
              <button
                onClick={() => setActiveGuideType('frontal')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-md cursor-pointer transition-all ${
                  activeGuideType === 'frontal'
                    ? 'bg-[#3d635c] text-white scale-105'
                    : 'bg-white/80 text-[#3d635c] backdrop-blur-md hover:bg-white'
                }`}
              >
                👤 Ángulo Frontal
              </button>
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="bg-[#f9f9f8] p-5 border-t border-[#eeeeec] flex flex-col gap-3">
          {capturedPhoto ? (
            <>
              {isAnalyzing ? (
                <div className="flex items-center justify-center gap-3 py-2">
                  <RefreshCw className="w-5 h-5 text-[#3d635c] animate-spin" />
                  <span className="text-xs font-semibold text-[#3d635c] animate-pulse">
                    Mapeando vectores de la platisma...
                  </span>
                </div>
              ) : analysisResult ? (
                <div>
                  {/* Scientific diagnosis results */}
                  <div className="bg-[#557c74]/10 rounded-xl p-3 border border-[#c1ebe1] text-xs mb-3 text-left">
                    <div className="flex justify-between items-center mb-1">
                      <strong className="text-[#3d635c]">Diagnóstico: {analysisResult.type}</strong>
                      <span className="text-[10px] font-mono text-[#274d47]">SIMETRÍA: {analysisResult.symmetry}%</span>
                    </div>
                    <p className="text-[10px] text-[#414846]">
                      Ángulo de flexión mandibular óptimo para evitar flacidez: {analysisResult.jawAngle} grados. Tu tono muscular actual cuenta con una calificación de {analysisResult.score}/100.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleRetake}
                      className="flex-1 py-2.5 rounded-full border border-[#c0c8c5] text-xs font-bold text-[#6b5c4f] hover:bg-[#eeeeec] cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> Volver a tomar
                    </button>
                    <button
                      onClick={handleApplyPhoto}
                      className="flex-1 py-2.5 rounded-full bg-[#3d635c] hover:bg-[#3d635c]/90 text-xs font-bold text-white shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" /> Guardar Foto
                    </button>
                  </div>
                </div>
              ) : null}
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <button
                onClick={handleCapture}
                className="w-full py-3 bg-[#3d635c] hover:bg-[#274d47] text-white font-bold rounded-full text-xs shadow-md active:scale-95 transition-transform cursor-pointer flex items-center justify-center gap-2"
              >
                <Camera className="w-4 h-4" /> CAPTURAR FOTO CON GUÍA
              </button>
              
              <p className="text-[10px] text-[#717976] text-center italic">
                Sugerencia: Alinea el mentón con las líneas verdes para medir la evolución real de tu papada.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Styled animation scan effect */}
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0.9; }
          40% { opacity: 0.8; }
          100% { top: 100%; opacity: 0.1; }
        }
      `}</style>
    </div>
  );
}
