import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import About from "./pages/about/about";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Recipe from "./pages/searchRecipes/recipe";
import Calories from "./pages/calories/Final";
import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";

// import Ingredient from "./pages/ingredient";

function App() {
  const [user, setUser] = useState();

  const [isclicked, setIsclicked] = useState(false);

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //fectch request from REST-API instaclone backend
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
      {/* {!user && (
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
      )} */}
      {/* <Ingredient /> */}
      {/* {user && ( */}
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/calories" element={<Calories />} exact />
          <Route path="/recipes" element={<Recipe />} exact />
        </Routes>
      </Router>
      {/* )} */}
    </div>
  );
}

export default App;
