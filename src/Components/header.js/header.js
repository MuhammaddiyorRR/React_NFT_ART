import React from "react";
import play from "../img/play.svg";
import ornaments from "../img/Ornaments.svg";
import artBoard54 from "../img/Artboard – 54.svg";
import artBoard55 from "../img/Artboard – 55.svg";

export default class Header extends React.Component {
  render() {
    return (
      <div class="header">
        <div class="text">
            <h1>Discover, collect, and sell extraordinary NFTs</h1>
            <p>Explore the upcoming NFT projects, get all the info you need to help you decide if that is the right project for you. Don’t forget to check the additional info in the project page, including relevant tips per project.</p>
            <div class=" header-btns btns">
                <a class=" button bg-red" href="/#">Create</a>
                <a class=" button border-red" href="/#">Connect</a>
            </div>
            <div class="learn-more">
                <div class="play">
                    <img src={play} alt="not-found!"/>
                </div>
                <p class="learn-more-p">Learn more about NFT ART</p>

            </div>
        </div>

        <div class="image">
            <img class="header-img bg" src={ornaments} alt="not_found!"/>
            <img class="phone1" src={artBoard54} alt=""/>
            <img class="phone2" src={artBoard55} alt=""/>
        </div>
    </div>
    );
  }
}
