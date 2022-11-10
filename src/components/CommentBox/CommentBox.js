import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AllContext } from "../../contexts/AllContextProvider";

const CommentBox = ({serviceId}) => {
  const { user } = useContext(AllContext);
  const { displayName, uid, photoURL } = user;
  const commentHandle = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    const reviewDate = new Date();
    const review = {
        serviceId,
      reviewerName: displayName,
      reviewerImg: photoURL,
      uid,
      comment,
      reviewDate,
    };
    
    fetch("http://localhost:5000/addreview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Review Added");
          event.target.reset();
        }
      })
      .catch((e) => console.error(e));
  };
  return (
    <div>
      <form onSubmit={commentHandle} className="flex items-center">
        <textarea
          className="p-4 rounded-xl border-2"
          rows="5"
          cols="200"
          name="comment"
        />
        <button className="btn btn-primary ml-5">Review</button>
      </form>
    </div>
  );
};

export default CommentBox;
