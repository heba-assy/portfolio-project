import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function toggleMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <>
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-300 border-b border-gray-200 py-3 custom-heading">
        <div className="container">
          <div className="flex items-center justify-between">
            {/*----- Logo --------- */}
            <div className="flex items-center gap-2">
              <div className="bg-[var(--color-primary)] flex justify-center items-center text-white size-7 w-10 h-10 rounded-lg">
                <span className="font-bold text-lg">HA</span>
              </div>
              <span className="font-semibold text text-xl">Heba Assy</span>
            </div>

            <ul className="hidden lg:flex items-center font-medium gap-8 text-[var(--text)] *:transition-colors *:duration-200">
              <li className="hover:text-[var(--color-primary)]">
                <a href="#hero">Home</a>
              </li>
              <li className="hover:text-[var(--color-primary)]">
                <a href="#about">ِAbout</a>
              </li>
              <li className="hover:text-[var(--color-primary)]">
                <a href="#projects">Projects</a>
              </li>
              <li className="hover:text-[var(--color-primary)]">
                <a href="#experiences">Experience</a>
              </li>
              <li className="hover:text-[var(--color-primary)]">
                <a href="#skills">Skills</a>
              </li>
              <li className="hover:text-[var(--color-primary)]">
                <a href="#education">Education</a>
              </li>
              <li className="btn text-white">
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <button
              className="text-xl lg:hidden cursor-pointer hover:text-[var(--color-primary)] hover:transition-colors hover:duration-200"
              onClick={toggleMenu}
            >
              {isOpenMenu ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>

          {/* off Canvas */}

          <div className={`text-center lg:hidden transition-all duration-500 ease-in-out ${isOpenMenu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
            <ul className="*:py-3 ">
              <li className="hover:text-[var(--color-primary)] text-[var(--text)] border-b border-gray-100">
                <a href="#hero" onClick={()=>{
                  setIsOpenMenu(false)
                }}>Home</a>
              </li>
              <li className="hover:text-[var(--color-primary)] text-[var(--text)] border-b border-gray-100">
                <a href="#about" onClick={()=>{
                  setIsOpenMenu(false)
                }}>ِAbout</a>
              </li>
              <li className="hover:text-[var(--color-primary)] text-[var(--text)] border-b border-gray-100">
                <a href="#projects" onClick={()=>{
                  setIsOpenMenu(false)
                }}>Projects</a>
              </li>
              <li className="hover:text-[var(--color-primary)] text-[var(--text)] border-b border-gray-100">
                <a href="#experience" onClick={()=>{
                  setIsOpenMenu(false)
                }}>Experience</a>
              </li>
              <li className="hover:text-[var(--color-primary)] text-[var(--text)] border-b border-gray-100">
                <a href="#skills" onClick={()=>{
                  setIsOpenMenu(false)
                }}>Skills</a>
              </li>
              <li className="hover:text-[var(--color-primary)] text-[var(--text)]">
                <a href="#education" onClick={()=>{
                  setIsOpenMenu(false)
                }}>Education</a>
              </li>
              <li className="btn text-white">
                <a href="#contact" onClick={()=>{
                  setIsOpenMenu(false)
                }}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
