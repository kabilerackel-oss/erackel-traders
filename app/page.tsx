import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import WhyChooseUs from "../components/WhyChooseUs";
import ExportProcess from "../components/ExportProcess";
import Industries from "../components/Industries";
import GlobalPresence from "../components/GlobalPresence";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <ExportProcess />
      <Industries />
      <GlobalPresence />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}