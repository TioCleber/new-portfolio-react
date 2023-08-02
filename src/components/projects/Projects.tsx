interface Props {
  title: string;
  imageLink: string;
  imageSrc: string;
  dangerouslySetInnerHTML: string;
}

const Projects = ({
  dangerouslySetInnerHTML,
  imageLink,
  imageSrc,
  title,
}: Props) => {
  return (
    <div>
      <h2>{title}</h2>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <a href={imageLink} rel="noreferrer" target="_blank">
            <img
              src={imageSrc}
              alt=""
              loading="lazy"
              width={1920}
              height={937}
              style={{ height: "auto", width: "100%" }}
            />
          </a>
        </div>

        <div
          style={{ height: "auto", width: "100%" }}
          dangerouslySetInnerHTML={{ __html: dangerouslySetInnerHTML }}
        />
      </div>
    </div>
  );
};

export default Projects;
