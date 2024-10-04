import { Route, Routes } from "react-router-dom";
import Home from "./pages/index.js";
import About from "./pages/about.js";
import Tours from "./pages/tours.js";
import Contact from "./pages/contact.js";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element= {<About />} /> 
        <Route exact path="/tours" element= {<Tours />} /> 
        <Route exact path="/contact" element= {<Contact />} /> 
      </Routes>
    </>
  );
}

export default App;