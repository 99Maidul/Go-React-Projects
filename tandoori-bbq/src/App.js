import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.components.jsx';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;