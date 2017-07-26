import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';


class GalleryThumbnail extends React.Component {

  getImage = (event) => {
    event.preventDefault();
    const img = this.props.imgPath;
    this.props.setBigPhoto(img);
  }


  render () {
    return (
      <div className="gallery-thumbnail current"  onClick={this.getImage}>
        <div className="cont">
          <img src={this.props.imgPath} alt="" />
        </div>
      </div>
    )
  }
}

export default GalleryThumbnail;
