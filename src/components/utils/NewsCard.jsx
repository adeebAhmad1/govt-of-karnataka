import React from "react";


const NewsCard = ({img}) => {
  return (
    <div className="card rounded shadow border-0">
      <div className="image_container">
        <img src={img} alt="" className="w-100" />
      </div>
      <div className="content p-4">
        <div className="date size-primary" style={{color: "#8274ff"}}>07 JULY 2020</div>
        <h6>Lorem ipsum dola rsit amet</h6>
        <div className="size-primary">
          Lorem ipsum dolor sit amet, consectetur adipis cing elitt pretium
          volup..,
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
