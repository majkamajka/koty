import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class SortBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterMenuDisplay: "none",
      arrowClass: "fa fa-arrow-circle-down"
    }
  }

  filterMenuToggle = (event) => {
    if (this.state.filterMenuDisplay === "none"){
      this.setState({
        filterMenuDisplay: "block",
        arrowClass: "fa fa-arrow-circle-up"
      })
    } else {
      this.setState({
        filterMenuDisplay: "none",
        arrowClass: "fa fa-arrow-circle-down"
      })
    }
  }

  render () {
    let filterMenuDisplay = {display: this.state.filterMenuDisplay}

    return (
      <section className="row" id="selection-bar">

        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="filter-click">
          <div className="filter-click" onClick={this.filterMenuToggle}>
            <span>Filtruj</span> <i className={this.state.arrowClass} aria-hidden="true"></i>
          </div>

          <div id="filter-menu" style={filterMenuDisplay}>
            <form name="search">
              <span>płeć:</span><br/><hr/>
                <input type="checkbox" name="sex" value="male" defaultChecked></input> panowie<hr/>
                <input type="checkbox" name="sex" value="female" defaultChecked></input> panie<hr/><br/>
              <span>wiek:</span><br/><hr/>
                <input type="checkbox" name="age" value="young" defaultChecked></input> &lt; 1 rok<hr/>
                <input type="checkbox" name="age" value="adult" defaultChecked></input> 1-5 lat<hr/>
                <input type="checkbox" name="age" value="senior" defaultChecked></input> &gt; 5 lat<hr/><br/>
              <span>adopcje:</span><br/><hr/>
                <input type="checkbox" name="adopt" value="false" defaultChecked></input> brak opiekuna<hr/>
                <input type="checkbox" name="adopt" value="true" defaultChecked></input> zaadoptowane<hr/>
                <input className="button shadow-hover" type="submit" value="szukaj"></input>
            </form>
          </div>
        </div>

        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 sort-container">
          <form id="sort">
            <label>sortuj: </label>
            <select>
              <option value="lonely">samotne</option>
              <option value="oldest">najstarsze</option>
              <option value="youngest">najmłodsze</option>
              <option value="popular">popularne</option>
              <option value="dt">w DT</option>
            </select>
          </form>
        </div>
      </section>
    )
  };
};

export default SortBar;
