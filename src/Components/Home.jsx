import React from "react";
import Nav from "./Nav";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Templates");
  };
  return (
    <div>
      <Nav />
      <h1>Resume Builder App</h1>
      <Button className="btn" onClick={handleClick}>
        Create CV
      </Button>
    </div>
  );
};

export default Home;
