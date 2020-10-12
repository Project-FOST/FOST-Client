import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import MainPage from './MainPage';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={MainPage} exact />
        {/* <Route path="/login" component={Login} />
        <Route path={['/mypage/:username?']} component={Mypage} />
        <Route path="/signup" component={Signup} />
        <Route path="/product/:productNo?" component={DetailPage} />
        <Route path="/fundings/:id" component={IdolProductList} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
