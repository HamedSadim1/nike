import React from "react";

interface SectionLayoutProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "footer" | "nav" | "article" | "div";
}

const SectionLayout = ({
  children,
  className = "",
  id,
  as: Tag = "section",
}: SectionLayoutProps) => {
  return (
    <Tag id={id} className={`container-main ${className}`.trim()}>
      {children}
    </Tag>
  );
};

export default SectionLayout;
