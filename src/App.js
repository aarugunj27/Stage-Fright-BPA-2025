import { Route, Routes } from "react-router-dom";
import Home from "./pages/index.js";
import About from "./pages/about.js";
import Tours from "./pages/tours.js";
import Merch from "./pages/merch.js";
import Contact from "./pages/contact.js";
import PageNotFound from "./pages/404.js";
import Music from "./pages/music.js";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/tours" element={<Tours />} />
        <Route exact path="/merch" element={<Merch />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/music" element={<Music />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
