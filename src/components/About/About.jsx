import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutCart from "../others/AboutCart/AboutCart";
import AfterLine from "../others/AfterLine/AfterLine";
import {
  faCode,
  faCube,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import SectionContent from "../others/SectionContent/SectionContent";

export default function About() {
  const mainTitle = "About Me";
  const mainParag =
    "Front-end developer specialized in React with experience in designing interactive 3D scenes and product visualization. Passionate about creating seamless user experiences through clean code and innovative design solutions.";
  
  const cart = {
    title: {
      t1: "Clean Code",
      t2: "UI & 3D Exploration",
      t3: "Responsive Design",
    },
    parag: {
      p1: "Writing maintainable, scalable, and efficient code following best practices and modern standards.",
      p2: "Exploring 3D product visualization and creative design to expand user experience possibilities.",
      p3: "Building responsive, mobile-first interfaces that adapt seamlessly across all devices and browsers.",
    },
  };
  return (
    <>
      <section id="about" data-aos="fade-up" className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl m-auto">
            <SectionContent title={mainTitle} parag={mainParag}/>

            <div className="about-carts grid md:grid-cols-3 gap-8">
              <AboutCart
                icon={faCode}
                title={cart.title.t1}
                parag={cart.parag.p1}
              />
              <AboutCart
                icon={faCube}
                title={cart.title.t2}
                parag={cart.parag.p2}
              />
              <AboutCart
                icon={faMobileScreenButton}
                title={cart.title.t3}
                parag={cart.parag.p3}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
