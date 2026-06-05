interface SectionHeadingProps {
  titlePrefix?: string;
  titleHighlight?: string;
  titleHighlight2?: string;
  titleSuffix: string;
  alignCenter?: boolean;
  capitalize?: boolean;
  className?: string;
  as?: "h2" | "h3";
}

const SectionHeading = ({
  titlePrefix,
  titleHighlight,
  titleHighlight2,
  titleSuffix,
  alignCenter,
  capitalize: doCapitalize,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) => {
  return (
    <Tag
      className={`font-palanquin text-4xl font-bold ${
        doCapitalize ? "capitalize" : ""
      } ${alignCenter ? "text-center" : ""} ${className ?? ""}`}
    >
      {titlePrefix && <>{titlePrefix} </>}
      {titleHighlight && (
        <span className="text-coral-red">{titleHighlight} </span>
      )}
      {titleHighlight2 && (
        <span className="text-coral-red">{titleHighlight2} </span>
      )}
      {titleSuffix}
    </Tag>
  );
};

export default SectionHeading;
