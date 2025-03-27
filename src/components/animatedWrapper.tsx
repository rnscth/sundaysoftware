"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimatedWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Detecta la ruta actual

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Se ejecuta en cada cambio de ruta
        initial={{ opacity: 0, y: 10 }} // Estado inicial (antes de entrar)
        animate={{ opacity: 1, y: 0 }}  // Estado final (cuando entra)
        exit= '' // Estado de salida (antes de desmontar)
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex-1 overflow-auto p-4"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
