import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/services`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, [services]);
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h5 className="text-brand">OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="my-5 pt-3 row w-75">
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
