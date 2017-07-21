import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class SearchResults extends React.Component {
  render () {
    return (
      <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
        <div className="row" id="results">

             <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div className="tile cat-card">
                <div className="thumbnail">
                  <img src="images/catslider.jpg" alt="" className="cat-img"/>
                </div>
                  <h1>Mruczuś <i className="fa fa-mars" aria-hidden="true"></i></h1>
                  <p id="keywords">keywords</p>

                    <p className="cat-short-desc">
                      Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię trzeba cenić, ten Bonapart figurka! Bez Suworowa to mówiąc, że tytuły przychodzą z nadzwyczajnej ich lekkości woły właśnie z brylantów oprawa a prędki nie
                    </p>
                    <a href="cat-profile.html"><button className="button more">więcej</button></a>
                    <button className="button donate">wpłać</button>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
             <div className="tile cat-card">
               <div className="thumbnail">
                 <img src="images/catslider.jpg" alt="" className="cat-img"/>
               </div>
                 <h1>Kot nr 2 <i className="fa fa-mars" aria-hidden="true"></i></h1>
                 <p id="keywords">keywords</p>

                   <p className="cat-short-desc">
                    Wyszedł zmieszany i ziemię orzę gdy Sędziego z Rymszą, Rymsza z dom nikt mężczyzn widziana więc choć świadka nie było gorąca). wachlarz pozłocist powiewając rozlewał deszcz iskier rzęsisty. Głowa do Litwy kwestarz z barona przechrzciłby się na lewo, on Pana zastępuje i byle nie myśl twarz spójrzała, z jej wypadł suknia, a Praga już sam
                   </p>
                   <a href="cat-profile.html"><button className="button more">więcej</button></a>
                   <button className="button donate">wpłać</button>
             </div>
           </div>

        </div>
      </div>
    )
  };
};


export default SearchResults;
