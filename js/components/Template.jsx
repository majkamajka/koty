import React from 'react';
import { IndexLink } from 'react-router';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

class Template extends React.Component {


  render() {
    return (
      <div className="container-full">
        <Header />

        {this.props.children}

        <Footer />
      </div>
    );
  }
}

export default Template;
