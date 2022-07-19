import React, { Component } from "react";

class Seller extends Component {
  render() {
    return (
      

      <div class="top-sellers-card">
        <div class="card-num bg-red">{this.props.number}</div>
        <div class="card-image">
          <img class="img-seller" src={this.props.photo} alt="" />
          <img class="nice" src={this.props.nice} alt="" />
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
