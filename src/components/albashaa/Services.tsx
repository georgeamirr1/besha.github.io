"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { services, type Service } from "@/data/services";
import Image from "next/image";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
      <p className="text-gray-600 leading-relaxed">{service.desc}</p>
    </motion.div>
  );
}

export default function Services() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
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
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            خدمات التحكيم وكشف الحقيقة
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم خدمات التحكيم الشرعي والعرفي وكشف الحقائق بالطرق الشرعية المعتبرة
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Featured Images */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16 grid md:grid-cols-2 gap-6 md:gap-8"
        >
          {/* Quran Oath Image */}
          <div className="relative h-48 md:h-80 rounded-xl md:rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/images/quran-oath.png"
              alt="اليمين على المصحف"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 right-0 left-0 p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">اليمين على المصحف</h3>
              <p className="text-white/80 text-sm md:text-base">أداء اليمين الشرعية على المصحف الشريف لإثبات الحقوق</p>
            </div>
          </div>

          {/* Justice Scales Image */}
          <div className="relative h-48 md:h-80 rounded-xl md:rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/images/justice-scales.png"
              alt="ميزان العدل"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 right-0 left-0 p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">العدل والإنصاف</h3>
              <p className="text-white/80 text-sm md:text-base">الفصل العادل في النزاعات بما يرضي جميع الأطراف</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
