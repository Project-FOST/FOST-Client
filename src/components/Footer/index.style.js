import styled from 'styled-components';
// import { HEADER_HEIGHT } from '../../constants';

export const StyledFooter = styled.section`
  height: 87px;
  font-family: Roboto;
  font-weight: normal;
  background-color: rgba(196, 196, 196, 0.6);
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 15px;
  white-space: nowrap;
  & > a {
    all: unset;
    height: 20px;
    cursor: pointer;
    color: black;
  }
`;
