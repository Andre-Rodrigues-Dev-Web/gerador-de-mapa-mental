import React from "react";
import { Routes, Route } from "react-router-dom";
import Erro from "./Views/Erro";
import Home from "./Views/Home";
import Layout from "./Layout";
import Login from "./Views/Login";
import MindMap from "./Views/MindMap";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mapa-mental" element={<MindMap />} />
          <Route path="*" element={<Erro />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
