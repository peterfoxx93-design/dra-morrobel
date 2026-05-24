"use client";

import { motion } from "motion/react";
import { MapPin, Clock, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "18493546414";
const PHONE_DISPLAY = "(849) 354-6414";
const PHONE_ALT = "(809) 586-6414";

export default function Location() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=¡Hola!+Quisiera+saber+la+ubicación+de+la+clínica+de+la+Dra.+Ingrid+Morrobel.`;

  return (
    <section id="ubicacion" className="py-24 bg-brand-50/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
            Visítanos en <span className="text-brand-600">Puerto Plata</span>
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto text-lg">
            Estamos ubicados en la Av. 27 de Febrero, fácil acceso y
            estacionamiento disponible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="p-6 bg-white rounded-2xl border border-brand-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-900 mb-1">Dirección</h3>
                  <p className="text-dark-500 text-sm">
                    Calle 27 de Febrero No. 7-B
                    <br />
                    Puerto Plata 57000
                    <br />
                    República Dominicana
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-brand-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-900 mb-1">Horario</h3>
                  <div className="space-y-1 text-sm text-dark-500">
                    <p>Lunes a Viernes: 8:30 AM — 6:00 PM</p>
                    <p>Sábados: 8:30 AM — 1:00 PM</p>
                    <p className="text-brand-600 font-medium">Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-brand-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-900 mb-1">Contacto</h3>
                  <div className="space-y-1 text-sm">
                    <p>
                      <a href={`tel:+1${WHATSAPP_NUMBER}`} className="text-brand-600 hover:underline font-medium">
                        {PHONE_DISPLAY}
                      </a>
                    </p>
                    <p>
                      <a href={`tel:+1${PHONE_ALT.replace(/[^0-9]/g, "")}`} className="text-dark-500 hover:text-brand-600">
                        {PHONE_ALT}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-green-50 rounded-2xl border border-green-200 hover:bg-green-100 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-green-800 group-hover:text-green-900 transition-colors">
                    Escríbenos por WhatsApp
                  </p>
                  <p className="text-sm text-green-600">Responde rápido sobre citas y servicios</p>
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-[500px] rounded-2xl overflow-hidden border border-brand-100 shadow-md"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.0!2d-70.7!3d19.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.%2027%20de%20Febrero%2C%20Puerto%20Plata!5e0!3m2!1sen!2sdo!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Dra. Ingrid Morrobel"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
