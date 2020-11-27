import React from 'react';
import Education from './Education';
import News from './News';
import Services from './Services';
import Welfare from './Welfare';
import Activities from './activities';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Welfare />
      <Services />
      <Education />
      <Activities />
      <News />
      <Footer />
    </div>
  );
};

export default Home;