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
  padding-right: 70px;
  box-sizing: border-box;
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
  .material-icons {
    padding-top: 15px;
  }
`;
export const SearchWrapper = styled.div`
  float: left;
  position: relative;

  .material-icons {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #999;
      color: #777;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "Search",
})`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;

  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  font-size: 13px;

  float: right;
`;
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  margin: 5px;
  line-height: 20px;
  font-size: 12px;
  padding: 0 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #787878;
`;
export const SearchInfoList = styled.div`
  right: 0;
  top: 0;
  height: 100%;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
`;
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.text {
    color: #fff;
    background: #ec6149;
    .material-icons {
      font-size: 14px;
      margin-right: 10px;
    }
  }
`;
