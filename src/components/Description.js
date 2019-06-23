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
            controls
            playsinline
            autoplay
            muted
            loop
          >
            <source src="video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}
export default Title;
