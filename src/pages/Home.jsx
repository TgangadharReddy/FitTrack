import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import PartnerLogos from "../components/landing/PartnerLogos";
import SocialProof from "../components/landing/SocialProof";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import Testimonials from "../components/landing/Testimonials";
import Pricing from "../components/landing/Pricing";
import CTA from "../components/landing/CTA";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/Footer";

function Home() {
  return (
    <div className="bg-black text-white overflow-hidden">

      <Navbar />

      <Hero />

      <PartnerLogos />

      <SocialProof />

      <Features />

      <HowItWorks />

      <Testimonials />

      <Pricing />

      <CTA />

      <Contact />

      <Footer />

    </div>
  );
}

export default Home;