import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import MainPage from './MainPage';
import Footer from './Footer';
import ItemList from './ItemList';
import ProductDetail from './ProductDetail';
import LikeItemList from './LikeItemList';
import LikeStoreList from './LikeStoreList';
import Login from './Login';
import QnAWriter from './QnAWriter';
import QnA from './QnA';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/items/:itemType?" component={ItemList} />
        <Route path="/product/:productNo?" component={ProductDetail} />
        <Route path="/like/item/:userId?" component={LikeItemList} />
        <Route path="/like/store/:userId?" component={LikeStoreList} />
        <Route path="/login" component={Login} />
        <Route path="/qna/write" component={QnAWriter} />
        <Route path="/qna" component={QnA} />
        {/*
        <Route path={['/mypage/:username?']} component={Mypage} />
        <Route path="/signup" component={Signup} />
        <Route path="/fundings/:id" component={IdolProductList} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
