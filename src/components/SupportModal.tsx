import { useState, FormEvent } from 'react';
import { MessageSquare, Send, CheckCircle, HelpCircle, X, User } from 'lucide-react';

interface SupportModalProps {
  onClose: () => void;
}

export default function SupportModal({ onClose }: SupportModalProps) {
  const [question, setQuestion] = useState('');
  const [exerciseContext, setExerciseContext] = useState('General');
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'coach'; text: string; time: string }>>([
    {
      sender: 'coach',
      text: '¡Hola! Soy el Dr. Mateo Torres, tu asesor en fisionomía facial de Papada Bajo Control. ¿Tienes alguna duda sobre la postura, la respiración, o sientes molestias al realizar algún ejercicio del protocolo?',
      time: 'Hace un momento'
    }
  ]);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    const userMsg = {
      sender: 'user' as const,
      text: question,
      time: 'Ahora mismo'
    };

    setMessages((prev) => [...prev, userMsg]);
    const userQuery = question;
    setQuestion('');
    setIsSending(true);

    // Simulate clinical coach generating highly targeted response
    setTimeout(() => {
      let replyText = 'Entiendo perfectamente tu consulta. ';
      
      if (userQuery.toLowerCase().includes('dolor') || userQuery.toLowerCase().includes('molestia')) {
        replyText += 'Recuerda que ningún ejercicio de yoga facial de precisión debe provocar dolor en la mandíbula. Si sientes fatiga en los maseteros, te recomiendo reducir la fuerza de contracción al 50% y enfocarte en una respiración lenta. Asegúrate de relajar los hombros.';
      } else if (userQuery.toLowerCase().includes('lengua') || userQuery.toLowerCase().includes('paladar')) {
        replyText += 'Para realizar "Lengua al paladar" de manera perfecta, pega no solo la punta sino toda la superficie media y trasera de la lengua contra el techo de tu boca. Respira de forma fluida por la nariz. Esto activa los suprahioideos impidiendo el descolgamiento.';
      } else if (userQuery.toLowerCase().includes('tiempo') || userQuery.toLowerCase().includes('resultados') || userQuery.toLowerCase().includes('cuanto')) {
        replyText += 'Los masajes linfáticos drenan líquidos en tan solo 24 horas (ideal el Modo Express). Para tonificación y firmeza celular permanente, los cambios clínicos se consolidan completando con constancia el plan de 21 días.';
      } else {
        replyText += 'Es una excelente pregunta. Para ese ejercicio, el secreto de precisión técnica radica en mantener los hombros bajos y aplicar caricias sumamente ligeras si es drenaje linfático, o contracciones concéntricas de 5 segundos si buscas activar las fibras del platisma.';
      }

      const coachMsg = {
        sender: 'coach' as const,
        text: replyText,
        time: 'Ahora'
      };

      setMessages((prev) => [...prev, coachMsg]);
      setIsSending(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border border-[#eeeeec] flex flex-col h-[80vh]">
        
        {/* Support Header */}
        <div className="bg-[#557c74] text-white px-5 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#f4dfce]" />
            <div>
              <h3 className="font-headline font-bold text-sm">Soporte Médico Facial</h3>
              <p className="text-[10px] text-[#f4fffb]">Fisioterapeutas certificados activos</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Exercises context selector */}
        <div className="bg-[#f9f9f8] px-4 py-2 border-b border-[#eeeeec] flex items-center justify-between text-xs text-[#6b5c4f]">
          <span>Tema de consulta:</span>
          <select
            value={exerciseContext}
            onChange={(e) => setExerciseContext(e.target.value)}
            className="bg-white border border-[#c0c8c5] rounded-md px-2 py-1 outline-none text-[#3d635c] font-medium"
          >
            <option value="General">General / Postura</option>
            <option value="Día 1">Día 1: Desbloqueo</option>
            <option value="Día 2">Día 2: Drenaje Inicial</option>
            <option value="Día 3">Día 3: Platisma</option>
            <option value="Técnicas Express">Técnicas Express</option>
            <option value="Fotos comparativas">Fotos comparativas</option>
          </select>
        </div>

        {/* Chat Stream message list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#f9f9f8] to-white">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col max-w-[85%] ${
                msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
              }`}
            >
              <div className="flex items-center gap-1 mb-1 text-[10px] text-[#717976]">
                {msg.sender === 'coach' ? (
                  <>
                    <span className="w-1.5 h-1.5 bg-[#3d635c] rounded-full" />
                    <span className="font-bold">Dr. Mateo Torres (Asesor)</span>
                  </>
                ) : (
                  <span>Tú</span>
                )}
                <span>• {msg.time}</span>
              </div>
              
              <div
                className={`p-3 rounded-2xl text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#3d635c] text-white rounded-tr-xs'
                    : 'bg-[#eeeeec] text-[#1a1c1b] rounded-tl-xs'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isSending && (
            <div className="flex flex-col items-start max-w-[85%]">
              <span className="text-[10px] text-[#717976] mb-1">Escribiendo...</span>
              <div className="p-3 bg-[#eeeeec] text-[#1a1c1b] rounded-2xl rounded-tl-xs text-xs flex gap-1">
                <span className="w-1.5 h-1.5 bg-[#414846] rounded-full animate-bounce delay-75" />
                <span className="w-1.5 h-1.5 bg-[#414846] rounded-full animate-bounce delay-150" />
                <span className="w-1.5 h-1.5 bg-[#414846] rounded-full animate-bounce delay-300" />
              </div>
            </div>
          )}
        </div>

        {/* Input box */}
        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-[#eeeeec] flex gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            disabled={isSending}
            placeholder="Escribe tu pregunta clínica aquí..."
            className="flex-1 border border-[#c0c8c5] rounded-full px-4 py-2.5 text-xs focus:ring-1 focus:ring-[#3d635c] focus:border-[#3d635c] outline-none disabled:bg-[#f3f4f2]"
          />
          <button
            type="submit"
            disabled={isSending || !question.trim()}
            className="w-10 h-10 rounded-full bg-[#3d635c] hover:bg-[#274d47] text-white flex items-center justify-center transition-all cursor-pointer disabled:bg-gray-300 active:scale-90"
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
