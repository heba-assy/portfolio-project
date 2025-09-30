import SectionContent from "../others/SectionContent/SectionContent";
import ExperienceCart from "../others/ExperienceCart/ExperienceCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser, faCube, faGears, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function Experiences() {
  const title = "Professional Experience";
  const parag =
    "Throughout my career, I’ve taken on diverse roles that strengthened my skills in development, leadership, and creative problem-solving.";

  const exCart = [
    {
      icon: <FontAwesomeIcon icon={faChalkboardUser} />,
      jobTitle: "Programming Instructor",
      company: "iSchool (Part-time) • 2024",
      desc: [
        "Delivered programming fundamentals (Code.org, JavaScript, Web basics) to Grade 4 students.",
        "Translated complex technical concepts into simple, engaging lessons.",
        "Earned an average rating of 4.5/5 from students and parents.",
      ],
    },
    {
      icon: <FontAwesomeIcon icon={faCube} />,
      jobTitle: "Freelance 3D Artist",
      company: "Independent • 2023 - 2024",
      desc: [
        "Designed and marketed 3D models & digital assets online.",
        "Specialized in product visualization and simple architectural renders.",
      ],
    },
    {
      icon: <FontAwesomeIcon icon={faGears} />,
      jobTitle: "Operations Assistant",
      company: "Farasha Clothing Business – 2023",
      desc: [
        "Handled logistics (order tracking, Excel reporting, shipment coordination).",
        "Managed product inventory and supported marketing with flyers & media prep.",
      ],
    },
    {
      icon: <FontAwesomeIcon icon={faUsers} />,
      jobTitle: "Team Leader",
      company: "Gmind (3D Art) • 2022",
      desc: [
        "Led a team of 3D artists, assigning tasks and creating training materials.",
        "Delivered tutorials and coordinated projects to meet deadlines.",
      ],
    },
  ];
  return (
    <>
      <section id="experiences" data-aos="fade-up" className="py-24 text-center ">
        <div className="container">
          <SectionContent title={title} parag={parag} />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* ---- The Line (absolute) */}
              <div className="absolute left-8 -z-1 top-0 bottom-0 w-[3px] bg-[var(--color-primary)] "></div>

              <div className="space-y-12">
                {exCart.map((item, index) => (
                  <ExperienceCart
                    key={index}
                    icon={item.icon}
                    jopTitle={item.jobTitle}
                    company={item.company}
                    desc={item.desc}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
