import React from 'react';
import styled from 'styled-components';
import ItemList from '../ItemList';

const LikeHeart = styled.img`
  margin-top: 34px;
  margin-bottom: 126px;
  &:hover {
    animation: pulse 1s ease-in;
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }
  }
`;

const LikeList = () => {
  return (
    <div>
      <LikeHeart src="/itemlist/like-button-clicked.svg" alt="title"></LikeHeart>
      <ItemList />
    </div>
  );
};

export default LikeList;
