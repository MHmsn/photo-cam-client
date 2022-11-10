import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyReviewCard = ({ review, reviews, setReviews }) => {
  const { reviewerImg, reviewerName, comment, reviewDate, _id } = review;

  const handleDelete = (id) => {
    fetch(`https://service-server-seven.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("deleted successfully");
          const remaining = reviews.filter((rvw) => rvw._id !== id);
          setReviews(remaining);
        }
      });
  };
  
  
  return (
    <div className="text-start my-5 border-2 rounded-xl p-8">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex items-center">
          <img src={reviewerImg} className=" rounded-full w-9 text-sm" alt="" />
          <h2 className="ml-3">{reviewerName}</h2>
        </div>
        <p className=" text-gray-400 mt-5">{reviewDate}</p>
      </div>

      <p className="my-10">{comment}</p>

      <div className="mb-10">
        <Link to={`/editreview/${_id}`}>Edit</Link>
        <button
          className="btn btn-primary ml-5"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyReviewCard;
