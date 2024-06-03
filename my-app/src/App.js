import React from "react" ;

import Cards from "./components/Cards.js"

import Navbar from "./components/Navbar.js"

 export default function App(props){
    return(
        <div>
            <Navbar/>
            <Cards img="./images/js/node-logo.png" ref ="logo of node.js"/>
            <Cards img="./images/aws/aws-logo.png" ref ="logo of aws cloud provider"/>
            <Cards img="./images/cloud/devops-logo.png" ref ="logo of node.js"/>
            <Cards img = "./images/python/python-logo.jpeg" ref="logo of python"/>
            <Cards img = "./images/c++/c++-logo.jpg" ref="logo of c++"/>        
        </div>
    )
}
