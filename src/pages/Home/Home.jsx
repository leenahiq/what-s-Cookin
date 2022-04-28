import React from "react";
import Popular from "../../components/popular";

const Home = () => {
  return (
    <div className="container">
      <h1 
      className="text-center" 
      // style={{ paddingTop: "30%" }}
      >
        <Popular />
      </h1>
    </div>
  );
};

export default Home;
