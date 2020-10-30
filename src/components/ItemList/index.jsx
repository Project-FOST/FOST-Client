import React, { useState, useEffect } from 'react';
import {
  PageNumberWrapper,
  StyledItemListWrapper,
  StyledItemList,
  ItemWrapper,
} from './index.style';
import { withRouter } from 'react-router-dom';

const dummyItems = [];

for (let i = 0; i < 20; i++) {
  dummyItems.push({
    id: i,
    brand: 'Robert Fox',
    date: '5/27/15',
    title: 'Floyd Miles',
    price: '$572.26',
    imgsrc: 'dummy/rectangle.png',
  });
}

const ItemList = withRouter(({ history }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(dummyItems);
  }, [items]);

  const routeTo = () => {
    history.push('/product');
  };

  return (
    <StyledItemListWrapper>
      <StyledItemList>
        {items.map((item) => (
          <ItemWrapper onClick={() => routeTo()} key={item.id} imgsrc={item.imgsrc}>
            <div className="brand">{item.brand}</div>
            <div className="date">{item.date}</div>
            <div className="title">{item.title}</div>
            <div className="price">{item.price}</div>
            <img className="like" src="itemlist/like-button.svg" alt="like"></img>
          </ItemWrapper>
        ))}
      </StyledItemList>
      <PageNumberWrapper>
        <span style={{ 'font-weight': 'bold' }}>{'<'}</span>
        <span className="focused">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span style={{ 'font-weight': 'bold' }}>{'>'}</span>
      </PageNumberWrapper>
    </StyledItemListWrapper>
  );
});

export default ItemList;
