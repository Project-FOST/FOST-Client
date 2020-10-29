import styled from 'styled-components';
import {HEADER_HEIGHT} from '../../constants/index'

export const StyledItemListWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const StyledItemList = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  justify-content: center;
  max-width: 1440px;
  width: fit-content;
  margin: 0 36px;
  margin-top: 23px;
  display: flex;
  flex-wrap: wrap;
`;

export const ItemWrapper = styled.div`
  width: 252px;
  height: 350px;
  box-sizing: content-box;
  background-image: url(${props => props.imgsrc ? props.imgsrc: ''});
  margin: 9px;
  background-color: black;
  text-align: left;
  position: relative;
  user-select: none;
  cursor: pointer;

  & > .brand {
    margin: 0 auto;
    margin-top: 12px;
    text-align: center;

    width: 84px;
    height: 26px;
  }

  & > .date {
    margin-top: 90%;
    margin-left: 32px;
  }
  & > .title, & > .price {
    margin-left: 22px;
  }

  & > .like {
    position: absolute;
    right: 20px;
    bottom: 10px;
    cursor: pointer;
    &:hover {
      transition: transform 0.1s ease-in;
      transform: scale(1.2);
    }
  }
`

export const PageNumberWrapper = styled.div`
  margin-top: 43px;
  margin-bottom: 54px;
 & > .focused {
   font-weight: bold
 }
 & > span {
  font-size: 30px;
  margin: 0 5px;
  cursor: pointer;
 }
`

