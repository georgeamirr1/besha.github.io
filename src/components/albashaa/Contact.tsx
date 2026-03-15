"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import Image from "next/image";

const contactInfo = [
  {
    icon: Phone,
    title: "اتصل بنا",
    value: "01221315072",
    link: "tel:01221315072",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: MessageCircle,
    title: "واتساب",
    value: "01221315072",
    link: "https://wa.me/201221315072",
    color: "from-green-500 to-green-600",
  },
  {
    icon: MapPin,
    title: "الموقع",
    value: "مصر - العنوان على الخريطة",
    link: "https://maps.app.goo.gl/SdX1zGtGrEo179Yc6",
    color: "from-red-500 to-red-600",
  },
];

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
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
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            نحن هنا لخدمتكم
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            تواصلوا معنا في أي وقت، نحن جاهزون للاستماع لقضاياكم وتقديم الحلول المناسبة
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">{item.title}</div>
                  <div className="text-lg font-bold text-gray-900">{item.value}</div>
                </div>
              </motion.a>
            ))}

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="p-5 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl text-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6" />
                <span className="font-bold text-lg">أوقات العمل</span>
              </div>
              <div className="space-y-2 text-white/90">
                <div className="flex justify-between">
                  <span>السبت - الخميس</span>
                  <span className="font-medium">9:00 ص - 9:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span>الجمعة</span>
                  <span className="font-medium">بعد الصلاة - 9:00 م</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image and Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Entrance Image */}
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/entrance.png"
                alt="موقع البشعة"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent" />
              <div className="absolute bottom-4 right-4">
                <p className="text-white font-bold text-lg">أهلاً بكم</p>
              </div>
            </div>

            {/* Map */}
            <div className="h-[300px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456789.0123456789!2d30.0!3d30.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzAwLjAiTiAzMMKwMDAnMDAuMCJF!5e0!3m2!1sar!2seg!4v1699999999999!5m2!1sar!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقعنا"
              />
            </div>
          </motion.div>
        </div>

        {/* Map Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="text-center mt-8"
        >
          <a
            href="https://maps.app.goo.gl/SdX1zGtGrEo179Yc6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg"
          >
            <MapPin className="w-5 h-5" />
            <span>افتح الموقع على الخريطة</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
