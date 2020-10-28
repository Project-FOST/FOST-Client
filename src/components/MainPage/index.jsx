import React, { useState } from 'react';
import { StyledMainPage } from './index.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../constants';

const StyledSlider = styled(Slider)`
  overflow: hidden;
  .slick-slide div {
    height: calc(100vh - ${HEADER_HEIGHT}px);
    outline: none;
  }
  .slick-track {
    margin: 0;
  }
  .slick-active {
    background-color: black;
  }
`;

const ImageContainer = styled.div`
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledSlickDots = styled.div`
  position: absolute;
  bottom: 10%;
  height: 4px;
  margin: 0;

  & ul {
    background: #ffffff;
    height: 4px;
    margin: 0 auto;
    width: fit-content;
    padding: 0;
  }

  & ul > li {
    top: -13px;
    margin: 0;
    height: 120%;
    width: 8vw;
  }
`;

const StyledSlickDotsUl = styled.div`
  position: absolute;
  margin: 0;
  top: 0;
  /* width: 5vw; */
  height: 4px;
  top: 0;
`;

const imgUrl = 'carousel/main-slider.png';
const dummyitems = [
  { id: 1, url: imgUrl },
  { id: 2, url: imgUrl },
  { id: 3, url: imgUrl },
  { id: 4, url: imgUrl },
  { id: 5, url: imgUrl },
  { id: 6, url: imgUrl },
  { id: 7, url: imgUrl },
  { id: 8, url: imgUrl },
  { id: 9, url: imgUrl },
  { id: 10, url: imgUrl },
];

const MainPage = () => {
  const [items, setItems] = useState(dummyitems);
  const settings = {
    dots: true,
    appendDots: (dots) => (
      <StyledSlickDots>
        <ul> {dots} </ul>
      </StyledSlickDots>
    ),
    customPaging: (i) => <StyledSlickDotsUl />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <StyledMainPage>
      <StyledSlider {...settings}>
        {items.map((item) => (
          <ImageContainer>
            <Img src={item.url}></Img>
          </ImageContainer>
        ))}
      </StyledSlider>
    </StyledMainPage>
  );
};

export default MainPage;
