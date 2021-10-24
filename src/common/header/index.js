import { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem } from "./style";

class Header extends Component {
  render() {
    return (
      <div>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem className="left active">Main</NavItem>
            <NavItem className="left">DownLoad App</NavItem>
            <NavItem className="right">Login</NavItem>
            <NavItem className="right">Aa</NavItem>
          </Nav>
        </HeaderWrapper>
      </div>
    );
  }
}

export default Header;
