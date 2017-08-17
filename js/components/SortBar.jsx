import React from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';
import FilterMenu from './FilterMenu.jsx';

class SortBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterMenuDisplay: 'none',
      arrowClass: 'fa fa-arrow-circle-down',
    };
  }

  filterMenuToggle = () => {
    if (this.state.filterMenuDisplay === 'none') {
      this.setState({
        filterMenuDisplay: 'block',
        arrowClass: 'fa fa-arrow-circle-up',
      });
    } else {
      this.setState({
        filterMenuDisplay: 'none',
        arrowClass: 'fa fa-arrow-circle-down',
      });
    }
  };

  handleSortChange = (event) => {
    event.preventDefault();
    this.props.receiveSortBy(event.target.value);
  }

  render() {
    const filterMenuDisplay = { display: this.state.filterMenuDisplay };

    return (
      <section className="row" id="selection-bar">

        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" id="filter-click">
          <div className="filter-click" onClick={this.filterMenuToggle}>
            <span>Filtruj</span> <i className={this.state.arrowClass} aria-hidden="true" />
          </div>

          <div id="filter-menu" style={filterMenuDisplay}>
            <form name="search">
              <span>płeć:</span><br /><hr />
                <input type="checkbox" name="sex" value="male" defaultChecked /> panowie<hr />
                <input type="checkbox" name="sex" value="female" defaultChecked /> panie<hr /><br />
              <span>wiek:</span><br /><hr />
                <input type="checkbox" name="age" value="young" defaultChecked /> &lt; 1 rok<hr />
                <input type="checkbox" name="age" value="adult" defaultChecked /> 1-5 lat<hr />
                <input type="checkbox" name="age" value="senior" defaultChecked /> &gt; 5 lat<hr /><br />
              <span>adopcje:</span><br /><hr />
                <input type="checkbox" name="adopt" value="false" defaultChecked /> brak opiekuna<hr />
                <input type="checkbox" name="adopt" value="true" defaultChecked /> zaadoptowane<hr />
                <input className="button shadow-hover" type="submit" value="szukaj" />
            </form>
          </div>
        </div>

        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 sort-container">
          <form id="sort">
            <label>sortuj: </label>
            <select onChange={this.handleSortChange}>
              <option value="adoptions">samotne</option>
              <option value="-ageMonths">najstarsze</option>
              <option value="ageMonths">najmłodsze</option>

            </select>
          </form>
        </div>
      </section>
    );
  }
}

export default SortBar;


// <option value="popular">popularne</option>
// <option value="dt">w DT</option>
