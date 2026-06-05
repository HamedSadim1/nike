import React from "react";

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const PageSection = ({ children, className = "", id }: PageSectionProps) => {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};

export default PageSection;
