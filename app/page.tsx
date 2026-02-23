import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "./Sections/Hero";
import { About } from "./Sections/About";
import Whyus from "./Sections/Whyus";
import { Menu } from "./Sections/Menu";
import { Specials } from "./Sections/Specials";
import Events from "./Sections/Event";
import { Booking } from "./Sections/Booking";
import Testimonials from "./Sections/Testimonials";
import Gallery from "./Sections/Gallery";
import Chefs from "./Sections/Chefs";
import Contact from "./Sections/Contact";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <Whyus />
        <Menu />
        <Specials />
        <Events />
        <Booking />
        <Testimonials />
        <Gallery />
        <Chefs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
