import styled from "styled-components";
import LogoPic from "../../statics/Logo-SimpleText.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: "/",
})`
  position: absolute;
  display: block;
  height: 100%;
  width: 100px;

  background: url(${LogoPic});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Nav = styled.div`
  height: 100%;
  width: 960px;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: orange;
  }
`;
