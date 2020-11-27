import React from 'react';
import Search from './Search';
import Filters from './Filters';
import MainCards from './MainCards';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <div className="mainApp">
      <Header />
      <Search />
      <Filters />
      <MainCards />
      <Footer />
    </div>
  );
};

export default Home;