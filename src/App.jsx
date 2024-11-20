import { useEffect } from "react";
import Navbar from "./components/NavBar";
import PromotionalComponent from "./components/PromotionalComponent";
import Join from "./components/Join";
import CoachBenefits from "./components/CoachBenefits";
import KeyFeatures from "./components/KeyFeatures";
import HowItWorks from "./components/Works";
import CoachTestimonial from "./components/Coachsays";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className=" text-white bg-black">
      <Navbar />
      <PromotionalComponent />
      <Join />
      <CoachBenefits />
      <KeyFeatures />
      <HowItWorks />
      <CoachTestimonial />
      <Footer />
    </div>
  );
}

export default App;
