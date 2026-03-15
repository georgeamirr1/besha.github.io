"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Scale, Users, Award, Clock } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Users, value: "+500", label: "قضية محلولة" },
  { icon: Award, value: "+20", label: "سنة خبرة" },
  { icon: Clock, value: "24/7", label: "متاح دائماً" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="ميزان العدل"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/80 to-stone-900/90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-8"
          >
            <Scale className="w-4 h-4" />
            <span className="text-sm font-medium">التحكيم الشرعي والعرفي</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            البشعة
            <br />
            <span className="text-amber-300">كشف الحقيقة والتحكيم</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            التحكيم الشرعي والعرفي في النزاعات وكشف الحقائق بالطرق الشرعية.
            اليمين على المصحف - كشف السارق - التحكيم القبلي - الفصل في الديات
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="tel:01221315072"
              className="flex items-center gap-2 bg-white text-amber-700 hover:bg-amber-50 px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl hover:shadow-white/20 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              <span>01221315072</span>
            </a>
            <a
              href="https://wa.me/201221315072"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl hover:shadow-green-500/30 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              <span>واتساب</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center"
              >
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-amber-300 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm md:text-base text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
