import React from 'react';
import { StyledHeader, StyledNavLink } from './index.style';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <StyledHeader>
      <div className="navlink-container">
        <StyledNavLink to="/">MEN</StyledNavLink>
        <StyledNavLink to="/">WOMEN</StyledNavLink>
        <StyledNavLink to="/">LIKE</StyledNavLink>
      </div>
      <StyledNavLink to="/" className="logo">
        FOST
      </StyledNavLink>
      <div className="navlink-container">
        <StyledNavLink to="/">MY PAGE</StyledNavLink>
        <StyledNavLink to="/">CART</StyledNavLink>
        <StyledNavLink to="/">LOGIN</StyledNavLink>
      </div>
    </StyledHeader>
  );
};

export default Header;
