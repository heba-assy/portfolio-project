import ProgressBar from "../ProgressBar/ProgressBar";

export default function SoftSkillsCart({ icon, color, bgWidth, title, parag, skillLevel }) {
  return (
    <>
      <div className="shadow-lg hover:shadow-xl p-6 bg-white transform hover:-translate-y-1 transition-all duration-300 space-y-4 rounded-xl cursor-pointer">
        <div className="flex items-center gap-4">
          <div className="size-12 flex items-center justify-center rounded-full bg-[#2bb6a31a] text-[var(--color-primary)] text-xl">
            {icon}
          </div>
          <h4 className="font-main font-semibold text-lg">{title}</h4>
        </div>
        <p className="text-[var(--text)] text-sm leading-relaxed text-start">
          {parag}
        </p>
        <ProgressBar color={color} level={skillLevel} bgWidth={bgWidth}/>
      </div>
    </>
  );
}
