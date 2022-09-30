import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Flight from "./components/Flight";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import FlightsHome from "./screens/FlightsHome";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Container>
          <main className="py-3">
            <Routes>
              <Route exact path="/" element={<FlightsHome />} />

              <Route path="/flight" element={<HomeScreen />} />

              <Route path="/login" element={<LoginScreen />} />

              <Route path="/register" element={<RegisterScreen />} />

              <Route path="/profile" element={<ProfileScreen />} />

              {/* <Route path="/placeorder" element={PlaceOrderScreen} />
  
            <Route path="/order/:id" element={OrderScreen} /> */}

              <Route path="/flight/:id" element={<Flight />} />

              <Route path="/cart" element={<CartScreen />} />

              <Route path="/cart/:id?" element={<CartScreen />} />

              {/* <Route path="/admin/userlist" element={UserListScreen} />
  
            <Route path="/admin/user/:id/edit" element={UserEditScreen} />
  
            <Route path="/admin/product/:id/edit" element={ProductEditScreen} />
  
            <Route path="/admin/productlist" element={ProductListScreen} />
  
            <Route path="/admin/orderlist" element={OrderListScreen} /> */}
            </Routes>
          </main>
        </Container>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
