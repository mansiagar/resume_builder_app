import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Templates from "./Components/Templates";
import UserForm from "./Components/UserForm";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Templates" element={<Templates />} />
        <Route path="/UserForm" element={<UserForm />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
