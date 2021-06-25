import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const ServiceCard = ({ service }) => {
  let history = useHistory();
  const handleClickToCheckOut = () => {
    history.push("/checkOut/" + service._id);
  };
  return (
    <div className="col-lg-4">
      <div className="card text-center" style={{ width: "18rem;" }}>
        <img
          style={{ height: "2rem;" }}
          src={service.imageURL}
          className="img-fluid card-img-top"
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title">{service.name}</h5>
          <h5 className="text-brand card-title">{service.price}</h5>
          <p className="card-text">{service.description}</p>
          <Link onClick={handleClickToCheckOut} className="btn btn-brand">
            Select
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
