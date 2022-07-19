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
      </div>
    );
  }
}
