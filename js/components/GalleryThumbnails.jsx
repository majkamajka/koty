import React from "react";
import {
  Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';
import fb from "./Db.js";

class GalleryThumbnails extends React.Component {

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
          <div className="gallery-thumbnail current" key={i}>
            <div className="cont">
              <img src={thumbnailsLinks[i]} alt="" onClick={this.getImage}/>
            </div>
          </div>
        );
      };

      this.setState({
        thumbnails: thumbnails,
      });

    });
  };

  getImage = (event) => {
    const img = event.target.src; //to chyba nie tak powinno być, onClick powinien być na całym divie, a nie tylko na img, ale takim sposobem mogę wyciąganąć src. DZIAŁA! do poprawy później
    this.props.setBigPhoto(img);
  }

  render() {
    return (
      <div className="photo-thumbnails">
        {this.state.thumbnails}
      </div>
    )
  }
}

export default GalleryThumbnails;

// <div className="gallery-thumbnail current" onClick={this.getImage}>
//   <div className="cont">
//     <img src={this.props.imgPath} alt=""/>
//   </div>
// </div>
