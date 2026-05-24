"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-brand-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="text-lg font-bold text-brand-600">Dra. Ingrid</span>
          <span className="text-lg font-bold text-accent-500">Morrobel</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-dark-600 hover:text-brand-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={openForm}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white rounded-full text-sm font-medium hover:bg-brand-700 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Agendar Cita
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-dark-600"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-brand-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-dark-600 hover:text-brand-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={openForm}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-600 text-white rounded-full text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                Agendar Cita
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
