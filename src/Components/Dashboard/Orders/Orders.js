import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../App";
const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const Orders = () => {
  const [loggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]); // must set it to empty array in order for "orders.map" to work//

  // reading the api from database//
  useEffect(() => {
    //sending query parameters for separate user order bookings//
    fetch("http://localhost:4000/orders?email=" + loggedInUser.email, {
      method: "GET",
      headers: {
        contentType: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [loggedInUser.email]);
  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8 offset-md-1">
          <h3>All Orders</h3>

          {orders.map((order) => (
            <li key={order._id} order={order}>
              {" "}
              {loggedInUser.email}
            </li>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Orders;
