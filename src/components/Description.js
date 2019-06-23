import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div className=" wrapper">
        <h2 className="text-center text-white font-weight-bold">
          Sign Language Recognition
        </h2>
        <div className="text-center">
          <video
            width="640"
            height="480"
            src="./IMG_1869.TRIM.MOV"
            autoplay
            muted
            controls
            loop
          />
        </div>
      </div>
    );
  }
}
export default Title;
