import React from "react";
import Category from "./Category";
import SelectCards from "./SelectCards";
import L1Image from "../../images/l1.png";
import L2Image from "../../images/l2.png";
import UniCards from "../utils/UniCards";
import Slide from "react-reveal/Slide";

function MainCards() {
  const options1 = [
    "Bangluru Urban",
    "Dakshina Kannada",
    "Bangluru Urban",
    "Bangluru Urban",
    "Bangluru Urban",
    "Bangluru Urban",
    "Bangluru Urban",
    "Bangluru Urban",
    "Bangluru Urban",
  ];
  const options2 = [
    "Bagalkote",
    "Jamkhandi",
    "Mudhol",
    "Dakshina Kannada",
    "Badami",
    "Dakshina Kannada",
    "Bangluru Urban",
    "Badami",
    "Jamkhandi",
  ];
  const options3 = [
    "Electronics &amp; Communication Engineering",
    "Aerospace Engineering",
    "Aerospace Engineering",
    "Computer Science &amp; Engineering",
    "Electronics &amp; Communication Engineering",
    "Dakshina Kannada",
    "Bangluru Urban",
    "Badami",
    "Electronics &amp; Communication Engineering",
  ];
  const options4 = [
    "Electronics &amp; Communication Engineering",
    "Aerospace Engineering",
    "Aerospace Engineering",
    "Computer Science &amp; Engineering",
    "Electronics &amp; Communication Engineering",
    "Dakshina Kannada",
    "Bangluru Urban",
    "Badami",
    "Electronics &amp; Communication Engineering",
  ];
  return (
    //MAIN CARDS START
    <>
      <div id="main-cards">
        <div className="m-container">
          <Slide left>
            <div className="mc-1 med-none position_relative position-sticky" style={{ top: 0, maxHeight: `100vh`, overflowY: `scroll` }}>
              <SelectCards
                selectDistrict="Select Districts"
                searchId="srchDist"
                placeSearchDistrict="Search District"
                options={options1}
              />

              <SelectCards
                selectDistrict="Select Taluk"
                searchId="srchTaluk"
                placeSearchDistrict="Search Taluk"
                options={options2}
              />

              <SelectCards
                selectDistrict="Branch"
                searchId="srchBranch"
                placeSearchDistrict="Search Branch"
                options={options3}
              />

              <SelectCards
                selectDistrict="University"
                searchId="srchUni"
                placeSearchDistrict="Search University"
                options={options4}
              />
            </div>
          </Slide>
          <div className="mc-2">
            <div className="category sml-none">
              <Category
                categoryName="Type of college:"
                categoryId="clg"
                categoryOption1="All"
                categoryOption2="All"
                categoryOption3="All"
                categoryOption4="All"
              />

              <Category
                categoryName="Courses"
                categoryId="cor"
                categoryOption1="All"
                categoryOption2="All"
                categoryOption3="All"
                categoryOption4="All"
              />

              <Category
                categoryName="Sort By"
                categoryId="sort"
                categoryOption1="All"
                categoryOption2="All"
                categoryOption3="All"
                categoryOption4="All"
              />
            </div>
            <div className="uni-cards mb-5">
            <Slide right>
            
                <UniCards
                  image={L1Image}
                  text1="M S Ramaiah Institute of Technology"
                  text2="M.S.R Nagar, Bangalore"
                  text3="NBA:A++"
                  text4="Affiliated to:  Visvesvaraya Technological"
                  text5="Type of college  :  Private"
                  text6="Website"
                  text7="Contect"
                />
              <UniCards
                image={L2Image}
                text1="University Visvesvaraya College of Engineering"
                text2="Bangalore, Karnataka"
                text3="NBA:B++"
                text4="Affiliated to:  Bangalore University"
                text5="Type of college  :  Private"
                text6="Website"
                text7="Contect"
                />
            </Slide>
            <Slide right>
            
              <UniCards
                image={L2Image}
                text1="University Visvesvaraya College of Engineering"
                text2="Bangalore, Karnataka"
                text3="NBA:B++"
                text4="Affiliated to:  Bangalore University"
                text5="Type of college  :  Private"
                text6="Website"
                text7="Contect"
              />

              <UniCards
                image={L2Image}
                text1="University Visvesvaraya College of Engineering"
                text2="Bangalore, Karnataka"
                text3="NBA:B++"
                text4="Affiliated to:  Bangalore University"
                text5="Type of college  :  Private"
                text6="Website"
                text7="Contect"
              />
              </Slide>
              <Slide right>
            
              <UniCards
                image={L1Image}
                text1="University Visvesvaraya College of Engineering"
                text2="Bangalore, Karnataka"
                text3="NBA:B++"
                text4="Affiliated to:  Bangalore University"
                text5="Type of college  :  Private"
                text6="Website"
                text7="Contect"
              />
              <UniCards
                image={L2Image}
                text1="University Visvesvaraya College of Engineering"
                text2="Bangalore, Karnataka"
                text3="NBA:B++"
                text4="Affiliated to:  Bangalore University"
                text5="Type of college  :  Private"
                text6="Website"
                text7="Contect"
              />
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
