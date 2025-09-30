import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <section id="footer" className="bg-[var(--title)] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-8">
            {/*------ About ------- */}
            <div className="md:col-span-2 w-full mb-5 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-[var(--color-primary)] flex justify-center items-center text-white size-10 rounded-lg">
                  <span className="font-bold">HA</span>
                </div>
                <span className="font-main font-semibold text-white text-xl">
                  Heba Assy
                </span>
              </div>

              <p className="text-gray-300 mb-4 w-3/4">
                Front-End Developer focused on React, with strong programming
                skills and expanding knowledge in 3D visualization.
              </p>

              <div className="socials text-gray-300 *:hover:text-[var(--color-primary)] *:transition-colors *:duration-300 cursor-pointer text-xl space-x-2">
                <a
                  href="https://github.com/heba-assy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/heba--assy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="" />
                </a>
                <a
                  href="https://wa.me/201096432452"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="" />
                </a>
                <a
                  href="https://heba.assy.dev@outlook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="" />
                </a>
              </div>
            </div>
            {/*------ Quick Links ------- */}
            <div className="mb-5 md:mb-0">
              <h4 className="font-main font-bold text-lg mb-4">Quick Links</h4>
              <div className="*:flex *:flex-col space-y-2 *:text-gray-300 *:hover:text-[var(--color-primary)] *:transition-colors *:duration-300 *:cursor-pointer">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
            {/*------ Services ------- */}
            <div>
              <h4 className="font-main font-bold text-lg mb-4">Services</h4>
              <div className="*:flex *:flex-col space-y-2 *:text-gray-300 ">
                <span>React.js Development</span>
                <span>Responsive Design</span>
                <span>Front-End Consultation</span>
                <span>3D Modeling (Blender)</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300 text-sm">
              © 2024 Heba Assy. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
