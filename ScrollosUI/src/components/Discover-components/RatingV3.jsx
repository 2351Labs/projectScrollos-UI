import { useState } from "react";
import starIcon from "../../assets/star.svg";

export default function RatingV3(props) {
  const { apiDoc, clientUserData, handleAddRating } = props;
  const [hoverOverIndex, setHoverOverIndex] = useState();
  const getLoadedUserRating = () => {
    if (apiDoc.ratings[clientUserData._id]) {
      return apiDoc.ratings[clientUserData._id];
    } else return false;
  };
  const [userRating, setUserRating] = useState(getLoadedUserRating());

  function handleHoverOverStar(e) {
    setHoverOverIndex(e.target.id);
    setUserRating(e.target.id);
  }
  function handleHoverLeaveStar(e) {
    setHoverOverIndex();
    setUserRating(getLoadedUserRating());
  }

  let starsElements = [];
  for (let i = 1; i <= 5; i++) {
    console.log("test", i);
    starsElements.push(
      <img
        key={i}
        index={i}
        id={i}
        src={starIcon}
        className="star"
        onMouseEnter={handleHoverOverStar}
        onMouseLeave={handleHoverLeaveStar}
        style={i <= userRating ? { opacity: 1 } : {}}
        onClick={handleAddRating}
      />
    );
  }

  return <div className="rating-container-v3">{starsElements}</div>;
}
