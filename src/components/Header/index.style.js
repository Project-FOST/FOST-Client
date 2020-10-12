import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HEADER_HEIGHT } from '../../constants';

export const StyledHeader = styled.header`
  height: ${HEADER_HEIGHT}px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > .logo {
    font-family: Helvetica Neue;
    font-size: 48px;
    line-height: 59px;

    width: 199px;
    height: 59px;
    text-align: center;

    letter-spacing: 0.5em;
  }

  & > .navlink-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0 50px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  all: unset;
  cursor: pointer;

  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 18px;

  width: 100px;

  text-align: center;

  color: black;
`;
