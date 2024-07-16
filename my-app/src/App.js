import React from "react";
import Navbar from "./components/Navbar.js";
import Cards from "./components/Cards.js";
import "./app.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Cards
          img="../public/images/js/navbar"
          alt="logo of node.js"
          name="Node.js"
        />
        <Cards
          img="../public/images/aws/aws.png"
          alt="logo of aws cloud provider"
          name="AWS"
        />
        <Cards
          img="../public/images/cloud/cloud.png"
          alt="logo of devops"
          name="DevOps"
        />
        <Cards
          img="../public/images/python/python.png"
          alt="logo of python"
          name="Python"
        />
        <Cards img="../public/images/c++/c++.jpeg" alt="logo of c++" name="C++" />
      </div>
    </div>
  );
}
