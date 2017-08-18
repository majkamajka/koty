import React from 'react';
import * as Firebase from 'firebase';
import {
  Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory,
} from 'react-router';
import fb from './Db.js';

class CatCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      filters: this.props.filters,
      sortBy: this.props.sortBy,
    };
  }

  componentDidMount() {

    const db = fb.database().ref('/');
    const cards = [];

    db.on('value', (snap) => {

      for (let i = 0; i < snap.val().length; i++) {

        cards.push(snap.val()[i]);
        cards[i].id = parseInt([i]);
      }

      this.setState({
        cards: cards,
      });

      // dlaczego nigdzie nie jestem w stanie updejtować this state filters?!

    });
  }

  filterCards(cards) {
    const filters = this.props.filters;
    let filteredDbCats = cards;
    const sortBy = this.props.sortBy;

    if (!filters.sexMale) {
      filteredDbCats = filteredDbCats.filter(cat => cat.sex !== 'm');
    }
    if (!filters.sexFemale) {
      filteredDbCats = filteredDbCats.filter(cat => cat.sex !== 'f');
    }
    if (!filters.ageYoung) {
      filteredDbCats = filteredDbCats.filter(cat => cat.ageMonths > 12);
    }
    if (!filters.ageAdult) {
      filteredDbCats = filteredDbCats.filter(cat => !(cat.ageMonths >= 12 && cat.ageMonths < 60));
    }
    if (!filters.ageSenior) {
      filteredDbCats = filteredDbCats.filter(cat => cat.ageMonths < 60);
    }

    // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
    function dynamicSort(property) {
      let sortOrder = 1;
      if (property[0] === '-') {
        sortOrder = -1;
        property = property.substr(1);
      }

      return function (a, b) {
        const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
      };
    }
    filteredDbCats.sort(dynamicSort(sortBy));

    const filteredCards = filteredDbCats.map((e, i) => {
      let sexIcon = '';
      let age = 0;
      let ageUnit = '';

      if (e.sex === 'm') {
        sexIcon = 'fa fa-mars';
      } else {
        sexIcon = 'fa fa-venus';
      }

      if (e.ageMonths >= 12) {
        age = Math.round(e.ageMonths / 12);
        if (age === 1) {
          ageUnit = ' rok';
        } else if (age >= 2 && age <= 4) {
          ageUnit = ' lata';
        } else {
          ageUnit = ' lat';
        }
      } else {
        age = e.ageMonths;
        if (e.ageMonths === 1) {
          ageUnit = ' miesiąc';
        } else if (e.ageMonths >= 2 && e.ageMonths <= 4) {
          ageUnit = ' miesiące';
        } else {
          ageUnit = ' miesięcy';
        }
      }


      return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={`${i}${e.name}`}>
          <div className="tile cat-card">
            <div className="thumbnail">
              <img src={e.mainPhoto} alt="" className="cat-img" />
            </div>
            <h1>
              {e.name}&nbsp;<i className={sexIcon} aria-hidden="true" />
            </h1>
            <span>wiek: {age}{ageUnit}</span>
            <p id="keywords">
              {e.keywords}
            </p>
            <p className="cat-short-desc">
              {e.desc.substring(0, 200) + '...'}
            </p>
            <Link to={`/cat-profile/${e.id}`}>
              <button className="button more">więcej</button>
            </Link>
          </div>
        </div>
      );
    });

    return filteredCards;
  }


  render() {
    return (
      <div className="row" id="results">
        {this.filterCards(this.state.cards)}
      </div>
    );
  }
}

export default CatCards;


// cards.push(
//   <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={i}>
//     <div className="tile cat-card">
//
//       <h1>
//         {snap.val()[i].name}&nbsp;<i className={sexIcon} aria-hidden="true"></i>
//       </h1>
//       <p id="keywords">
//         {snap.val()[i].keywords}
//       </p>
//       <p className="cat-short-desc">
//         {snap.val()[i].desc.substring(0, 200) + "..."}
//       </p>
//       <Link to={path}>
//         <button className="button more">więcej</button>
//       </Link>
//     </div>
//   </div>
// )

// console.log(this.props.activeFilters);
// let db = fb.database().ref("/");
// let cards = [];
// let indexes = [];
//
//
// db.on("value", snap => {
//
//
//   for (let i = 0; i < snap.val().length; i++) {
//
//     if (this.props.activeFilters.indexOf("sexMale") >= 0 && snap.val()[i].sex === "m" && indexes.indexOf(i) < 0) {
//       let sexIcon = "";
//       if (snap.val()[i].sex === "m") {
//         sexIcon = "fa fa-mars";
//       } else {
//         sexIcon = "fa fa-venus";
//       };
//
//       let path = "/cat-profile/" + [i];
//
//       cards.push(
//         <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={i}>
//           <div className="tile cat-card">
//             <div className="thumbnail">
//               <img src={snap.val()[i].mainPhoto} alt="" className="cat-img"/>
//             </div>
//             <h1>
//               {snap.val()[i].name}&nbsp;<i className={sexIcon} aria-hidden="true"></i>
//             </h1>
//             <p id="keywords">
//               {snap.val()[i].keywords}
//             </p>
//             <p className="cat-short-desc">
//               {snap.val()[i].desc.substring(0, 200) + "..."}
//             </p>
//             <Link to={path}>
//               <button className="button more">więcej</button>
//             </Link>
//           </div>
//         </div>
//       )
//       indexes.push(i);
//     }
//
//
//     if (this.props.activeFilters.indexOf("sexFemale") >= 0 && snap.val()[i].sex === "f" && indexes.indexOf(i) < 0) {
//       let sexIcon = "";
//       if (snap.val()[i].sex === "m") {
//         sexIcon = "fa fa-mars";
//       } else {
//         sexIcon = "fa fa-venus";
//       };
//
//       let path = "/cat-profile/" + [i];
//
//       cards.push(
//         <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={i}>
//           <div className="tile cat-card">
//             <div className="thumbnail">
//               <img src={snap.val()[i].mainPhoto} alt="" className="cat-img"/>
//             </div>
//             <h1>
//               {snap.val()[i].name}&nbsp;<i className={sexIcon} aria-hidden="true"></i>
//             </h1>
//             <p id="keywords">
//               {snap.val()[i].keywords}
//             </p>
//             <p className="cat-short-desc">
//               {snap.val()[i].desc.substring(0, 200) + "..."}
//             </p>
//             <Link to={path}>
//               <button className="button more">więcej</button>
//             </Link>
//           </div>
//         </div>
//       )
//       indexes.push(i);
//     }
//
//     if (this.props.activeFilters.indexOf("ageYoung") >= 0 && snap.val()[i].ageMonths < 12  && indexes.indexOf(i) < 0) {
//       let sexIcon = "";
//       if (snap.val()[i].sex === "m") {
//         sexIcon = "fa fa-mars";
//       } else {
//         sexIcon = "fa fa-venus";
//       };
//
//       let path = "/cat-profile/" + [i];
//
//       cards.push(
//         <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={i}>
//           <div className="tile cat-card">
//             <div className="thumbnail">
//               <img src={snap.val()[i].mainPhoto} alt="" className="cat-img"/>
//             </div>
//             <h1>
//               {snap.val()[i].name}&nbsp;<i className={sexIcon} aria-hidden="true"></i>
//             </h1>
//             <p id="keywords">
//               {snap.val()[i].keywords}
//             </p>
//             <p className="cat-short-desc">
//               {snap.val()[i].desc.substring(0, 200) + "..."}
//             </p>
//             <Link to={path}>
//               <button className="button more">więcej</button>
//             </Link>
//           </div>
//         </div>
//       )
//       indexes.push(i);
//     }
//
//     if (this.props.activeFilters.indexOf("ageAdult") >= 0 && snap.val()[i].ageMonths >= 12 && snap.val()[i].ageMonths < 60 && indexes.indexOf(i) < 0) {
//       let sexIcon = "";
//       if (snap.val()[i].sex === "m") {
//         sexIcon = "fa fa-mars";
//       } else {
//         sexIcon = "fa fa-venus";
//       };
//
//       let path = "/cat-profile/" + [i];
//
//       cards.push(
//         <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={i}>
//           <div className="tile cat-card">
//             <div className="thumbnail">
//               <img src={snap.val()[i].mainPhoto} alt="" className="cat-img"/>
//             </div>
//             <h1>
//               {snap.val()[i].name}&nbsp;<i className={sexIcon} aria-hidden="true"></i>
//             </h1>
//             <p id="keywords">
//               {snap.val()[i].keywords}
//             </p>
//             <p className="cat-short-desc">
//               {snap.val()[i].desc.substring(0, 200) + "..."}
//             </p>
//             <Link to={path}>
//               <button className="button more">więcej</button>
//             </Link>
//           </div>
//         </div>
//       )
//       indexes.push(i);
//     }
//
//     if (this.props.activeFilters.indexOf("ageSenior") >= 0 && snap.val()[i].ageMonths >= 60 && indexes.indexOf(i) < 0) {
//       let sexIcon = "";
//       if (snap.val()[i].sex === "m") {
//         sexIcon = "fa fa-mars";
//       } else {
//         sexIcon = "fa fa-venus";
//       };
//
//       let path = "/cat-profile/" + [i];
//
//       cards.push(
//         <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={i}>
//           <div className="tile cat-card">
//             <div className="thumbnail">
//               <img src={snap.val()[i].mainPhoto} alt="" className="cat-img"/>
//             </div>
//             <h1>
//               {snap.val()[i].name}&nbsp;<i className={sexIcon} aria-hidden="true"></i>
//             </h1>
//             <p id="keywords">
//               {snap.val()[i].keywords}
//             </p>
//             <p className="cat-short-desc">
//               {snap.val()[i].desc.substring(0, 200) + "..."}
//             </p>
//             <Link to={path}>
//               <button className="button more">więcej</button>
//             </Link>
//           </div>
//         </div>
//       )
//       indexes.push(i);
//     }
//
//
//   }
//
// });
