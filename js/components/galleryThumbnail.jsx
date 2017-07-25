import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';


class GalleryThumbnail extends React.Component {


  // setBigPhoto = (event) => {
  //   console.log(this.props.bigImgPath);
  //
  //   this.setState({
  //     bigImgPath: this.props.imgPath
  //   })
  //   console.log(this.state.imgPath);
  // }

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
