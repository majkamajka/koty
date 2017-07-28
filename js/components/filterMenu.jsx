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
  };

  handleCheckboxChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }



// czekboksy nie do końca działają dobrze - kliknięcie poza czekboks odpala event na pierwszym inpucie z grupy - wtf?!
  render () {
    return (
      <div className="col-md-2 col-lg-2" id="filter-menu-desktop">
        <form name="search">

          <label>płeć:<br/><hr/>
            <input type="checkbox" name="sexMale" checked={this.state.sexMale} onChange={this.handleCheckboxChange} />
              <span> panowie</span><hr/>
            <input type="checkbox" name="sexFemale" checked={this.state.sexFemale} onChange={this.handleCheckboxChange} />
              <span> panie</span><hr/><br/>
          </label>

          <label>wiek:<br/><hr/>
            <input type="checkbox" name="ageYoung" checked={this.state.ageYoung} onChange={this.handleCheckboxChange} />
              <span> &lt; 1 rok</span><hr/>
            <input type="checkbox" name="ageAdult" checked={this.state.ageAdult} onChange={this.handleCheckboxChange} />
              <span> 1-5 lat</span><hr/>
            <input type="checkbox" name="ageSenior" checked={this.state.ageSenior} onChange={this.handleCheckboxChange} />
              <span> &gt; 5 lat</span><hr/><br/>
          </label>

          <label>inne:<br/><hr/>
            <input type="checkbox" name="notAdopted" checked={this.state.notAdopted} onChange={this.handleCheckboxChange} />
              <span> brak opiekuna</span><hr/>
            <input type="checkbox" name="ill" checked={this.state.ill} onChange={this.handleCheckboxChange} />
              <span> chore</span><hr/>
            <input type="checkbox" name="urgent" checked={this.state.urgent} onChange={this.handleCheckboxChange} />
              <span> PILNE</span><hr/>
          </label>

            <input className="button shadow-hover" type="submit" value="szukaj" onClick={this.submitFilters}></input>
        </form>
      </div>
    )
  };
};

export default FilterMenu;
