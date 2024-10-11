import React from "react";
import Nav from "../Nav";
import Crousal from "./Crousal";
import Hired from "./HiredSection";
import CardBox from "./Card";
import ChooseSection from "./ChooseSection";
import UseSection from "./UseSection";
import FooterComponent from "./Footer";
const Home = () => {
  return (
    <div>
      <Nav />
      <Crousal />
      <Hired />
      <ChooseSection />
      <CardBox />
      <UseSection />
      <FooterComponent />
    </div>
  );
};

export default Home;
