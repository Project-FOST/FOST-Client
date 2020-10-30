import React from 'react';
import styled from 'styled-components';

const StyledProductDetail = styled.main`
  padding: 82px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .represent-wrapper {
    align-self: center;
    width: 100%;
    max-width: 1280px;
    margin-bottom: 74px;
    display: flex;
    justify-content: space-between;
  }

  & .represent-img {
    min-width: 504px;
    max-width: 504px;
    min-height: 438px;
    max-height: 438px;
  }

  & .represent-info-wrapper {
    min-width: 504px;
    max-width: 504px;
    min-height: 438px;
    max-height: 438px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & .detail-img {
    width: 1280px;
    /* min-width: 1280px; */
  }

  & .row-2 {
    width: 400px;
    height: 154px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 72px;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  & .buy-button {
    width: 140px;
    height: 50px;
    background-color: #c4c4c4;
    text-align: center;
    line-height: 50px;
    font-size: 25px;
    cursor: pointer;
    border: 1px solid black;
  }
  & .row-1 {
    width: 400px;
    position: relative;
    display: flex;
    align-items: center;
    padding: 8px 0;
  }
  & .row-1-1 {
    width: 300px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
  }
  & .row-2-1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .row-2-2 {
    width: 260px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
  }
  & .brand-icon {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
  & .brand-name {
    font-size: 30px;
    margin: 0 24px;
    cursor: pointer;
  }

  & .arrow-icon {
    cursor: pointer;
    width: 24px;
    height: 24px;
  }

  & .product-name {
    font-size: 25px;
    width: 260px;
    text-align: left;
  }

  & .like-icon-wrap {
    position: absolute;
    right: 10px;
  }

  & .like-icon {
    cursor: pointer;
    width: 20px;
    height: 20px;
    margin-right: 4px;
    &:hover {
      transition: transform 0.1s ease-in;
      transform: scale(1.1);
    }
  }
`;

const ProductDetail = () => {
  return (
    <StyledProductDetail>
      <div className="represent-wrapper">
        <img className="represent-img" src="dummy/rectangle.png" alt="" srcset="" />
        <div className="represent-info-wrapper">
          <div className="row-1">
            <div className="row-1-1">
              <img className="brand-icon" src="dummy/rectangle.png" alt="brand-icon" />
              <span className="brand-name">Satorial</span>
              <img className="arrow-icon" src="product-detail/arrow.svg" alt="arrow" />
            </div>
            <div className="like-icon-wrap">
              <img className="like-icon" src="itemlist/like-button.svg" alt="like" />
              <span>214</span>
            </div>
          </div>
          <div className="row-2">
            <div className="row-2-1">
              <div className="product-name">Flash Blue outer</div>
              <div className="like-icon-wrap">
                <img className="like-icon" src="itemlist/like-button.svg" alt="like" />
                <span>214</span>
              </div>
            </div>
            <div className="row-2-2">
              <span className="price-info">판매금액</span>
              <span>30,000 원</span>
            </div>
          </div>
          <div className="buy-button">buy it now</div>
        </div>
      </div>
      <img className="detail-img" src="dummy/product-detail.jpg" />
    </StyledProductDetail>
  );
};

export default ProductDetail;
