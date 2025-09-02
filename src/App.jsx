import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Settings";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Home from "./Pages/Home/index.jsx";
import About from "./Pages/About/index.jsx";
import "./App.css";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Dashboard />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="settings" element={<Settings />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;



