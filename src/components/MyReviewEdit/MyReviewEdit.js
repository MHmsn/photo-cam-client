import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const MyReviewEdit = () => {
    const {_id} = useLoaderData();
    console.log(_id)
  const handleEdit = (event) => {
    event.preventDefault();
    
    const updatedReview = event.target.comment.value;
    console.log(_id)
    console.log(updatedReview);
    fetch(`https://service-server-seven.vercel.app/reviews/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({updatedReview}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("edited");
        }
      });
    }
  
  return (
    <div className="min-h-screen my-10">
    <h2 className="text-3xl mb-10">Edit Review</h2>
      <form onSubmit={handleEdit} className="flex items-center">
        <textarea
          className="p-4 rounded-xl border-2"
          rows="5"
          cols="200"
          name="comment"
        />
        <button className="btn btn-primary ml-5">Edit</button>
      </form>
    </div>
  );
};

export default MyReviewEdit;
