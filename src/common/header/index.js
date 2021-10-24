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
import { CSSTransition } from "react-transition-group";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  handleInputFocus() {
    this.setState({
      focused: true,
    });
  }
  handleInputBlur() {
    this.setState({
      focused: false,
    });
  }

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
              <CSSTransition
                timeout={200}
                in={this.state.focused}
                classNames="slide"
              >
                <NavSearch
                  className={this.state.focused ? "focused" : ""}
                  onFocus={() => this.handleInputFocus()}
                  onBlur={() => this.handleInputBlur()}
                ></NavSearch>
              </CSSTransition>
              <span
                className={
                  this.state.focused
                    ? "focused material-icons"
                    : "material-icons"
                }
              >
                search
              </span>
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
