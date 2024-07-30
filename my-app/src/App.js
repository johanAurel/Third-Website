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
          alt="node.js"
          name="Node.js"
          href="/pages/node" 
        />
        <Cards
          img="../public/images/aws/aws.png"
          alt="aws cloud provider"
          name="AWS"
          href="/pages/aws"
        />
        <Cards
          img="../public/images/cloud/cloud.png"
          alt="devops"
          name="DevOps"
          href="/pages/devops"
        />
        <Cards
          img="../public/images/python/python.png"
          alt="python"
          name="Python"
          href="/pages/python"
        />
        <Cards img="../public/images/c++/c++.jpeg" alt="c++" name="C++" href="./pages/c++.html" />
      </div>
    </div>
    
  );
}
