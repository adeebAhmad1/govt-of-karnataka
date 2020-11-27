import React from 'react'

const UniCards = ({ img, heading, subheading, nba, institute, type }) => {
    return (
      <div className="uni-1">
        <img src={img} alt="" />
        <h4 className="center h4">{heading}</h4>
        <p className="center p">{subheading}</p>
        <button className="btn-gr">{nba}</button>
        <p className="center p">{institute}</p>
        <p className="center p">{type}</p>
        <div className="uni1-btns">
          <button className="btn-o">Website</button>
          <button className="btn-pr">Contact</button>
        </div>
      </div>
    );
  }

export default UniCards
