"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { Quote, Star } from "lucide-react";

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 relative"
    >
      {/* Quote Icon */}
      <Quote className="absolute top-4 left-4 w-8 h-8 text-amber-100" />
      
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Quote Text */}
      <p className="text-gray-700 mb-6 leading-relaxed relative z-10">{testimonial.quote}</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {testimonial.initial}
        </div>
        <div>
          <div className="font-bold text-gray-900">{testimonial.author}</div>
          <div className="text-sm text-gray-500">عميل موثوق</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            آراء العملاء
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ماذا يقول عملاؤنا عنا؟
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نفخر بثقة عملائنا الكرام ونسعى دائماً لتقديم حلول عادلة ومنصفة
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
