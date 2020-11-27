import React from 'react';
import Education from './Education';
import News from './News';
import Services from './Services';
import Welfare from './Welfare';
import Activities from './activities';

const Home = () => {
  return (
    <div>
      <Welfare />
      <Services />
      <Education />
      <Activities />
      <News />
    </div>
  );
};

export default Home;