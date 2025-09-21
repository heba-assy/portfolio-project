export default function ExperienceCart({ icon, jopTitle, company, desc }) {
  return (
    <>
      <div data-aos="fade-up" className="flex gap-8">
        <div className="flex-shrink-0 size-16 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-xl">
          {icon}
        </div>
        <div className="rounded-xl bg-gray-50 p-6 text-start">
          <h3 className="text-xl font-semibold mb-2 font-main">{jopTitle}</h3>
          <p className="text-[var(--color-primary)] mb-3 font-medium">
            {company}
          </p>
          <p className="text-[var(--text)] ">
            {desc.map((point, index) => (
              <ul key={index} className="leading-relaxed">
                <li>{point}</li>
              </ul>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
