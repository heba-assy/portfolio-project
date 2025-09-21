import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutCart({icon, title, parag}) {
  return (
    <>
      <div data-aos="fade-up" className="bg-gray-50 text-center p-8 rounded-xl">
        <div className="size-16 rounded-full flex items-center justify-center bg-[var(--color-primary)] m-auto mb-4">
          <FontAwesomeIcon icon={icon} className="text-2xl text-white" />
        </div>

        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        <p className="text-[var(--text)] ">
          {parag}
        </p>
      </div>
    </>
  );
}
