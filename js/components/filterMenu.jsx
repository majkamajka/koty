import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class FilterMenu extends React.Component {
  render () {
    return (
      <div className="col-md-2 col-lg-2" id="filter-menu-desktop">
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
    )
  };
};

export default FilterMenu;
