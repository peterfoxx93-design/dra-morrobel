"use client";

import { motion } from "motion/react";
import { Smile, Braces, Syringe, Stethoscope, Heart, Sparkles } from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Diseño de Sonrisa",
    desc: "Transformamos tu sonrisa con carillas, coronas y rehabilitación estética. Resultados naturales y duraderos.",
  },
  {
    icon: Syringe,
    title: "Endodoncia",
    desc: "Tratamiento de conducto especializado. Salvamos tu diente eliminando la infección desde la raíz.",
  },
  {
    icon: Heart,
    title: "Implantes",
    desc: "Reemplaza dientes perdidos con implantes de titanio de alta calidad. Parecen dientes naturales.",
  },
  {
    icon: Braces,
    title: "Ortodoncia (Brackets)",
    desc: "Alineación dental con brackets tradicionales y estéticos. Tu mejor sonrisa en cada etapa.",
  },
  {
    icon: Stethoscope,
    title: "Prótesis Dental",
    desc: "Prótesis fijas, flexibles y removibles sin ganchos metálicos. Recupera tu funcionalidad y estética.",
  },
  {
    icon: Sparkles,
    title: "Blanqueamiento",
    desc: "Recupera el brillo de tu sonrisa con nuestros tratamientos de blanqueamiento dental seguro.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
            Nuestros <span className="text-brand-600">Servicios</span>
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto text-lg">
            Odontología general y especializada en Puerto Plata. Desde diseño de
            sonrisa hasta implantes y endodoncia.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group p-6 bg-white rounded-2xl border border-brand-100 hover:border-brand-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                <service.icon className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-dark-900 mb-2">{service.title}</h3>
              <p className="text-sm text-dark-500">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
