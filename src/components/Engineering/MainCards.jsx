import React from "react";
import Category from "./Category";
import SelectCards from "./SelectCards";
import L1Image from "../../images/l1.png";
import L2Image from "../../images/l2.png";
import UniCards from "../utils/UniCards";
import Slide from "react-reveal/Slide";

function MainCards() {
  const array = [
    {
      selectDistrict:"Select Districts",
      searchId:"srchDist",
      placeSearchDistrict:"Search District",
      options:[
        "Bangluru Urban",
        "Dakshina Kannada",
        "Bangluru Urban",
        "Bangluru Urban",
        "Bangluru Urban",
        "Bangluru Urban",
        "Bangluru Urban",
        "Bangluru Urban",
        "Bangluru Urban",
      ]
    },
    {
      selectDistrict:"Select Taluk",
      searchId:"srchTaluk",
      placeSearchDistrict:"Search Taluk",
      options:[
        "Bagalkote",
        "Jamkhandi",
        "Mudhol",
        "Dakshina Kannada",
        "Badami",
        "Dakshina Kannada",
        "Bangluru Urban",
        "Badami",
        "Jamkhandi",
      ]
    },
    {
      selectDistrict:"Branch",
      searchId:"srchBranch",
      placeSearchDistrict:"Search Branch",
      options:[
        "Electronics &amp; Communication Engineering",
        "Aerospace Engineering",
        "Aerospace Engineering",
        "Computer Science &amp; Engineering",
        "Electronics &amp; Communication Engineering",
        "Dakshina Kannada",
        "Bangluru Urban",
        "Badami",
        "Electronics &amp; Communication Engineering",
      ]
    },
    {
      selectDistrict:"University",
      searchId:"srchUni",
      placeSearchDistrict:"Search University",
      options:[
        "Electronics &amp; Communication Engineering",
        "Aerospace Engineering",
        "Aerospace Engineering",
        "Computer Science &amp; Engineering",
        "Electronics &amp; Communication Engineering",
        "Dakshina Kannada",
        "Bangluru Urban",
        "Badami",
        "Electronics &amp; Communication Engineering",
      ]
    }
  ];
  const categoryOptions = ["All","All","All","All",]
  const show = ()=> array.map((el,i)=> <SelectCards key={i} {...el} />)
  return (
    //MAIN CARDS START
    <>
      <div id="main-cards">
        <div className="m-container">
          <Slide left>
            <div>
            <div className="mc-1 med-none position_relative position-sticky" style={{ top: 0, height: `100vh`, overflowY: `hidden` }}>
              {show()}
            </div>
            </div>
          </Slide>
          <div className="mc-2">
            <div className="category sml-none">
              <Category categoryName="Type of college:" categoryId="clg" categoryOptions={categoryOptions} />
              <Category categoryName="Courses" categoryId="cor" categoryOptions={categoryOptions} />
              <Category categoryName="Sort By" categoryId="sort" categoryOptions={categoryOptions} />
            </div>
            <div className="uni-cards mb-5">
              <Slide right>
                <UniCards img={L1Image} heading="M S Ramaiah Institute of Technology" subheading="M.S.R Nagar, Bangalore" nba="NBA:A++" institute="Affiliated to:  Visvesvaraya Technological" type="Type of college  :  Private"/>
                <UniCards img={L2Image} heading="University Visvesvaraya College of Engineering" subheading="Bangalore, Karnataka" nba="NBA:B++" institute="Affiliated to:  Bangalore University" type="Type of college  :  Private"/>
              </Slide>
              <Slide right>
                <UniCards img={L2Image} heading="University Visvesvaraya College of Engineering" subheading="Bangalore, Karnataka" nba="NBA:B++" institute="Affiliated to:  Bangalore University" type="Type of college  :  Private"/>
                <UniCards img={L2Image} heading="University Visvesvaraya College of Engineering" subheading="Bangalore, Karnataka" nba="NBA:B++" institute="Affiliated to:  Bangalore University" type="Type of college  :  Private"/>
                </Slide>
              <Slide right>
                <UniCards img={L1Image} heading="University Visvesvaraya College of Engineering" subheading="Bangalore, Karnataka" nba="NBA:B++" institute="Affiliated to:  Bangalore University" type="Type of college  :  Private"/>
                <UniCards img={L2Image} heading="University Visvesvaraya College of Engineering" subheading="Bangalore, Karnataka" nba="NBA:B++" institute="Affiliated to:  Bangalore University" type="Type of college  :  Private"/>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </>
    //MAIN CARDS END
  );
}

export default MainCards;
