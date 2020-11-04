import React, { useState } from 'react';
import {
  StyledHeader,
  StyledNavLink,
  Dropdown,
  DropdownWrapper,
  DropdownLink,
} from './index.style';
// import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isHoverMen, setIsHoverMen] = useState(false);
  const [isHoverWomen, setIsHoverWomen] = useState(false);
  const [isHoverLike, setIsHoverLike] = useState(false);
  const [isHoverMypage, setIsHoverMypage] = useState(false);

  return (
    <>
      <StyledHeader>
        <div className="navlink-container">
          <StyledNavLink
            onMouseEnter={() => setIsHoverMen(true)}
            onMouseLeave={() => setIsHoverMen(false)}
            to="/items"
            data-category="men"
          >
            MEN
            {isHoverMen && (
              <DropdownWrapper>
                <Dropdown>
                  <DropdownLink to="/items">아우터</DropdownLink>
                  <DropdownLink to="/items">상의</DropdownLink>
                  <DropdownLink to="/items">하의</DropdownLink>
                  <DropdownLink to="/items">기타</DropdownLink>
                </Dropdown>
              </DropdownWrapper>
            )}
          </StyledNavLink>

          <StyledNavLink
            onMouseEnter={() => setIsHoverWomen(true)}
            onMouseLeave={() => setIsHoverWomen(false)}
            to="/items"
          >
            WOMEN
            {isHoverWomen && (
              <DropdownWrapper>
                <Dropdown>
                  <DropdownLink to="/items">아우터</DropdownLink>
                  <DropdownLink to="/items">상의</DropdownLink>
                  <DropdownLink to="/items">하의</DropdownLink>
                  <DropdownLink to="/items">기타</DropdownLink>
                </Dropdown>
              </DropdownWrapper>
            )}
          </StyledNavLink>
          <StyledNavLink
            onMouseEnter={() => setIsHoverLike(true)}
            onMouseLeave={() => setIsHoverLike(false)}
            to="/like/item"
          >
            LIKE
            {isHoverLike && (
              <DropdownWrapper>
                <Dropdown>
                  <DropdownLink to="/like/store">찜한 상점</DropdownLink>
                  <DropdownLink to="/like/item">찜한 옷들</DropdownLink>
                </Dropdown>
              </DropdownWrapper>
            )}
          </StyledNavLink>
        </div>
        <StyledNavLink to="/" className="logo">
          FOST
        </StyledNavLink>
        <div className="navlink-container">
          <StyledNavLink
            onMouseEnter={() => setIsHoverMypage(true)}
            onMouseLeave={() => setIsHoverMypage(false)}
            to="/"
          >
            MY PAGE
            {isHoverMypage && (
              <DropdownWrapper>
                <Dropdown>
                  <DropdownLink to="/">회원 정보</DropdownLink>
                  <DropdownLink to="/">배송 조회</DropdownLink>
                  <DropdownLink to="/">쿠폰</DropdownLink>
                  <DropdownLink to="/">Q&A</DropdownLink>
                </Dropdown>
              </DropdownWrapper>
            )}
          </StyledNavLink>
          <StyledNavLink to="/">CART</StyledNavLink>
          <StyledNavLink to="/">LOGIN</StyledNavLink>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
