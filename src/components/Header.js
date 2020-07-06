import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand><h1><b>Peeto Outlet</b></h1></NavbarBrand>
          </div>
      </Navbar>
    </React.Fragment>
    );
  }
}

export default Header;