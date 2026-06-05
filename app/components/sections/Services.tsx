import { services } from "@/constants";
import { ServiceCard } from "../cards";

const Services = () => {
  return (
    <section className="mx-auto flex max-w-360 flex-wrap justify-center gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
