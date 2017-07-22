import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class SortBar extends React.Component {
  render () {
    return (
      <section className="row" id="selection-bar">

        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="filter-click">
          <div className="filter-click">
            <span>Filtruj</span> <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
          </div>

          <div id="filter-menu" className="hidden">
            <form name="search">
              <span>płeć:</span><br/><hr/>
                <input type="checkbox" name="sex" value="male" checked></input> panowie<hr/>
                <input type="checkbox" name="sex" value="female" checked></input> panie<hr/><br/>
              <span>wiek:</span><br/><hr/>
                <input type="checkbox" name="age" value="young" checked></input> &lt; 1 rok<hr/>
                <input type="checkbox" name="age" value="adult" checked></input> 1-5 lat<hr/>
                <input type="checkbox" name="age" value="senior" checked></input> &gt; 5 lat<hr/><br/>
              <span>adopcje:</span><br/><hr/>
                <input type="checkbox" name="adopt" value="false" checked></input> brak opiekuna<hr/>
                <input type="checkbox" name="adopt" value="true" checked></input> zaadoptowane<hr/>
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
