import React from "react";
import {
  Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';
import fb from "./db.js";

class GalleryThumbnail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      thumbnails: []
    }
  }

  componentDidMount() {
    let db = fb.database().ref("/");
    let cards = [];
    let id = this.props.pathId;
    let thumbnailsLinks = [];
    let thumbnails = [];

    db.on("value", snap => {
      thumbnailsLinks.push(snap.val()[id].mainPhoto);

      for (let i = 0; i < snap.val()[id].gallery.length; i++) {
        thumbnailsLinks.push(snap.val()[id].gallery[i]);
      };

      for (let i = 0; i < thumbnailsLinks.length; i++) {
        thumbnails.push(
          <div className="gallery-thumbnail current" onClick={this.getImage} key={i}>
            <div className="cont">
              <img src={thumbnailsLinks[i]} alt=""/>
            </div>
          </div>
        );
      };

      this.setState({
        thumbnails: thumbnails
      });
      
    });
  };

  getImage = (event) => {
    event.preventDefault();
    const img = this.props.imgPath;
    this.props.setBigPhoto(img);
  }

  render() {
    return (
      <div>{this.state.thumbnails}</div>
    )
  }
}

export default GalleryThumbnail;

// <div className="gallery-thumbnail current" onClick={this.getImage}>
//   <div className="cont">
//     <img src={this.props.imgPath} alt=""/>
//   </div>
// </div>
