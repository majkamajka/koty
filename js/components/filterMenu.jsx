import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class FilterMenu extends React.Component {
  render () {
    return (
      <div className="col-md-2 col-lg-2" id="filter-menu-desktop">
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
    )
  };
};

export default FilterMenu;
