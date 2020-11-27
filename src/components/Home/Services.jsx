import React from "react";
import ServiceExplore from "../utils/ServiceExplore";
import Rtick from '../../images/tick.png'
import Slide from 'react-reveal/Slide';

const Services = () => {
  return (
    <section className="py-5 services_section">
      <Slide left>
      <ServiceExplore className="my-4" cl="px-lg-5">
        <div className="row service_card">
          <h1 className="font-weight-bolder box_heading col-4">
            Youth &nbsp; <span className="text-theme"> Services</span>
          </h1>
          <div className="col-8 d-flex align-items-center">
            <p className="mb-0">
              We work hard to understand your needs,{" "}
              <span className="text-theme">
                challenges and the goals tied to your mission
              </span>
              , allowing us to come along side your team as committed partners
            </p>
          </div>
        </div>
      </ServiceExplore>
      </Slide>
      <div className="container px-lg-5 services_text">
        <p>
          Yuva is the web portal of Youth Empowerment Centres. Yuva provides
          details of opportunities available in Higher Education and career,
          youth oriented schemes and facilities offered by the Central and State
          Governments. Yuva illumines the paths before youth after completion of
          10th standard, PUC/12th Standard, Degree and PG
        </p>
        <p className="font-weight-bolder services_list_heading">
          Features <span className="text-theme">Offerings</span>
        </p>
        <div className="row services_list">
          <div className="col-lg-6 d-flex">
            <img src={Rtick} className="" alt="img" />
            <span className="ml-2">Registration</span>
          </div>
          <div className="col-lg-6 d-flex">
            <img src={Rtick} className="" alt="img" />
            <span className="ml-2">Career counselling</span>
          </div>
          <div className="col-lg-12 d-flex">
        
          <img src={Rtick} className="" alt="img" />
            <span className="ml-2">Assessing aptitude/ preference/ interest through psychometric test</span>
          </div>
        <div className="col-lg-12 d-flex">
          <img src={Rtick} className="" alt="img" />
          <span className="ml-2">Information insimple & understandable style</span>
        </div>
        <div className="col-lg-12 d-flex">
          <img src={Rtick} className="" alt="img" />
          <span className="ml-2">Capturing background information through MCQ</span>
        </div>
      </div>
        </div>
    </section>
  );
};

export default Services;
