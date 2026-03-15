"use client";

import { Scale, Phone, MessageCircle, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-scroll";

const navLinks = [
  { name: "الرئيسية", to: "hero" },
  { name: "خدماتنا", to: "services" },
  { name: "كيف نعمل", to: "how-it-works" },
  { name: "آراء العملاء", to: "testimonials" },
  { name: "تواصل معنا", to: "contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-10 h-10 text-amber-400" />
              <span className="text-2xl font-bold">البشعة</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              التحكيم الشرعي والعرفي في النزاعات وكشف الحقائق بالطرق الشرعية المعتبرة.
              اليمين على المصحف - كشف السارق - التحكيم القبلي - الفصل في الديات
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-400 hover:text-amber-400 cursor-pointer transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:01221315072"
                  className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>01221315072</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/201221315072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>واتساب</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/SdX1zGtGrEo179Yc6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition-colors"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>الموقع على الخريطة</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} البشعة للتحكيم وكشف الحقيقة. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
