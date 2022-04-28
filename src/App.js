import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/about/about";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Recipe from "./pages/searchRecipes/recipe";
import Calories from "./pages/calories/Final";
import "./App.css";

// import Ingredient from "./pages/ingredient";

function App() {
  return (
    <div>
      {/* <Ingredient /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/calories" element={<Calories />} exact />
          <Route path="/recipes" element={<Recipe />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
