import { services } from "@/constants";
import { ServiceCard } from "../cards";
import { SectionLayout } from "../ui";

const Services = () => {
  return (
    <SectionLayout className="flex flex-wrap justify-center gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </SectionLayout>
  );
};

export default Services;
