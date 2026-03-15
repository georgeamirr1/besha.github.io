import {
  Scale,
  Search,
  HandHeart,
  Users,
  HeartHandshake,
  Eye,
  Scroll,
  Shield,
  MessageSquare,
} from "lucide-react";

export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  desc: string;
}

export const services: Service[] = [
  {
    icon: Search,
    name: "كشف الحقيقة والتحقيق",
    desc: "كشف الحقائق في القضايا المعقدة بالطرق الشرعية والعرفية الموثوقة",
  },
  {
    icon: HandHeart,
    name: "اليمين على المصحف",
    desc: "أداء اليمين الشرعية على المصحف الشريف لإثبات الحقوق والبراءة",
  },
  {
    icon: Scale,
    name: "التحكيم في النزاعات",
    desc: "الفصل في النزاعات والخلافات بين الأطراف بالحكم العرفي والشرعي",
  },
  {
    icon: Eye,
    name: "كشف السارق",
    desc: "معرفة السارق وتحديد المسؤول عن السرقات بالطرق الشرعية المعتبرة",
  },
  {
    icon: HeartHandshake,
    name: "كشف الخائن في العلاقات",
    desc: "كشف الخيانة في العلاقات الزوجية والأسرية بالطرق الشرعية",
  },
  {
    icon: Users,
    name: "التحكيم القبلي",
    desc: "التحكيم العرفي القبلي في النزاعات بين العائلات والقبائل",
  },
  {
    icon: Scroll,
    name: "الفصل في الدم (الديات)",
    desc: "الفصل في قضايا الدم والديات حسب الشرع والعرف القبلي",
  },
  {
    icon: Shield,
    name: "معرفة الكاذب",
    desc: "تمييز الصادق من الكاذب في القضايا والادعاءات المختلفة",
  },
  {
    icon: MessageSquare,
    name: "الصلح بين المتنازعين",
    desc: "الإصلاح بين الأطراف المتنازعة وحقن الدماء وإشاعة السلام",
  },
];
