import React from "react";
import Header from "./Header";
import proPic from '../assets/All Images/P3OLGJ1 copy 1.png'
import CategoryList from "./CategoryList";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  return (
    <>
      <Header/>
      <section className="flex justify-between bg-gray-100">
        <div className="pl-52 pt-32 lg:pt-10 lg:pl-28">
          <h1 className="text-7xl font-bold leading-tight">One Step <br /> Closer To Your </h1>
          <h1 class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-7xl font-black">Dream Job</h1>
          <p className="text-gray-500 text-lg w-3/4 py-8">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className="btn-primary">Get Started</button>
        </div>
          <img className="w-2/1 lg:w-2/5 object-fill" src={proPic} alt="" />
      </section>

      <CategoryList/>
      <FeaturedJobs/>
    </>
  );
};

export default Home;
