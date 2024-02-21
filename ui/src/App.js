import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShopCategory } from "./Pages/ShopCategory";
import { Shop } from "./Pages/Shop";
import Product from "./Pages/Product";
import { LoginSignup } from "./Pages/LoginSignup";
import { Cart } from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import car_banner from "./Components/Assets/car_banner.png";
import motorcycles_banner from "./Components/Assets/motarcycle_banner.png";
import bicycle_banner from "./Components/Assets/bicycle_banner.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/cars"
            element={<ShopCategory banner={car_banner} category="car" />}
          />
          <Route
            path="/motorcycles"
            element={
              <ShopCategory banner={motorcycles_banner} category="motorcycle" />
            }
          />
          <Route
            path="/bicycles"
            element={
              <ShopCategory banner={bicycle_banner} category="bicycle" />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
