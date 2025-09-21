import SectionContent from "../others/SectionContent/SectionContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function Contact() {
  const nameRegex = /^[A-Za-z\s]+$/;

  function handleSubmitting(values) {
    emailjs
      .send(
        "service_3vhdygo",
        "template_vvn1eyi",
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
        "hAzhSwHhlBEk3izpY"
      )
      .then(() => {
        toast.success("Message sent successfully!");
      })
      .catch(() => {
        toast.error("Failed to send message!");
      });
  }

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .matches(nameRegex, "Name can only contain letters and spaces"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    subject: yup.string().required("Please select a subject"),
    message: yup
      .string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: handleSubmitting,
  });
  const title = "Let's Work Together";
  const parag =
    "Ready to bring your ideas to life? Let's discuss your project and create something amazing together.";
  return (
    <>
      <section id="contact" data-aos="fade-up" className="bg-gray-100 py-24">
        <div className="container-custom">
          <SectionContent title={title} parag={parag} />

          <div className="grid lg:grid-cols-2 gap-16">
            <div
              data-aos="fade-up"
              className="bg-white shadow-lg rounded-2xl p-8 sticky h-fit"
            >
              <h3 className="font-main font-bold text-2xl mb-6">
                Get in Touch
              </h3>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-xl">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <a
                      href="https://heba.assy.dev@outlook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text)] hover:text-[var(--color-primary)] transition-colors duration-200"
                    >
                      heba.assy.dev@outlook.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-xl">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                  <div>
                    <h4 className="font-bold">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/heba--assy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text)] hover:text-[var(--color-primary)] transition-colors duration-200"
                    >
                      linkedin.com/in/heba--assy
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-xl">
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                  <div>
                    <h4 className="font-bold">GitHub</h4>
                    <a
                      href="https://github.com/heba-assy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text)] hover:text-[var(--color-primary)] transition-colors duration-200"
                    >
                      github.com/heba-assy
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-xl">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <span className="text-[var(--text)]">
                      Alexandria, Egypt
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="bg-white shadow-lg rounded-2xl p-8"
            >
              <h3 className="font-main font-bold text-2xl mb-6">
                Get in Touch
              </h3>
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-600"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="input-form"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm">{formik.errors.name}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-600"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="input-form"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-600"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="input-form text-gray-700 appearance-none cursor-pointer text-sm"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">-- Select a subject --</option>
                    <option value="web">Web development Project</option>
                    <option value="3d">3D Visualization & Art</option>
                    <option value="teaching">
                      Programming / Tech Teaching
                    </option>
                    <option value="other">Other (please specify)</option>
                  </select>

                  {formik.touched.subject && formik.errors.subject && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.subject}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    className="input-form max-h-60 min-h-20"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn w-full text-white text-bold py-4 transform transition-transform hover:scale-105"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-1" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
