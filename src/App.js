import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import PrivateRoute from "./routes/PrivateRoute";
// import PublicRoute from "./routes/PublicRoute";
import Layout from '../src/components/Layout/layout'
// import ProductsState from "./context/products/ProductsState";
import UserProvider from "./context/UserContext";
import CartProvider from './context/CartContext';
// import Admin from "./pages/Admin";
// import Home from "./pages/Home";
// import LandingPage from "./pages/LandingPage";
import LandingPage from "./pages/LandingPage";
// import ProductsState from "./context/products/ProductsState";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Contacto from "./pages/Contact";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
//import Nosotros from "./pages/AboutUs";
//import Productos from "./pages/Products";

// import ProductDetail from "./pages/ProductDetail";
// import Products from "./pages/Products";
import Register from "./pages/Register";
// import AdminRoute from "./routes/AdminRoute";
//import PublicRoute from "./routes/PublicRoute";
import './App.css';
import AboutUs from "./components/AboutUs/AboutUs";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import "./App.css";
// import PrivateRoute from "./routes/PrivateRoute";
// import AdminRoute from "./routes/AdminRoute";
// import PublicRoute from "./routes/PublicRoute";
import ProductsProvider from "./context/ProductsContext";
import AdminABM from "./components/Admin/AdminABM";
import ShoppingCart from './components/ShoppingCart/ShoppingCart'

function App() {
  return (
    <>
      <Router>
      <CartProvider>
      <UserProvider>
      <ProductsProvider>
        {/* <ProductsState> */}
          <Layout>
            <Routes>
              {/* <Route path="*" element={<PublicRoute><LandingPage /></PublicRoute>} />
              <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} /> */}
              {/* -- */}
              {/* <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} /> */}
              {/* <Route path="/registro" element={<PublicRoute><Register /></PublicRoute>} /> */}
               {/* -- */}
              {/* <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} /> */}
              {/* <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} /> */}
              {/* <Route path="/productos" element={<PrivateRoute><Products /></PrivateRoute>} />
              <Route path="/productos/:id" element={<PrivateRoute><ProductDetail /></PrivateRoute>} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path='/producto' element={<ProductPage/>} />
              <Route path='/carrito' element={<CartPage/>} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="*" element={<LandingPage />} />
              <Route path="/productos" element={<Products />} />
              <Route path="/carrito" element={<ShoppingCart />} />
              {/* <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/productos" element={<Productos />} /> */}
              {/* <Route path="/productos/:id" element={<ProductDetail />} /> */}
            </Routes>
            </Layout>
        {/* </ProductsState> */}
        </ProductsProvider>
      </UserProvider>
      </CartProvider>
    </Router>
    </>
    )}
export default App;