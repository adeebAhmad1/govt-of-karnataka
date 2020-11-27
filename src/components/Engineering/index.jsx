import React from 'react';
import Search from './Search';
import Filters from './Filters';
import MainCards from './MainCards';

const Home = () => {
  return (
    <div className="mainApp">
      <Search />
      <Filters />
      <MainCards />
    </div>
  );
};

export default Home;