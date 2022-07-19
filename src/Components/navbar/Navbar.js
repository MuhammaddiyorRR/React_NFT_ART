import React from "react";
import logo from "../img/Logo.svg";
import icon from "../img/Icon.svg";
// import "./navbar.scss";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img src={logo} alt="" />
        <div class="search">
          <img src={icon} alt="" />
          <input type="text" placeholder="Search to item here" />
        </div>
        <ul>
          <li>
            <a href="/#">Explore</a>{" "}
          </li>
          <li>
            <a href="/#">My items</a>{" "}
          </li>
          <li>
            <a href="/#">Following</a>{" "}
          </li>
        </ul>
        <div class="nav-btns btns">
          <a class=" button bg-red" href="/#">
            Create
          </a>
          <a class=" button border-red" href="/#">
            Connect
          </a>
        </div>
      </div>
    );
  }
}
