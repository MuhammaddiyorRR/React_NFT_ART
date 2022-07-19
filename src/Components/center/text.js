import React, { Component } from "react";

class Text extends Component {
  render() {
    return (
      //   <>
      // {/* <li className="customer">
      //   <h1>{this.props.number}</h1>
      //   <span>{this.props.title}</span>
      // </li> */}

      <div class="center">
        <span class="color-red">{this.props.title}</span>
        <p>
          {this.props.description} 
        </p>
      </div>
    );
  }
}

export default Text;
