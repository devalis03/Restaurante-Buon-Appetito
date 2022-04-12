import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout/Layout";
import UserProvider from "./context/UserContext";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
// import Contacto from "./pages/Contact";
// import Home from "./pages/Home";
//import Nosotros from "./pages/AboutUs";
//import Productos from "./pages/Products";
// import ProductDetail from "./pages/ProductDetail";
// import Products from "./pages/Products";  //Fer//
import React from 'react'; //Fer//


//import Register from "./pages/Register";
// import AdminRoute from "./routes/AdminRoute";
//import PrivateRoute from "./routes/PrivateRoute";
//import PublicRoute from "./routes/PublicRoute";
//import ContactForm from "./pages/ContactForm";    Fer
// import './App.css';
import AboutUs from "./components/AboutUs/AboutUs";
// import ProductDetail from "./pages/ProductDetail";
// import "./App.css";
// import PrivateRoute from "./routes/PrivateRoute";
// import AdminRoute from "./routes/AdminRoute";
// import PublicRoute from "./routes/PublicRoute";
import ProductsProvider from "./context/ProductsContext";
// import AdminABM from "./components/Admin/AdminABM";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <ProductsProvider>
            <Layout>
              <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* <Route path="/home" element={<Home />} /> */}
              {/* <Route path="/home" element={<Home />} /> */}
              <Route path="/login" element={<Login />} />
              {/* <Route path="/registro" element={<Register />} /> */}
              <Route path="/admin" element={<Admin />} />
              {/* <Route path="/contacto" element={<Contacto />} /> */}
              <Route path='/producto' element={<ProductPage/>} />
              <Route path='/carrito' element={<CartPage/>} />
              {/* <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/productos" element={<Productos />} /> */}
              <Route path="/AboutUs" element={<AboutUs />} />

               {/*<Route path="/productos" element={<Productos} />} */}




               {/*<Route path="/productos/:id" element={<PrivateRoute><ProductDetail /></PrivateRoute>} /> */}
             
              {/* -- */}
              {/* <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} /> */}
              {/* <Route path="/registro" element={<PublicRoute><Register /></PublicRoute>} /> */}
               {/* -- */}
              {/* <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} /> */}
              {/* <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} /> */}
             
             
        
              
              {/* <Route path="/nosotros" element={<Nosotros />} />*/}
              
            </Routes>
        </Layout>
        </ProductsProvider>
      </UserProvider>
    </Router>
    </>
  );
}

export default App;
