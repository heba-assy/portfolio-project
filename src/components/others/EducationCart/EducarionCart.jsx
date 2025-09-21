import { faCalendar, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EducationCart({
  icon,
  bgIcon,
  educatinTitle,
  educationSubTitle,
  parag,
  history,
  multiple
}) {
  return (
    <>
      <div className="bg-education-gradient p-8 rounded-2xl text-start">
        <div className={`flex gap-6 mb-6 ${multiple ? "items-start" : "items-center"}`}>
          <div
            className={`flex-shrink-0 size-16 rounded-full text-2xl text-white flex items-center justify-center`}
            style={{background: bgIcon}}
          >
            {icon}
          </div>

          <div className="space-y-1">
            <h3 className="font-main font-bold text-xl">{educatinTitle}</h3>
            {multiple ? (
              multiple.map((item, index) => (
                <div>
                  <p key={index} className="text-[var(--text)] text-sm mb-1">
                    {item.subTitle}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {item.parag}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-[var(--text)] text-sm">{educationSubTitle}</p>
            )}
          </div>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {parag}
        </p>

        <div className="text-[var(--color-primary)] flex items-center gap-2">
          <FontAwesomeIcon icon={faCalendar} />
          <span className="font-medium">{history}</span>
        </div>
      </div>
    </>
  );
}
