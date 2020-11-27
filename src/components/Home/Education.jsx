import React, {  useState } from "react";
import EducationCard from "../utils/EducationCard";
import ServiceExplore from "../utils/ServiceExplore";
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

const Education = () => {
  const [heading, setHeading] = useState("Education");
  const [time, settime] = useState(true);
  const buttons = [
    "Education",
    "Scholarship",
    "Sports",
    "Awards",
    "Financial Services",
    "Women Enpowerment",
  ];
  const onClick=(cases)=> {
    settime(false);
    setTimeout(() => settime(true), 200);
    const i = buttons.indexOf(heading)
    switch(cases) {
      case("+"): 
        setHeading(buttons[i+1 < buttons.length ? i + 1 : 0]);
        break;
      case("-"):
        setHeading(buttons[i-1 >= 0 ? i - 1 : buttons.length-1]);
        break;
      default:
        setHeading(heading);
    }
  }
  const showBtns = () => {
    return buttons.map((el) => {
      return (
        <button key={el}
          onClick={() => {
            settime(false);
            setTimeout(() => settime(true), 200);
            setHeading(el);
          }}
          className={`button px-4 mx-1 btn ${el === heading ? "active" : ""}`}
        >
          {el}
        </button>
      );
    });
  };
  return (
    <section className="bg-light">
      <div className="py-5">
        <div className="container">
          <div className="text-right">
            <button className="btn px-1" onClick={()=> onClick("-")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                className="mr-3 d-inline-block"
                viewBox="0 0 30 30"
              >
                <g fill="none" fillRule="evenodd">
                  <g>
                    <g>
                      <g transform="translate(-1140 -1481) translate(70 1481) translate(1070)">
                        <circle cx="15" cy="15" r="14.5" stroke="#333" />
                        <path
                          fill="#333"
                          fillRule="nonzero"
                          d="M19.998 14.947c-.018-.174-.116-.338-.279-.467l-7.824-6.222c-.26-.207-.653-.299-1.033-.241-.38.057-.688.256-.809.52-.12.264-.034.554.226.761L17.45 15l-7.172 5.702c-.26.207-.346.497-.226.76.12.265.429.464.809.521.38.058.774-.034 1.033-.24l7.824-6.223c.198-.156.298-.363.279-.573z"
                          transform="matrix(-1 0 0 1 30 0)"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
            <button className="btn px-1" onClick={()=> onClick("+")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <g fill="none" fillRule="evenodd">
                  <g>
                    <g>
                      <g>
                        <g transform="translate(-1180 -1481) translate(70 1481) translate(1070) translate(40)">
                          <circle cx="15" cy="15" r="15" fill="#FF9C62" />
                          <path
                            fill="#FFF"
                            fillRule="nonzero"
                            d="M19.998 14.947c-.018-.174-.116-.338-.279-.467l-7.824-6.222c-.26-.207-.653-.299-1.033-.241-.38.057-.688.256-.809.52-.12.264-.034.554.226.761L17.45 15l-7.172 5.702c-.26.207-.346.497-.226.76.12.265.429.464.809.521.38.058.774-.034 1.033-.24l7.824-6.223c.198-.156.298-.363.279-.573z"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <div className="row">
          <div className="education_btn_list">
          {showBtns()}
          </div>
          </div>
          <div className="row position-relative">
           <Zoom when={time} >
            <EducationCard heading={heading} />
            </Zoom>
          </div>
        </div>
      </div>
      <div className="py-5">
      <Slide right>
        <ServiceExplore className="bg-white">
          <div className="row education_card">
          <div className="col-8 service_card">
            <h1 className="font-weight-bolder">
              Like to <span className="text-theme ml-1"> Explore More</span>?
            </h1>
            <p>
              We provide more services and supports for
              Women Empowerment, Skill Development & Entrepreneurship etc..
            </p>
          </div>
          <div className="col-4 align-items-center d-flex justify-content-end">
          <button className="btn explore_btn shadow btn-theme btn-outline-theme btn-warning text-white">
            Login Now
          </button>
          </div>
          </div>
        </ServiceExplore>
      </Slide>
      </div>
    </section>
  );
};

export default Education;
