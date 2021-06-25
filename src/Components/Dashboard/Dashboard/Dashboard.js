import React, { useEffect, useState } from "react";
// import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../Sidebar/Sidebar";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //   useEffect(() => {
  //     fetch("http://localhost:5000/appointmentsByDate", {
  //       method: "POST",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify({ date: selectedDate }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setAppointments(data));
  //   }, [selectedDate]);

  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 d-flex justify-content-center">
          <h2>Welcome,</h2>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
