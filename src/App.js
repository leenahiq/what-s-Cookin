import React from 'react';
import { BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import About from './pages/about/about';
import Profile from './pages/profile/profile';
import Home from './pages/Home/Home';
import SearchRecipes from './pages/searchRecipes/searchRecipes';
import Navbar from './components/Navbar/Navbar';


// import "./App.css";
import Getapi from "./pages/api/Final";
import Ingredient from "./pages/ingredient";
import Recipe from "./pages/recipe";

function App() {
  return (
    <div className="App">
      <h1>main project</h1>
      <Getapi />
      <Recipe />
      <Ingredient />
      <Router>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='/About' element={<About />}  exact/>
        <Route path='/profile' element={<Profile />}  exact/>
        <Route path='/searchRecipes' element={<SearchRecipes />}  exact/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
