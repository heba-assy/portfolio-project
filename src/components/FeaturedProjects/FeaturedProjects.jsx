import ProjectCart from "../others/ProjectCart/ProjectCart";
import SectionContent from "../others/SectionContent/SectionContent";
import ecommerceProjectImg from "../../assets/imgs/ecommerceProjectImg.jpg";
import portFolioProjectImg from "../../assets/imgs/portfolioProjectImg.jpg"

export default function FeaturedProjects() {
  const title = "Featured Projects";
  const parag =
    "A showcase of my recent work, featuring modern web applications built with cutting-edge technologies and thoughtful user experience design.";

  const projectCart = [
    {
      imgCover: ecommerceProjectImg,
      category: "Featured",
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with React and Tailwind CSS, featuring seamless shopping cart functionality, intuitive product filtering, and a fully responsive design powered by Context API for smooth state management.",
      tags: [
        { name: "React", text: "text-blue-600", bg: "bg-blue-100" },
        { name: "Tailwind CSS", text: "text-cyan-600", bg: "bg-cyan-100" },
        { name: "Context API", text: "text-purple-600", bg: "bg-purple-100" },
        { name: "Responsive", text: "text-green-600", bg: "bg-green-100" },
      ],
      links: 
        {
          githubLink: "https://github.com/heba-assy/e-commerce-app",
          demoLink: "https://heba-assy.github.io/e-commerce-app/",
        },
    },
    {
      imgCover: portFolioProjectImg,
      category: "Featured",
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio website built with React and Tailwind CSS, featuring smooth form handling with Formik & Yup, elegant scroll animations with AOS, real-time notifications with React-Toastify, and an integrated contact form powered by EmailJS.",
      tags: [
        { name: "React", text: "text-blue-600", bg: "bg-blue-100" },
        { name: "Tailwind CSS", text: "text-cyan-600", bg: "bg-cyan-100" },
        { name: "Formik & Yup", text: "text-purple-600", bg: "bg-purple-100" },
        { name: "Responsive", text: "text-green-600", bg: "bg-green-100" },
        { name: "EmailJS", text: "text-cyan-600", bg: "bg-cyan-100" },
      ],
      links: {githubLink: "https://github.com/heba-assy/e-commerce-app",},
    },
  ];
  return (
    <>
      <section
        id="projects"
        data-aos="fade-up"
        className="py-24 bg-[var(--bg-section)]"
      >
        <div className="container">
          <SectionContent title={title} parag={parag} />
          <div
            data-aos="fade-up"
            className="project-carts grid lg:grid-cols-2 gap-12"
          >
            {projectCart.map((project, index) => (
              <ProjectCart
                key={index}
                imgCover={project.imgCover}
                category={project.category}
                title={project.title}
                description={project.description}
                tags={project.tags}
                links={project.links}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
