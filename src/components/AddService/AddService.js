import React, { useEffect } from "react";
import toast from "react-hot-toast";

const AddService = () => {
  useEffect(() => {
    document.title = "Add Service - Photo Cam";
  }, []);

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.photoURL.value;
    const details = form.details.value;
    const price = `$${form.price.value}`;

    const service = {
      name,
      img,
      details,
      price,
    };

    fetch("https://service-server-seven.vercel.app/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Service Added");
          form.reset();
        }
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="min-h-screen text-start my-10">
      <h2 className="text-3xl text-center">Add a service</h2>
      <form onSubmit={handleAddService}>
        <div className="my-4">
          <label>
            Name of the Service
            <br />
            <input
              name="name"
              type="text"
              placeholder="Enter name of the Service"
              className="p-2 rounded-lg w-full text-black border-2"
              required
            ></input>
          </label>
        </div>
        <div className="my-4">
          <label>
            Photo URL
            <br />
            <input
              name="photoURL"
              type="text"
              placeholder="Enter Photo URL"
              className="p-2 rounded-lg w-full text-black border-2"
              required
            ></input>
          </label>
        </div>
        <div className="my-4">
          <label>
            Details
            <br />
            <input
              name="details"
              type="text"
              placeholder="Enter Details of the Service"
              className="p-2 rounded-lg w-full text-black border-2"
              required
            ></input>
          </label>
        </div>
        <div className="my-4">
          <label>
            Price
            <br />
            <input
              name="price"
              type="number"
              placeholder="Enter Price of the Service in $"
              className="p-2 rounded-lg w-full text-black border-2"
              required
            ></input>
          </label>
        </div>
        <div>
          <button className="btn btn-primary" type="submit">
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
