"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { steps, type Step } from "@/data/steps";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

function StepItem({ step, index }: { step: Step; index: number }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex items-start gap-4 md:gap-6"
    >
      {/* Number Circle */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg shadow-amber-500/25">
          {step.num}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 relative">
        {index < steps.length - 1 && (
          <div className="absolute top-6 md:top-8 -bottom-6 md:-bottom-8 right-6 md:right-8 w-0.5 bg-gradient-to-b from-amber-300 to-transparent h-full hidden md:block" />
        )}
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{step.title}</h3>
        <p className="text-sm md:text-base text-gray-600">{step.text}</p>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            كيف نعمل
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            خطوات بسيطة للحل
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نحرص على تقديم حلول شرعية وعرفية عادلة لجميع الأطراف
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="max-w-xl mx-auto lg:mx-0">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <StepItem key={index} step={step} index={index} />
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/tribal-council.png"
              alt="المجلس القبلي للتحكيم"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent" />
            <div className="absolute bottom-0 right-0 left-0 p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">المجلس القبلي</h3>
              <p className="text-white/80 text-sm md:text-base">نحترم التقاليد والأعراف في حل النزاعات</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-6 py-3 rounded-full">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-medium">سرية تامة وأمانة في التعامل</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
