"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, ChevronRight } from "lucide-react";

const WHATSAPP_NUMBER = "18493546414";

const quickReplies = [
  {
    label: "📅 Agendar cita",
    msg: "¡Hola! Quisiera agendar una cita en DentiSalud Bávaro.",
  },
  {
    label: "🦷 Diseño de Sonrisa",
    msg: "Hola, me interesa información sobre el Diseño de Sonrisa. ¿Qué opciones tienen?",
  },
  {
    label: "😬 Ortodoncia",
    msg: "Hola, me gustaría saber más sobre los tratamientos de ortodoncia que ofrecen.",
  },
  {
    label: "📍 Dirección y Horarios",
    msg: "¡Hola! ¿Podrían indicarme la dirección exacta y los horarios de atención?",
  },
  {
    label: "💰 Presupuesto",
    msg: "Hola, quisiera un presupuesto sin compromiso para un tratamiento dental.",
  },
  {
    label: "🦷 Limpieza Dental",
    msg: "Hola, quiero agendar una limpieza dental. ¿Cuánto cuesta y cómo agendo?",
  },
];

export default function WhatsAppChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  const openWhatsApp = (msg: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-all flex items-center justify-center"
        aria-label="Abrir chat de WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-green-500 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">
                    DentiSalud Bávaro
                  </p>
                  <p className="text-white/70 text-xs">Responde en minutos</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-5">
              {!showReplies ? (
                /* Step 1: Welcome */
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-dark-900 mb-2">
                    ¡Hola! 👋
                  </h3>
                  <p className="text-sm text-dark-500 mb-6">
                    ¿En qué podemos ayudarte hoy? Escríbenos por WhatsApp y te
                    responderemos lo más pronto posible.
                  </p>

                  {/* Big phone number */}
                  <a
                    href={`tel:+1${WHATSAPP_NUMBER}`}
                    className="block text-center mb-4 text-2xl font-bold text-brand-600 hover:text-brand-700"
                  >
                    (829) 520-2975
                  </a>

                  <button
                    onClick={() => setShowReplies(true)}
                    className="w-full py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                  >
                    Iniciar chat por WhatsApp
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                /* Step 2: Quick Replies */
                <div>
                  <p className="text-sm text-dark-500 mb-4 text-center">
                    ¿Sobre qué tema quieres consultar?
                  </p>
                  <div className="space-y-2">
                    {quickReplies.map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => openWhatsApp(reply.msg)}
                        className="w-full text-left px-4 py-3 rounded-xl border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all text-sm font-medium text-dark-700"
                      >
                        {reply.label}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setShowReplies(false)}
                    className="w-full mt-3 text-xs text-dark-400 hover:text-dark-600 text-center"
                  >
                    ← Volver
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
