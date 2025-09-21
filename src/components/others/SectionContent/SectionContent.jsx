import AfterLine from "../AfterLine/AfterLine";

export default function SectionContent({ title, parag }) {
  return (
    <>
      <div className="featured-content mb-16 text-center">
        <h2 className="text-4xl font-bold pb-5">{title}</h2>
        <AfterLine />
        <p className="text-[var(--text)] text-xl max-w-4xl mx-auto leading-relaxed">{parag}</p>
      </div>
    </>
  );
}
