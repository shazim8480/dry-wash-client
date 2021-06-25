import React from "react";
import winson from "../../../images/test-1.png";
import megan from "../../../images/test-2.png";
import camelia from "../../../images/test-3.png";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const testimonialData = [
  {
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae illum magnam qui excepturi libero.",
    img: winson,
    name: "Winson Herry",
    location: "California",
  },
  {
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae illum magnam qui excepturi libero.",
    img: camelia,
    name: "Camelia Ahsan",
    location: "Michigan",
  },
  {
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae illum magnam qui excepturi libero.",
    img: megan,
    name: "Megan Louis",
    location: "Louisiana",
  },
];

const Testimonial = () => {
  return (
    <section>
      <div className="testimonial-container py-5">
        <div className="row">
          <div className="col-md-11 offset-md-1">
            <h5 className="text-brand ms-5 pb-2">TESTIMONIAL</h5>
            <h2 className="ms-5">
              What Our Customers <br /> Say
            </h2>
          </div>
        </div>
        <div className="d-flex justify-content-evenly align-items-center my-5">
          <div className="row w-75">
            {testimonialData.map((testimonial) => (
              <TestimonialCard testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
