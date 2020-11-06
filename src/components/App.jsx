import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import MainPage from './MainPage';
import Footer from './Footer';
import ItemList from './ItemList';
import ProductDetail from './ProductDetail';
import Login from './Login';
import QnAWriter from './QnAWriter';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/items/:itemType?" component={ItemList} />
        <Route path="/product/:productNo?" component={ProductDetail} />
        <Route path="/login" component={Login} />
        <Route path="/qna/write" component={QnAWriter} />
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
