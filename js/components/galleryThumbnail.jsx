import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';


class GalleryThumbnail extends React.Component {
  render () {
    return (
      <div className="gallery-thumbnail current">
        <div className="cont">
          <img src={this.props.imgPath} alt="" />
        </div>
      </div>
    )
  }
}

export default GalleryThumbnail;
