import axios from "axios";
import { useState } from "react";
import deleteFact from "@/components/DeleteFact";

export const FactComponent = ({ factData, id, data, setData }) => {
  const [likes, setLikes] = useState(factData.likes.length);
  const [disLikes, setDisLikes] = useState(factData.dislikes.length);

  const addLike = async () => {
    const userId = localStorage.getItem("userId");
    await axios
      .post(
        `https://quiz-app-backend-service-p5cz.onrender.com/facts/like/${id}/${userId}`
      )
      .then((res) => {
        setLikes(res.data.likes.length);
        setDisLikes(res.data.dislikes.length);
        console.log("Like added successfully");
      })
      .catch((error) => {
        console.error("Error like:", error);
      });
  };

  const addDislike = async () => {
    const userId = localStorage.getItem("userId");
    await axios
      .post(
        `https://quiz-app-backend-service-p5cz.onrender.com/facts/dislike/${id}/${userId}`
      )
      .then((res) => {
        setLikes(res.data.likes.length);
        setDisLikes(res.data.dislikes.length);
        console.log("Dislike added successfully");
      })
      .catch((error) => {
        console.error("Error dislike:", error);
      });
  };

  return (
    <>
      <div className="box">
        {factData.UserId}
        <h2>{factData.factTitle}</h2>
        <h3>{factData.fact}</h3>
        <div className="factBTNS">
          <button onClick={addLike} className="factBTN">
            LIKE
          </button>
          <h3>{likes}</h3>
          <button onClick={addDislike} className="factBTN">
            DISLIKE
          </button>
          <h3>{disLikes}</h3>
          <button class="factBTN factBTNN">DELETE</button> 
        </div>
      </div>
    </>
  );
};
