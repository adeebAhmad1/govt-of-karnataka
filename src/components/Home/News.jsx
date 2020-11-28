import React from 'react';
import NewsCard from '../utils/NewsCard';
import img3 from "../../images/bitmap-copy-19.png";
import img1 from "../../images/bitmap-copy-20.png";
import img2 from "../../images/bitmap-copy-21.png";
import Fade from 'react-reveal/Fade';

const News = () => {
  return (
    <section className="bg-light py-5">
      <div className="container-fluid">
        <h1 className="px-lg-5 my-4 font-weight-bolder d-flex w-100 justify-content-between news_heading"><span>Latest <span className="text-theme">News</span></span>
          <div>
            <button className="btn-outline-warning px-5 btn btn-outline-theme">View All</button>
          </div>
        </h1>
        <Fade left>
          <div className="row px-lg-5">
            <div className="col-lg-4 mb-4">
              <NewsCard img={img1} src="img" />
            </div>
            <div className="col-lg-4 mb-4">
              <NewsCard img={img2} src="img" />
            </div>
            <div className="col-lg-4 mb-4">
              <NewsCard img={img3} src="img" />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default News;