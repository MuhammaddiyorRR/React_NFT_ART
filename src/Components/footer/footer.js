 import React from "react";
import logo from "../img/Logo.svg";
// import ornaments from "../img/Ornaments.svg";
// import artBoard54 from "../img/Artboard – 54.svg";
// import artBoard55 from "../img/Artboard – 55.svg";

export default class Footer extends React.Component {
  render() {
    return (
      
    <div class="footer">

        <div class="lastes-update">

            <img class="logo" src={logo} alt=""/>
            <span>Get the lastes Updates</span>
            
            <div class="email">
                <a class=" bg-red" href="/#">Email Me!</a>
            </div>
        </div>


        <div class="lists">
            <div class="list">
                <ul>
                    <li>Services</li>
                    <li>Online Instructor</li>
                    <li>Premium E Course</li>
                    <li>E Books</li>
                    <li>Our Blogs</li>
                </ul>
            </div>

            <div class="list">
                <ul>
                    <li>Services</li>
                    <li>Online Instructor</li>
                    <li>Premium E Course</li>
                    <li>E Books</li>
                    <li>Our Blogs</li>
                </ul>
            </div>
            
            <div class="list">
                <ul>
                    <li>Services</li>
                    <li>Online Instructor</li>
                    <li>Premium E Course</li>
                    <li>E Books</li>
                    <li>Our Blogs</li>
                </ul>
            </div>
        </div>
        
</div>

);
}
}