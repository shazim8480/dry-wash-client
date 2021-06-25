import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="col-md-4">
      <div class="card text-dark bg-light mb-3" style={{ maxWidth: "18rem" }}>
        <div class="card-body  text-center">
          <p class="card-text pb-4 pt-2 text-secondary">
            {testimonial.description}
          </p>
          {/* <h5 class="card-title">Light card title</h5> */}
          <div className="row">
            <div className="d-flex justify-content-evenly">
              <div className="testimonial-img">
                <img style={{ height: "50px" }} src={testimonial.img} alt="" />
              </div>

              <div className="testimonial-info">
                <h6 style={{ color: "#1CC7C1" }}>{testimonial.name}</h6>
                <small className="text-secondary">{testimonial.location}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
