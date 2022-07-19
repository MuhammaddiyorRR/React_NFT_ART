import React, { Component } from "react";

class Seller extends Component {
  render() {
    return (
      //   <>
      // {/* <li className="customer">
      //   <h1>{this.props.number}</h1>
      //   <span>{this.props.title}</span>
      // </li> */}

      <div class="top-sellers-card">
        <div class="card-num bg-red">{this.props.number}</div>
        <div class="card-image">
          <img class="img-seller" src="" alt="" />
          <img class="nice" src="" alt="" />
        </div>

        <span class="top-sellers-card-span">{this.props.name}</span>
        <p>
          <span class="size13">{this.props.price}</span>
          <sub>{this.props.sub}</sub> {this.props.corrency}
        </p>
      </div>
      //   </>
    );
  }
}

export default Seller;
