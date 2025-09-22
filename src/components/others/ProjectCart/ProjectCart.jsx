import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCart({
  imgCover,
  links,
  title,
  description,
  category,
  tags,
}) {
  return (
    <>
      <div className="rounded-2xl shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-2 duration-300 bg-white overflow-hidden cursor-pointer">
        <img src={imgCover} className="w-full h-80 object-cover object-top" />
        <div className="p-8 space-y-6 text-start">
          <div className="flex items-center justify-between">
            <span className="bg-[#2bb6a31a] py-1 px-3 rounded-full text-sm font-medium text-[var(--color-primary)]">
              {category}
            </span>
            <div className="icons text-gray-500/50 space-x-1 text-xl">
              {links.githubLink && (
                <a
                  href={links.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              )}
              {links.demoLink && (
                <a
                  href={links.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              )}
            </div>
          </div>

          <h3 className="font-bold text-3xl">{title}</h3>

          <p className="text-[var(--text)]">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`${tag.bg} py-1 px-3 rounded-full text-sm font-medium ${tag.text}`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
