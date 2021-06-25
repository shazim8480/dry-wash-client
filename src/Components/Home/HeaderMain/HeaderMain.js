import React from "react";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div style={{ zIndex: "2" }} className="col-md-6 offset-md-1">
        <h1 className="text-white">
          DRY WASH CLEANING & <br /> LAUNDRY SERVICES
        </h1>
        <p className="textSecondary text-white py-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          fuga totam quae soluta quis vitae.
        </p>
        <button className="btn btn-brand">Learn More</button>
      </div>
    </main>
  );
};

export default HeaderMain;
