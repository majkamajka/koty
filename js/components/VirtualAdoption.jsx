import React from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class VirtualAdoption extends React.Component {
  render() {
    return (
      <section className="row adopt" id="virtual-adoption">
        <div className="col-xs-12">
          <div className="row flex">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 flex">
              <div className="tile">
                <h1 className="heading">Wirtualna adopcja</h1>
                <p>
                  Jeżeli marzysz o adopcji kota i uczynieniu jego (i swojego) życia lepszym, a zdajesz sobie sprawę, że nie masz warunków albo możliwości, żeby fizycznie zaadoptować kociaka, to wirtualna adopcja jest idealnym rozwiązaniem dla Ciebie! Możesz poprawić warunki życia wybranego przez Ciebie kotka poprzez regularne wpłaty na poczet opieki nad nim.
                </p>
                <div className="btn-wrapper">
                  <Link to="/adoptions">
                    <button className="button">Zobacz aktualne</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 flex slider">
              <div id="slider" className="small-shadow shadow-hover">
                slider ze zdjeciami kotow
              </div>
            </div>


            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 flex virtual-adopt">
              <div className="tile">
                <h2 className="heading">Co zyskujesz?</h2>
                <ul className="square-list">
                  <li>możliwość odwiedzania swojego podopiecznego w DT</li>
                  <li>uszczęśliwiasz bezbronne zwierzątko</li>
                  <li>odciążasz finansowo ośrodek</li>
                  <li>jeżli zechcesz, będziesz wpisany na stronie internetowej jako opiekun swojego kotka</li>
                  <li>+100 do bycia dobrym człowiekiem :)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default VirtualAdoption;
