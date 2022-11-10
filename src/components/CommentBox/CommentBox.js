import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AllContext } from "../../contexts/AllContextProvider";

const CommentBox = ({serviceId, reviews, setReviews}) => {
  const { user } = useContext(AllContext);
  const { displayName, uid, photoURL } = user;

  //comment handle

  const commentHandle = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    const rvwDate = new Date();
    const reviewDate = JSON.parse(JSON.stringify(rvwDate));  //to get the accurate string date
    const review = {
        serviceId,
      reviewerName: displayName,
      reviewerImg: photoURL,
      uid,
      comment,
      reviewDate,
    };
    
    fetch("https://service-server-seven.vercel.app/addreview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review Added");
          event.target.reset();
        }
      })
      .then(()=>{
        const newReviewsList = [...reviews, review];
        setReviews(newReviewsList);
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
        <button className="btn btn-primary ml-5" type="submit">Review</button>
      </form>
    </div>
  );
};

export default CommentBox;
