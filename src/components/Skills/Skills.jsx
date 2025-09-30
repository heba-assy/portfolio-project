import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionContent from "../others/SectionContent/SectionContent";
import TechnicalCart from "../others/TechnicalCart/TechnicalCart";
import {
  faClock,
  faCode,
  faComments,
  faCube,
  faLightbulb,
  faPalette,
  faRotate,
  faScrewdriverWrench,
  faTerminal,
  faUsersGear,
} from "@fortawesome/free-solid-svg-icons";
import SoftSkillsCart from "../others/SoftSkillsCart/SoftSkillsCart";

export default function Skills() {
  const title = "Skills";
  const parag =
    "Proficient in modern web technologies and frameworks used to build efficient, scalable, and user-friendly applications.";

  const techData = [
    {
      icon: <FontAwesomeIcon icon={faCode} />,
      title: "Frontend Development",
      color: "#2563EB",
      bgColor: "#DBEAFE",
      bgWidth: 40,
      skills: [
        { name: "React", level: 80 },
        { name: "JavaScript ES6+", level: 75 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      icon: <FontAwesomeIcon icon={faCube} />,
      title: "3D & Visualization",
      color: "#9333EA",
      bgColor: "#F3E8FF",
      bgWidth: 40,
      skills: [
        { name: "Blender", level: 80 },
        { name: "3D Modeling", level: 70 },
      ],
    },
    {
      icon: <FontAwesomeIcon icon={faTerminal} />,
      title: "Core Programming",
      color: "#16A34A",
      bgColor: "#DCFCE7",
      bgWidth: 40,
      skills: [{ name: "C++ & OOP", level: 70 }],
    },
    {
      icon: <FontAwesomeIcon icon={faScrewdriverWrench} />,
      title: "Tools & Workflow",
      color: "#EA580C",
      bgColor: "#FFEDD5",
      bgWidth: 40,
      skills: [
        { name: "Git / GitHub", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "npm", level: 75 },
      ],
    },
  ];

  const softData = [
    {
      icon: <FontAwesomeIcon icon={faComments} />,
      title: "Effective Communication",
      parag:
        "Strong ability to collaborate with cross-functional teams and clearly explain technical concepts.",
      skillLevel: 95,
    },
    {
      icon: <FontAwesomeIcon icon={faUsersGear} />,
      title: "Leadership",
      parag:
        "Experienced in leading technical teams, managing projects, and motivating members to achieve goals.",
      skillLevel: 90,
    },
    {
      icon: <FontAwesomeIcon icon={faLightbulb} />,
      title: "Problem Solving",
      parag:
        "Advanced skills in analyzing technical challenges and delivering creative, effective solutions.",
      skillLevel: 70,
    },
    {
      icon: <FontAwesomeIcon icon={faClock} />,
      title: "Time Management",
      parag:
        "Strong ability to organize time and priorities effectively, with proven capacity to work under pressure and meet tight deadlines.",
      skillLevel: 85,
    },
    {
      icon: <FontAwesomeIcon icon={faPalette} />,
      title: "Creativity",
      parag:
        "Innovative mindset in both design and development, with the ability to integrate modern technologies in unique and impactful ways.",
      skillLevel: 70,
    },
    {
      icon: <FontAwesomeIcon icon={faRotate} />,
      title: "Adaptability",
      parag:
        "Highly flexible in adopting new technologies, adjusting to diverse work environments, and thriving in fast-changing conditions.",
      skillLevel: 65,
    },
  ];
  return (
    <>
      <section
        id="skills"
        data-aos="fade-up"
        className="py-24 bg-[var(--bg-section)] "
      >
        <div className="container">
          <SectionContent title={title} parag={parag} />
          {/*----- Technical Skills ------------ */}
          <h3 className="font-main font-semibold text-2xl mb-8 text-center">
            Technical Skills
          </h3>

          <div
            data-aos="fade-up"
            className="technical-skills max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12"
          >
            {techData.map((cart, index) => (
              <TechnicalCart
                key={index}
                icon={cart.icon}
                color={cart.color}
                bgColor={cart.bgColor}
                bgWidth={cart.bgWidth}
                title={cart.title}
                skills={cart.skills}
              />
            ))}
          </div>

          {/*----- Soft Skills ------------ */}
          <h3 className="font-main font-semibold text-2xl mb-8 text-center">Soft Skills</h3>

          <div
            data-aos="fade-up"
            className="soft-skills max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 mb-12 gap-6"
          >
            {softData.map((cart, index) => (
              <SoftSkillsCart
                key={index}
                icon={cart.icon}
                color="var(--color-primary)"
                bgWidth="100"
                title={cart.title}
                parag={cart.parag}
                skillLevel={cart.skillLevel}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
