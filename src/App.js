import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import ContactoPage from "./pages/ContactoPage";
import NovedadesPage from "./pages/NovedadesPage";
import NosotrosPage from "./pages/NosotrosPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Nosotros" element={<NosotrosPage />} />
          <Route path="/Novedades" element={<NovedadesPage />} />
          <Route path="/Contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
