import React from "react";
import delivery from "../../../images/delivery.jpg";

const FeaturedService = () => {
  return (
    <section className="mt-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-1">
            <img
              style={{ height: "500px", width: "400px" }}
              className="img-fluid"
              src={delivery}
              alt=""
            />
          </div>
          <div className="col-md-6 offset-md-1 mt-4">
            <h2>
              Home delivery
              <br /> the best laundry service.
            </h2>
            <p className="py-4 pe-5 text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              perferendis, esse quas tenetur debitis itaque libero, fugiat cum
              dolores veniam est dolorum voluptatibus accusantium officia porro
              atque deleniti obcaecati nemo quam, aperiam nesciunt quia ab
              laboriosam.est dolorum voluptatibus accusantium officia porro
              atque deleniti obcaecati nemo quam, aperiam nesciunt quia ab
              laboriosam.
            </p>
            <button class="btn btn-brand">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
