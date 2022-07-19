import React from "react";
import brain from "../img/brain.svg";
import nice from "../img/nice.svg";
import ellin from "../img/ellin.svg";
import abraham from "../img/abraham.svg";
import arabella from "../img/arabella.svg";
import mike from "../img/mike.svg";
import Seller from "./seller";

export default class Sellers extends React.Component {
  render() {
    return (
      <div class="top-sellers">
        <Seller
          number="01"
          photo={brain}
          nice={nice}
          name="Brian Domanic"
          price="21.0"
          sub="5"
          corrency="ETH"
        />
        <Seller
          number="02"
          photo={ellin}
          nice={nice}
          name="Ellin Syahnaz"
          price="20."
          sub="65"
          corrency="ETH"
        />
        <Seller
          number="03"
          photo={abraham}
          nice={nice}
          name="Abraham Lincoln"
          price="18."
          sub="35"
          corrency="ETH"
        />
        <Seller
          number="04"
          photo={arabella}
          nice={nice}
          name=" Arabella Ava"
          price="1."
          sub="05"
          corrency="ETH"
        />
        <Seller
          number="05"
          photo={mike}
          nice={nice}
          name="Mike Muliadro"
          price="1."
          sub="05"
          corrency="ETH"
        />
        {/* <Seller
          number="04"
          photo={arabella}
          nice={nice}
          name=" Arabella Ava"
          price="1."
          sub="05"
          corrency="ETH"
        /> */}
        {/* // <div class="top-sellers-card">
        //   <div class="card-num bg-red">01</div>
        //   <div class="card-image">
        //     <img class="img-seller" src={brain} alt="" />
        //     <img class="nice" src={nice} alt="" />
        //   </div>

        //   <span class="top-sellers-card-span">Brian Domanic</span>
        //   <p>
        //     <span class="size13">21.0</span>
        //     <sub>5</sub> ETH
        //   </p>
        // </div>
        // <div class="top-sellers-card">
        //   <div class="card-num bg-red">02</div>
        //   <div class="card-image">
        //     <img class="img-seller" src={ellin} alt="" />
        //     <img class="nice" src={nice} alt="" />
        //   </div>

        //   <span class="top-sellers-card-span">Ellin Syahnaz</span>
        //   <p>
        //     <span class="size13">21.0</span>
        //     <sub>5</sub> ETH
        //   </p>
        // </div>
        // <div class="top-sellers-card">
        //   <div class="card-num bg-red">03</div>
        //   <div class="card-image">
        //     <img class="img-seller" src={abraham} alt="" />
        //     <img class="nice" src={nice} alt="" />
        //   </div>

        //   <span class="top-sellers-card-span">Abraham Lincoln</span>
        //   <p>
        //     <span class="size13">21.0</span>
        //     <sub>5</sub> ETH
        //   </p>
        // </div>
        // <div class="top-sellers-card">
        //   <div class="card-num bg-red">04</div>
        //   <div class="card-image">
        //     <img class="img-seller" src={arabella} alt="" />
        //     <img class="nice" src={nice} alt="" />
        //   </div>

        //   <span class="top-sellers-card-span">Arabella Ava</span>
        //   <p>
        //     <span class="size13">21.0</span>
        //     <sub>5</sub> ETH
        //   </p>
        // </div>
        // <div class="top-sellers-card">
        //   <div class="card-num bg-red">05</div>
        //   <div class="card-image">
        //     <img class="img-seller" src={mike} alt="" />
        //     <img class="nice" src={nice} alt="" />
        //   </div>

        //   <span class="top-sellers-card-span">Mike Muliadro</span>
        //   <p>
        //     <span class="size13">21.0</span>
        //     <sub>5</sub> ETH
        //   </p>
        // </div> */}
      </div>
    );
  }
}
