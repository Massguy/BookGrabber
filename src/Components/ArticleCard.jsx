import React from "react";

const ArticleCard = props => {
  const { image, title, author, published } = props;
  return (
    <div className="card-container">
      <img src={image} alt="" />
      <div className="insideCard">
        <h3>Title: {title}</h3>
        <h4>Author: {author}</h4>
        <h4>year: {published}</h4>
      </div>
    </div>
  );
};

export default ArticleCard;
