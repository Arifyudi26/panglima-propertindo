import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import Section from "@/components/Section";
import Project from "@/components/Project";
import About from "@/components/About";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";

export default function Home() {
  return (
    <Container className="py-0">
      <Navbar />

      <Hero />

      <Section />

      <Project />

      <About />

      <Testimonials />

      <Faq />

      <Cta />

      <Footer />

      <PopupWidget />
    </Container>
  );
}
