import React, { Component } from 'react';
import Menu from './Menu';
import Header from './Header';

class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        <br />
        <Menu />
      </div>
    );
  }
}

export default Main;