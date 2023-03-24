import './App.css';
import React from 'react';
import Homepage from "./pages/homepage/homepage.component";
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.components.jsx';
import Header from './component/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from "/firebase/firebase.utils"

class App extends React.Component() {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }


  unSubscribeFromAuth = null

  ComponentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;