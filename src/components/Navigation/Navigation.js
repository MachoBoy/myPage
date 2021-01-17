import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as NavActions from "../../module/Nav";

const Navigation = (props) => {
  const { navData } = props;
  const { setMenuActive } = props.actions;
  return (
    <NavContainer>
      <NavWrapper>
        {navData.map((nav, index) => {
          const { number, title } = nav;
          return (
            <NavList key={number} onClick={() => setMenuActive(index)}>
              <NavItem className="nav-item">
                <Number className="nav-number">{number}</Number>
                <Line className="nav-line"></Line>
                <Title className="nav-title">{title}</Title>
              </NavItem>
            </NavList>
          );
        })}
      </NavWrapper>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  margin-top: 80px;
  display: block;
  font-size: 12px;
  font-weight: 500;
`;

const NavWrapper = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const NavList = styled.li`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const NavItem = styled.a`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    .nav-number {
      color: #fff;
    }
    .nav-line {
      width: 84px;
      background-color: #fff;
    }
    .nav-title {
      color: #fff;
    }
  }
`;

const Line = styled.span`
  margin-left: 0.9rem;
  margin-right: 0.9rem;
  width: 42px;
  display: inline-block;
  height: 2px;
  background-color: #a39595;
  transition: width 0.4s ease;
`;
const Title = styled.span`
  font-size: 1.25rem;
  letter-spacing: 3px;
  color: #a39595;
  text-transform: uppercase;
`;
const Number = styled.span`
  font-size: 1.25rem;
  color: #a39595;
`;

const mapStateToProps = (state) => ({ navData: state.NavData.navData });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(NavActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
