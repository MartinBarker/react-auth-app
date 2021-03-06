import React, { Component } from "react";
const omit = (obj, omitKey) =>
  Object.keys(obj).reduce((result, key) => {
    if (key !== omitKey) {
      result[key] = obj[key];
    }
    return result;
  }, {});

const overlayStyles = {
  position: "absolute",
  filter: "blur(1px)",
  transition: "opacity ease-in 1000ms",
  clipPath: "inset(0)"
};

export default class ProgressiveImage extends Component {
  constructor(props) {
    super(props);
    this.state = { highResImageLoaded: false };
  }
  render() {
    const { overlaySrc } = this.props;
    const { highResImageLoaded } = this.state;
    let filteredProps = omit(this.props, "overlaySrc");
    return (
      <span>

        
        <img
          id="colorImageDisplay" 
          className='responsive'
          alt=""
          {...filteredProps}
          onLoad={() => {
            this.setState({ highResImageLoaded: true });
          }}
          ref={img => {
            this.highResImage = img;
          }}
          src={this.props.src}
        />
        <img
          id="colorImageDisplay" 
          alt=""
          {...filteredProps}
          className={`responsive ${this.props.className} ${overlayStyles}`}
          {...highResImageLoaded && { style: { opacity: "0", display:"none" } }}
          src={overlaySrc}
        />
      </span>
    );
  }
}
