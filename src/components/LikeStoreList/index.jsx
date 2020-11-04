import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const StyledLikeStoreList = styled.main`
  padding: 30px 0 100px 0;
`;

const StoreInfoWrap = styled.div`
  display: flex;
  align-items: center;
  width: 1275px;
  height: 124px;
  margin: 6px auto;

  .store-icon-wrap {
    cursor: pointer;
    width: 350px;
    display: flex;
    align-items: center;
    font-size: 30px;
  }

  .store-icon {
    width: 104px;
    height: 104px;
    border-radius: 50%;
    margin-right: 14px;
  }

  .recent-item {
    width: 102px;
    height: 124px;
    margin: 2px;
    cursor: pointer;
  }

  .hashtag-wrap {
    width: 232px;
    font-size: 27px;
    margin-right: 92px;
  }

  .recent-item-wrap {
    margin-right: 40px;
  }

  .like-wrap {
    width: 106px;
    height: 88px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    & > img {
      width: 71.63px;
      height: 63.94px;
    }
    & > span {
      font-size: 20px;
      position: absolute;
      bottom: 10%;
      right: 14%;
    }
  }
`;

const dummies = [];
for (let i = 0; i < 10; i++) {
  dummies.push({
    storeImgSrc: '/dummy/rectangle.png',
    storeName: '바른남자',
    hashtags: ['유니크', '아메카지', '미니멀'],
    recentItems: [
      '/dummy/rectangle.png',
      '/dummy/rectangle.png',
      '/dummy/rectangle.png',
      '/dummy/rectangle.png',
    ],
    likes: 256,
  });
}

const LikeStoreList = withRouter(({ history }) => {
  return (
    <StyledLikeStoreList>
      {dummies.map(({ storeImgSrc, storeName, hashtags, recentItems, likes }) => (
        <StoreInfoWrap>
          <div
            className="store-icon-wrap"
            onClick={() => {
              history.push('/items');
            }}
          >
            <img className="store-icon" src={storeImgSrc} alt="store-icon"></img>
            <span>{storeName}</span>
          </div>
          <div className="hashtag-wrap">
            {hashtags.map((hashtag) => (
              <span>#{hashtag} </span>
            ))}
          </div>
          <div className="recent-item-wrap">
            <img
              className="recent-item"
              src={recentItems[0]}
              onClick={() => {
                history.push('/product');
              }}
              alt="recent-item1"
            />
            <img
              className="recent-item"
              src={recentItems[1]}
              onClick={() => {
                history.push('/product');
              }}
              alt="recent-item2"
            />
            <img
              className="recent-item"
              src={recentItems[2]}
              onClick={() => {
                history.push('/product');
              }}
              alt="recent-item3"
            />
            <img
              className="recent-item"
              src={recentItems[3]}
              onClick={() => {
                history.push('/product');
              }}
              alt="recent-item4"
            />
          </div>
          <div className="like-wrap">
            <img src="/itemlist/like-button-clicked.svg" alt="like button" className="" />
            <span>{likes}</span>
          </div>
        </StoreInfoWrap>
      ))}
    </StyledLikeStoreList>
  );
});

export default LikeStoreList;
