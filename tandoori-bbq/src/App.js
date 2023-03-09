import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.components.jsx';
import Header from './component/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';



function App() {
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

export default App;