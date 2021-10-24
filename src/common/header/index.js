import { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
} from "./style";

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
            <NavItem className="right">
              <span className="material-icons">text_fields</span>
            </NavItem>
            <SearchWrapper>
              <NavSearch></NavSearch>
              <span className="material-icons">search</span>
            </SearchWrapper>
            <Addition>
              <Button className="text">
                <span className="material-icons">edit</span>
                Text
              </Button>
              <Button className="reg">Regiter</Button>
            </Addition>
          </Nav>
        </HeaderWrapper>
      </div>
    );
  }
}

export default Header;
