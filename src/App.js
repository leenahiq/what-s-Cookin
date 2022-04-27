import React from 'react';
import { BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Routes
} from 'react-router-dom';

import Profile from './pages/Profile/Profile';
import Recipe from './pages/Recipe/Recipe';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Reviews from './pages/Reviews/Reviews';
import Navbar from './components/Navbar/Navbar';



const App = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='/profile' element={<Profile />}  exact/>
        <Route path='/recipe' element={<Recipe />}  exact/>
        <Route path='/reviews' element={<Reviews />}  exact/>
        <Route path='/services' element={<Services />}  exact/>
        </Routes>
    </Router>
    
  );
}

export default App;
