import Navbar from "@/components/albashaa/Navbar";
import Hero from "@/components/albashaa/Hero";
import Services from "@/components/albashaa/Services";
import HowItWorks from "@/components/albashaa/HowItWorks";
import Testimonials from "@/components/albashaa/Testimonials";
import Contact from "@/components/albashaa/Contact";
import Footer from "@/components/albashaa/Footer";
import FloatingButtons from "@/components/albashaa/FloatingButtons";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
