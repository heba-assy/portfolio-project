import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionContent from "../others/SectionContent/SectionContent";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";
import { faCertificate, faCube, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Education.css";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import EducationCart from "../others/EducationCart/EducarionCart";
import AdditionalCart from "../others/AdditionalCart/AdditionalCart";

export default function Education() {
  const title = "Education & Certifications";
  //Additional Certifications

  //Web Development Bootcamp –

  //Blender Basics – Udemy (Year?)

  //3D Character Design – Udemy (Year?)
  const parag =
    "Continuous learning through formal education and professional development to stay ahead of industry trends.";

  const eductionData = [
    {
      icon: <FontAwesomeIcon icon={faGraduationCap} />,
      bgIcon: "var(--color-primary)",
      educatinTitle: "Bachelor's Degree",
      educationSubTitle:
        "Management Information Systems (MIS) - Alexandria University",
      parag:
        "Graduation Project: VR Bank – Interactive VR game for financial literacy (Team Leader & 3D Art).",
      history: "2018 - 2022",
    },
    {
      icon: <FontAwesomeIcon icon={faCertificate} />,
      bgIcon: "var(--title)",
      educatinTitle: "Route Academy",
      multiple: [
        {
          subTitle: "Front-End Development Nanodegree – 2025",
          parag: "Route Academy – React, Tailwind, API integration",
        },
        {
          subTitle: "Programming Fundamentals – 2024",
          parag:
            "Solid base in C++, OOP, SOLID principles, and Design Patterns.",
        },
      ],
      history: "2024 - 2025",
    },
  ];

  const additionalData = [
    {
      icon: <FontAwesomeIcon icon={faReact} />,
      iconColor: "#2563eb",
      bgColor: "#dbeafe",
      title: "Web Development Bootcamp",
      desc: "Udemy (2021)",
    },
    {
      icon: <FontAwesomeIcon icon={faCube} />,
      iconColor: "#9333ea",
      bgColor: "#f3e8ff",
      title: "Blender Basics",
      desc: "Udemy (2022)",
    },
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      iconColor: "#16a34a",
      bgColor: "#dcfce7",
      title: "3D Cartoon Character Design",
      desc: "Udemy (2022)",
    },
  ];
  return (
    <>
      <section id="education" data-aos="fade-up" className="py-24">
        <div className="container-custom">
          <SectionContent title={title} parag={parag} />

          <div
            data-aos="fade-up"
            className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          >
            {eductionData.map((cart, index) => (
              <EducationCart
                key={index}
                icon={cart.icon}
                bgIcon={cart.bgIcon}
                educatinTitle={cart.educatinTitle}
                educationSubTitle={cart.educationSubTitle}
                parag={cart.parag}
                history={cart.history}
                multiple={cart.multiple}
              />
            ))}
          </div>

          {/*----- Additional Certifications -------- */}
          <div data-aos="fade-up" className="mt-16 max-w-6xl mx-auto">
            <h3 className="font-bold text-2xl font-main mb-8 text-center">
              Additional Certifications
            </h3>
            <div data-aos="fade-up" className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-sm mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
              {additionalData.map((cart, index) => (
                <AdditionalCart
                  key={index}
                  icon={cart.icon}
                  iconColor={cart.iconColor}
                  bgColor={cart.bgColor}
                  title={cart.title}
                  desc={cart.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
