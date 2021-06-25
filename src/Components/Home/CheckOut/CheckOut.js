import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../../App";
import UserSideBar from "../UserSideBar/UserSideBar";
const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const CheckOut = () => {
  const [loggedInUser] = useContext(UserContext);
  ///FINDING THE individual book id for showing the details for each book
  const { id } = useParams();
  const [serviceData, setServiceData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:4000/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
        console.log(data);
      });
  }, [id]);

  // handle booking event handler//
  const handleOrder = () => {
    //   copying all booking infos into this button handler using spread operator//
    const orderDetails = {
      ...loggedInUser,
      ...serviceData,
      orderTime: new Date(),
    };
    fetch("http://localhost:4000/addServiceOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails), // attention //
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    // <div>
    //   <h3>{serviceData.name}</h3>
    //   <h3>{serviceData.price}</h3>
    // </div>
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <UserSideBar />
        </div>
        <div className="col-md-8 py-5 offset-md-1 ">
          <h2 className="py-3">Add Service</h2>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Service Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={serviceData.name}
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="price"
                value={serviceData.price}
              />
            </div>

            <button
              onClick={handleOrder}
              type="submit"
              className="btn btn-brand"
            >
              Confirm Payment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
