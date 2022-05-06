import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import About from "./pages/about/about";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Alert from "./pages/recipe/Alert";
import Recipe from "./pages/recipe/Recipe";

import Calories from "./pages/calories/Final";
import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Nav2 from "./components/navbar2/navbar2";
import List from "./pages/list/list";

// import Ingredient from "./pages/ingredient";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onChange = (e) => setQuery(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const [user, setUser] = useState();

  const [isclicked, setIsclicked] = useState(false);

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //fectch request from REST-API whats-chef backend
  const addUser = async (username, email, password) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      const data = await res.json();
      setUser(data.user);
      localStorage.setItem("myToken", data.token);
    } catch (error) {
      console.log(error);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();

    addUser(username, email, password, setUser);
  };
  //fetch request for login form
  const addLogIn = async (username, password) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_REST_API}login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const data = await res.json();
      setUser(data.user);
      localStorage.setItem("myToken", data.token);
    } catch (error) {
      console.log(error);
    }
  };
  const submitHandlerLogIn = (e) => {
    e.preventDefault();

    addLogIn(username, password, setUser);
  };

  return (
    <div>
      {/* login/signup with conditional rendering */}
      {!user && (
        <div className="container">
          {isclicked ? (
            <Login
              username={username}
              setUsername={setUsername}
              passsword={password}
              setPassword={setPassword}
              setIsclicked={setIsclicked}
              handler={submitHandlerLogIn}
            />
          ) : (
            <Signup
              username={username}
              setUsername={setUsername}
              passsword={password}
              setPassword={setPassword}
              setIsclicked={setIsclicked}
              handler={submitHandler}
              email={email}
              setEmail={setEmail}
            />
          )}
        </div>
      )}

      {user && (
        <Router>
          <Navbar user={user} setUser={setUser} />
          <Nav2 user={user} setUser={setUser} />
          <Routes>
            <Route path="" element={<Home />} />

            <Route path="/calories" element={<Calories />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/recipes"
              element={
                <div className="recipe-search">
                  {/* <h1>Food Searching App</h1> */}
                  <div>
                    <form onSubmit={onSubmit} className="search-form">
                      {alert !== "" && <Alert alert={alert} />}
                      <input
                        type="text"
                        name="query"
                        onChange={onChange}
                        value={query}
                        autoComplete="off"
                        placeholder="search ingredient or dish"
                      />
                      <button type="submit">Get Recipe</button>
                    </form>
                  </div>
                  <div className="recipes">
                    {recipes !== [] &&
                      recipes.map((recipe) => (
                        <Recipe key={uuidv4()} recipe={recipe} />
                      ))}
                  </div>
                </div>
              }
            />
            <Route path="/list" element={<List />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
