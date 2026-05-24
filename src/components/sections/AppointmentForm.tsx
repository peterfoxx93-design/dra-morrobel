"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "18493546414";
const PHONE_DISPLAY = "(849) 354-6414";

const services = [
  "Consulta General",
  "Limpieza Dental",
  "Blanqueamiento",
  "Ortodoncia",
  "Implantes",
  "Diseño de Sonrisa",
  "Extracción",
  "Endodoncia",
  "Otro",
];

export default function AppointmentForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("open-contact-modal", handler);
    return () => window.removeEventListener("open-contact-modal", handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono) return;

    const msg = `¡Hola! Soy ${form.nombre}.${
      form.servicio
        ? ` Me interesa agendar una cita para: ${form.servicio}.`
        : " Quisiera agendar una cita."
    } Mi teléfono es ${form.telefono}.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    setSent(true);
    setTimeout(() => {
      window.open(url, "_blank");
      setIsOpen(false);
      setSent(false);
      setForm({ nombre: "", telefono: "", servicio: "" });
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-brand-600 px-6 py-5 relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-bold text-white">Agendar Cita</h2>
              <p className="text-white/80 text-sm mt-1">
                Cuéntanos cómo contactarte y te respondemos al instante por
                WhatsApp
              </p>
            </div>

            {sent ? (
              <div className="px-6 py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-500" />
                </div>
                <p className="font-semibold text-dark-900">
                  ¡Redirigiendo a WhatsApp!
                </p>
                <p className="text-sm text-dark-500 mt-1">
                  Tu mensaje se está preparando...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-1.5">
                    Tu nombre *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nombre}
                    onChange={(e) =>
                      setForm({ ...form, nombre: e.target.value })
                    }
                    placeholder="Ej: María García"
                    className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-sm"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-1.5">
                    Tu teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.telefono}
                    onChange={(e) =>
                      setForm({ ...form, telefono: e.target.value })
                    }
                    placeholder="Ej: 809-552-0165"
                    className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-sm"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-1.5">
                    Servicio de interés
                  </label>
                  <select
                    value={form.servicio}
                    onChange={(e) =>
                      setForm({ ...form, servicio: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-sm bg-white"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar por WhatsApp
                </button>

                <p className="text-xs text-dark-400 text-center">
                  Al enviar, se abrirá WhatsApp con tu mensaje pre-escrito. No
                  almacenamos tus datos.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
