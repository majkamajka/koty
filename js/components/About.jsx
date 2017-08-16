import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class About extends React.Component {
  render () {
    return (
      <section className="row about" id="about">
        <div className="col-xs-12">
          <div className="row flex">

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 flex">
              <div className="tile">
                <h2 className="heading">Misja Koterii</h2>
                <ul className="square-list">
                  <li>kastracja kotów miejskich</li>
                  <li>identyfikacja wykastrowanych kotów przez nacięcie czubka ucha</li>
                  <li>oddawanie do adopcji kotów oswojonych oraz młodych, podatnych na oswojenie</li>
                  <li>profilaktyka weterynaryjna dla kotów miejskich</li>
                  <li>pomoc opiekunom kotów wolno żyjących</li>
                  <li>pomoc w wyłapywaniu wolno żyjących kotów</li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-5 col-lg-5 flex">
              <div className="tile">
                <h2 className="heading">Do adopcji</h2>
                <p>
                  Podstawowym zadaniem Koterii jest sterylizacja kotów wolnożyjących, które powinny po zabiegu wrócić tam, gdzie zostały złapane. Czasami jednak spotykamy koty, ktore na ulicy znalazły się przypadkiem - komuś zgineły lub zostały porzucone. Takie koty nie radzą sobie dobrze na podwórkach, przyzwyczajone do opieki nie potrafią znaleźć pożywienia czy schronienia, nie znają swoich naturalnych wrogów, nie rozumieją niebezpieczeństw. Drugą grupą kotów dla których szukamy domów są kocięta. Jeśli nie mają jeszcze trzech miesięcy jest duża szansa na ich oswojenie.
                </p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 flex">
              <div className="tile img">
                <div className="blend">
                  <p>Więcej informacji o&nbsp;adopcji:</p>
                  <a href="http://www.koteria.org.pl/adopcje/adopcje.htm"><button className="button">Zobacz</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  };
};

export default About;
