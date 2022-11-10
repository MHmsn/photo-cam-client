import React, { useContext, useEffect, useState } from "react";
import { AllContext } from "../../contexts/AllContextProvider";
import MyReviewCard from "../MyReviewCard/MyReviewCard";
import { ClipLoader } from "react-spinners";

const MyReviews = () => {
  const { user, loading } = useContext(AllContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    document.title = "My Reviews - Photo Cam";
  }, []);
  useEffect(() => {
    fetch(`https://service-server-seven.vercel.app/myreviews/${user.uid}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
    //   if(loading){
    //     return <ClipLoader color="red" />;
    //   }
  }, [ user.uid]);
  if(loading){
       return <ClipLoader color="red" />;
      }
  return (
    <div className="min-h-screen">
      {reviews.length === 0 ? <h2 className="text-3xl my-10">No Reviews were added</h2>:<h2 className="text-3xl my-10">All of your Reviews</h2>}
      <div>
      {reviews.map((review) => 
          <MyReviewCard key={review._id} review={review} reviews={reviews} setReviews={setReviews}></MyReviewCard>
      )}
      </div>
    </div>
  );
};

export default MyReviews;
