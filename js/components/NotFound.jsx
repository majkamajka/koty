import React from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class NotFound extends React.Component {
  render() {
    return <h1>404, Nothing is here</h1>;
  }
}

export default NotFound;
