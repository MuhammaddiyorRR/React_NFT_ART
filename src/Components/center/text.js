import React, { Component } from "react";

class Text extends Component {
  render() {
    return (
      

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
