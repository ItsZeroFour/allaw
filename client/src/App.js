import Header from "./components/header/Header";
import Head from "./components/head/Head";
import Supervisor from "./components/supervisor/Supervisor";
import Advantages from "./components/advantages/Advantages";
import Services from "./components/services/Services";
import Companies from "./components/companies/Companies";
import AdvantagesSecond from "./components/advantages_second/AdvantagesSecond";
import Price from "./components/price/Price";
import SinglePrice from "./components/single_price/SinglePrice";
import Slider from "./components/slider/Slider";
import About from "./components/about/About";
import ContactUs from "./components/contact_us/ContactUs";
import Team from "./components/team/Team";
import Footer from "./components/footer/Footer";
import { useEffect, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
      });

      return () => scroll.destroy();
    }
  }, []);

  return (
    <div className="App">
      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <div className="page" data-scroll-container ref={containerRef}>
          <Header />

          <main>
            <Head />
            <Supervisor />
            <Advantages />
            <Services />
            <Companies />
            <AdvantagesSecond />
            <Price />
            <SinglePrice />
            <Slider />
            <About />
            <ContactUs />
            <Team />
          </main>

          <Footer />
        </div>
      </LocomotiveScrollProvider>
    </div>
  );
}

export default App;
