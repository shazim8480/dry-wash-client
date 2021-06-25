import React from "react";
import Header from "../Header/Header";
import Services from "../Services/Services";
import FeaturedService from "../FeaturedService/FeaturedService";
import Testimonial from "../Testimonial/Testimonial";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <FeaturedService />
      <Testimonial />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
