import { Route, Routes } from "react-router-dom";
import Home from "./pages/index.js";
import About from "./pages/about.js";
import Tours from "./pages/tours.js";
import Merch from "./pages/merch.js";
import Contact from "./pages/contact.js";
import PageNotFound from "./pages/404.js";
import Music from "./pages/music.js";
import Cart from "./pages/cart.js";
import ComingSoon from "./pages/comingsoon.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/music" element={<Music />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/soon" element={<ComingSoon />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
