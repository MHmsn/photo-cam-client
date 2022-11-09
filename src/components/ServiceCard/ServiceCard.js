import React from "react";
import { PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { name, img, details, _id, price } = service;
  return (
    <div>
      <div className="card h-full bg-gray-300 shadow-xl">
        <figure>
          <PhotoView src={img}>
          <img src={img} className="h-68 md:h-52 lg:h-44" alt="Course Banner" />
          </PhotoView>
        </figure>
        <div className="card-body bg-neutral text-white rounded-b-xl">
          <h2 className="card-title text-2xl">{name}</h2>
          <h2 className="card-title text-xl">Price: {price}</h2>
          <p className="mt-4">{details.slice(0, 100) + '...'}</p>
          <div className="card-actions justify-end mt-4">
            <Link to={`/services/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
