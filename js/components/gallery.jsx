import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class Gallery extends React.Component {
  render () {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 gallery">

        <div className="photo-thumbnails">

          <div className="gallery-thumbnail current">
            <div className="cont">
            <img src="images/catslider.jpg" alt="" />
          </div>
          </div>
          <div className="gallery-thumbnail current">
            <div className="cont">
            <img src="images/heavy.png" alt="" />
          </div>
          </div>
          <div className="gallery-thumbnail current">
            <div className="cont">
            <img src="images/catpaws.jpg" alt="" />
          </div>
          </div>

        </div>

        <div id="big-photo" className="big-photo">
          <img src="images/catslider.jpg" alt="" />
        </div>
      </div>
    )
  };
};

export default Gallery;
