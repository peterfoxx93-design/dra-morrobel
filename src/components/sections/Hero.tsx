"use client";

import { motion } from "motion/react";
import { Phone, MessageCircle, MapPin, Clock, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "18493546414";
const PHONE_DISPLAY = "(849) 354-6414";
const PHONE_ALT = "(809) 586-6414";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=¡Hola!+Quisiera+agendar+una+cita+con+la+Dra.+Ingrid+Morrobel.`;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-accent-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-xs font-medium mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Odontología General en Puerto Plata
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight mb-4">
              <span className="text-brand-600">Dra. Ingrid</span>{" "}
              <span className="text-accent-500">Morrobel</span>
            </h1>
            <p className="text-lg sm:text-xl text-dark-500 mb-8 max-w-lg mx-auto md:mx-0">
              Especialistas en devolver sonrisas. Endodoncia, implantes,
              ortodoncia y diseño de sonrisa con calidad y calidez.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-8"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-2xl hover:bg-green-600 transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-xs text-white/80 uppercase tracking-wider">
                    Escríbenos ahora
                  </p>
                  <p className="text-xl sm:text-2xl font-bold">
                    {PHONE_DISPLAY}
                  </p>
                </div>
              </a>

              <a
                href={`tel:+1${WHATSAPP_NUMBER}`}
                className="inline-flex items-center gap-2 px-6 py-4 bg-white border-2 border-brand-200 text-brand-600 rounded-2xl hover:bg-brand-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm font-semibold">Llamar</span>
              </a>
            </motion.div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-sm text-dark-500">
                <Clock className="w-4 h-4 text-brand-400" />
                Lun-Vie 8:30am-6pm | Sáb 8:30am-1pm
              </div>
              <div className="flex items-center gap-2 text-sm text-dark-500">
                <MapPin className="w-4 h-4 text-brand-400" />
                Calle 27 de Febrero No. 7-B, Puerto Plata
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <motion.div
              className="relative w-64 h-64 sm:w-96 sm:h-96"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.03, 1],
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <img
                src="/images/logo-icon.png"
                alt="Dra. Ingrid Morrobel"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <a href="#servicios" className="text-dark-400 hover:text-brand-600 transition-colors">
            <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
