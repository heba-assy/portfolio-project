import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";

export default function TechnicalCart({ icon, title, color, bgColor, bgWidth, skills }) {
  return (
    <>
      <div  className=" bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl cursor-pointer">
        <div className="size-16 flex items-center justify-center rounded-full mx-auto mb-4 text-2xl" style={{background: bgColor, color: color}}>
          {icon}
        </div>
        <h4 className="mb-6 text-lg font-semibold font-main">{title}</h4>

        <div>
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-between text-sm mb-3">
              <span className="text-[var(--text)] mb-0 text-sm">{skill.name}</span>
              <ProgressBar color={color} level={skill.level} bgWidth={bgWidth}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
