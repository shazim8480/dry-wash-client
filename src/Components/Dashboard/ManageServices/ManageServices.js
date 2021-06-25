import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import axios from "axios";
const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const ManageServices = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange", // this triggers validation event on change//
  });
  const [imageURL, setIMageURL] = useState(null);

  const onSubmit = (data) => {
    const serviceData = {
      name: data.name,
      description: data.description,
      price: data.price,
      imageURL: imageURL,
    };
    const url = `http://localhost:4000/addService`;
    console.log(serviceData);

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceData),
    }).then((res) => {
      console.log("server side response", res);
    });
  };

  // for image handling //////////////////////////////////
  const handleImageUpload = (event) => {
    // console.log(event);
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "22477639cefee084ec3b3ca78f7fdfd2");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        // console.log(response);
        setIMageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8 py-5 offset-md-1 ">
          <h2 className="py-3">Add Service</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Service Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="form-control"
                id="name"
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Description
              </label>
              <input
                {...register("description", { required: true })}
                type="text"
                className="form-control"
                id="description"
              />
              {errors.description && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Price
              </label>
              <input
                {...register("price", { required: true })}
                type="text"
                className="form-control"
                id="price"
              />
              {errors.price && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Upload Here
              </label>
              <input
                name="Upload Image"
                type="file"
                className="form-control"
                onChange={handleImageUpload}
              />
            </div>

            <button type="submit" className="btn btn-brand">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ManageServices;
