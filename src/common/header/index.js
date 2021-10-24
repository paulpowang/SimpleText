import { Component } from "react";
import { connect } from "react-redux";
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
                in={this.props.focused}
                classNames="slide"
              >
                <NavSearch
                  className={this.props.focused ? "focused" : ""}
                  onFocus={() => this.props.handleInputFocus()}
                  onBlur={() => this.props.handleInputBlur()}
                ></NavSearch>
              </CSSTransition>
              <span
                className={
                  this.props.focused
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

const mapStateToProps = (state) => {
  return {
    focused: state.focused,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: "search_focus",
      };
      dispatch(action);
    },
    handleInputBlur() {
      const action = {
        type: "search_blur",
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Header);
