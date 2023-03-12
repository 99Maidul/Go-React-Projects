import React, { useState, useEffect } from 'react';
import CardContainer from './ProductCards';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './Navigation';
import { SignInModalWindow, BuyModalWindow } from './modalwindows';
import About from './About';
import Orders from './orders';

function App() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [user, setUser] = useState({ loggedin: false, name: "" });
  const [productid, setProductid] = useState(null);
  const [price, setPrice] = useState(null);

  const handleShowSignInModalWindow = () => {
    setShowSignInModal(true);
  };

  const handleToggleSignInModalWindow = () => {
    setShowSignInModal(prevState => !prevState);
  };

  const handleShowBuyModalWindow = (id, price) => {
    setShowBuyModal(true);
    setProductid(id);
    setPrice(price);
  };

  const handleToggleBuyModalWindow = () => {
    setShowBuyModal(prevState => !prevState);
  };

  useEffect(() => {
    fetch('user.json')
      .then(res => res.json())
      .then((result) => {
        console.log('Fetch...');
        setUser(result);
      });
  }, []);

  return (
    <div>
      <Router>
        <div>
          <Nav user={user} showModalWindow={handleShowSignInModalWindow} />
          <div className='container pt-4 mt-4'>
            <Route exact path="/" render={() => <CardContainer location='cards.json' showBuyModal={handleShowBuyModalWindow} />} />
            <Route path="/promos" render={() => <CardContainer location='promos.json' promo={true} showBuyModal={handleShowBuyModalWindow} />} />
            {user.loggedin ? <Route path="/myorders" render={() => <Orders location='user.json' />} /> : null}
            <Route path="/about" component={About} />
          </div>
          <SignInModalWindow showModal={showSignInModal} toggle={handleToggleSignInModalWindow} />
          <BuyModalWindow showModal={showBuyModal} toggle={handleToggleBuyModalWindow} user={user.ID} productid={productid} price={price} />
        </div>
      </Router>
    </div>
  );
}

export default App;
