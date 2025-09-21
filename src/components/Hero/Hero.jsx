import {
  faChevronDown,
  faCode,
  faDownload,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import FloatingCircle from "../others/FloatingCircle/FloatingCircle";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <>
      <section
        data-aos="fade-up"
        className="bg-[var(--bg-section)] overflow-hidden"
        id="hero"
      >
        <div className="container-custom py-14 lg:py-22">
          <div className="grid lg:grid-cols-2">
            <div className="me space-y-7 text-center lg:text-left ">
              <div className="bg-[#DFF0F0] text-sm font-medium rounded-full text-[var(--color-primary)] py-2 px-4 inline-block mb-4 space-x-3">
                <FontAwesomeIcon icon={faCode} />
                <span>Available for Opportunities</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
                Heba Assy
              </h1>

              <h2 className="text-[var(--subtitle)] font-medium text-xl lg:text-2xl">
                Front-End Developer | React.js Specialist
              </h2>

              <p className="text-[var(--text)] text-lg">
                Building responsive and interactive web applications using
                modern technologies like React.js. Passionate about clean code,
                performance optimization, and delivering seamless user
                experiences. Exploring 3D visualization as a creative side
                interest.
              </p>

              <div className="Download space-x-2">
                <a
                  href="/files/Front_End_Developer.pdf"
                  download="Front_End_Developer.pdf"
                >
                  <button className="btn text-white transform transition-transform ease-in-out duration-500 hover:scale-105 py-3 px-6">
                    <FontAwesomeIcon icon={faDownload} className="mr-1" />
                    Download CV
                  </button>
                </a>

                <a href="#contact">
                  <button className="btn border border-[var(--title)] bg-transparent text-[var(--title)] hover:text-white hover:bg-[var(--title)] transform transition-all hover:duration-500 ease-in-out hover:scale-105 py-3 px-6 ">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                    Contact Me
                  </button>
                </a>
              </div>

              <div className="socials text-gray-500/50 *:hover:text-[var(--color-primary)] *:transition-colors *:duration-200 cursor-pointer text-2xl space-x-4 ">
                <a href="https://github.com/heba-assy/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="" /></a>
                <a href="https://www.linkedin.com/in/heba--assy/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="" /></a>
                <a href="https://wa.me/201096432452" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="" /></a>
                <a href="https://heba.assy.dev@outlook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} className="" /></a>
              </div>
            </div>

            <div className="animation flex items-center lg:justify-end justify-center mt-12 mb:mt-0">
              <div className="relative">
                {/* The big circle floating */}
                <div className="size-60 lg:size-80 rounded-full flex items-center justify-center bg-gradient-to-br animate-floating">
                  {/* White Circle inside */}
                  <div className="rounded-full bg-white size-44 lg:size-64 shadow-2xl flex items-center justify-center">
                    <span
                      className="text-8xl lg:text-9xl font-bold bg-clip-text"
                      style={{
                        background:
                          "linear-gradient(135deg, #0B2545 0%, #2BB6A3 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      HA
                    </span>
                  </div>
                </div>

                {/*-- Small floating circles --*/}
                <div
                  className="absolute -top-4 -right-4 size-20 bg-[#2BB6A3] rounded-full opacity-20 animate-floating"
                  style={{ animationDelay: -1 }}
                ></div>
                <div
                  className="absolute -bottom-4 -left-4 size-16 bg-[#0B2545] rounded-full opacity-20 animate-floating"
                  style={{ animationDelay: -2 }}
                ></div>
                <div
                  className="absolute top-1/2 -left-8 size-12 bg-[#33C1AE] rounded-full opacity-30 animate-floating"
                  style={{ animationDelay: -3 }}
                ></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20 text-2xl text-gray-500/50 *:hover:text-[var(--color-primary)] cursor-pointer animate-bounce">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </section>
    </>
  );
}
