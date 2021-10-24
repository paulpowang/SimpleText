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
import * as actionCreators from "./store/actionCreators";

const Header = (props) => {
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
            <CSSTransition timeout={200} in={props.focused} classNames="slide">
              <NavSearch
                className={props.focused ? "focused" : ""}
                onFocus={() => props.handleInputFocus()}
                onBlur={() => props.handleInputBlur()}
              ></NavSearch>
            </CSSTransition>
            <span
              className={
                props.focused ? "focused material-icons" : "material-icons"
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
};

const mapStateToProps = (state) => {
  return {
    focused: state.header.get("focused"),
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = actionCreators.searchFocus();
      dispatch(action);
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Header);
