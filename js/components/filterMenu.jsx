import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class FilterMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sexMale: true,
      sexFemale: true,
      ageYoung: true,
      ageAdult: true,
      ageSenior: true,
      notAdopted: true,
      ill: true,
      urgent: true,
    }
  }

  render () {
    return (
      <div className="col-md-2 col-lg-2" id="filter-menu-desktop">
        <form name="search">

          <label>płeć:<br/><hr/>
            <input type="checkbox" name="sex" checked={this.state.sexMale}></input>
              <span> panowie</span><hr/>
            <input type="checkbox" name="sex" checked={this.state.sexFemale}></input>
              <span> panie</span><hr/><br/>
          </label>

          <label>wiek:<br/><hr/>
            <input type="checkbox" name="age" checked={this.state.ageYoung}></input>
              <span> &lt; 1 rok</span><hr/>
            <input type="checkbox" name="age" checked={this.state.ageAdult}></input>
              <span> 1-5 lat</span><hr/>
            <input type="checkbox" name="age" checked={this.state.ageSenior}></input>
              <span> &gt; 5 lat</span><hr/><br/>
          </label>

          <label>inne:<br/><hr/>
            <input type="checkbox" name="other" checked={this.state.notAdopted}></input>
              <span> brak opiekuna</span><hr/>
            <input type="checkbox" name="other" checked={this.state.ill}></input>
              <span> chore</span><hr/>
            <input type="checkbox" name="other" checked={this.state.urgent}></input>
              <span> PILNE</span><hr/>
          </label>
          
            <input className="button shadow-hover" type="submit" value="szukaj"></input>
        </form>
      </div>
    )
  };
};

export default FilterMenu;
