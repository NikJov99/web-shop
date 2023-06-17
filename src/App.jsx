// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ShopItem from "./pages/ShopItem";

//components
import NavBar from "./components/NavBar";

//other
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//styles
import "./styles/app.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ShopItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
