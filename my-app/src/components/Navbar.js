import React from "react";

export default function Navbar() {
    
    return (

        <div className="navbar">
            <div className="navbar--logo">
                <img src="./images/logo.png" alt="logo" />
            </div>
            <div className="navbar--links">
                <p>Home</p>
                <p>CV</p>
                <p>Contact</p>
            </div>
        </div>
        
    );
    
}
