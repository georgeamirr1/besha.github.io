"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/201221315072"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 text-white transition-colors"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href="tel:01221315072"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 text-white transition-colors"
        aria-label="اتصل بنا"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
