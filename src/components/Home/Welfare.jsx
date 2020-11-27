import React from "react";
import Zoom from 'react-reveal/Zoom';

const Welfare = () => {
  return (
    <div>
      {window.innerWidth > 786 ?
    <section className="bg_welfare hide_on_med">
      <div className="container text-center text-white">
        <h1 className="font-weight-bold">
          Youth Education, Welfare & Employability
        </h1>
        <p className="w-50 mx-auto">
          YEC is an initiative to empower youth with access to information,
          opportunity & tools for Holistic Personal Development.
        </p>
        <div className="mt-5">
          <button className="btn btn-theme btn-outline-theme btn-warning text-white py-2 px-5">
            Learn More
          </button>
        </div>
      </div>
    </section>
    :
    <section className="col-12 bg_welfare">
    <Zoom>
      <div className="container display-4 text-center text-white">
        <h1 className=" font-weight-bold">
          Youth Education, Welfare & Employability
        </h1>
        <p className="">
          YEC is an initiative to empower youth with access to information,
          opportunity & tools for Holistic Personal Development.
        </p>
        <div className="welfare_btn">
          <button className="btn btn-theme btn-outline-theme btn-warning text-white py-2 px-5">
            Learn More
          </button>
        </div>
      </div>
      </Zoom>
    </section>
      }
    </div>
  );
};

export default Welfare;
