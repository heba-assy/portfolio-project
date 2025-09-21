export default function AdditionalCart({
  icon,
  iconColor,
  bgColor,
  title,
  desc,
}) {
  return (
    <>
      <div className="rounded-xl p-6 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
        <div
          className="size-12 rounded-full flex items-center justify-center mb-4 mx-auto"
          style={{ background: bgColor, color: iconColor }}
        >
          {icon}
        </div>
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-sm text-[var(--text)]">{desc}</p>
      </div>
    </>
  );
}
