import { Navigate, NavLink } from "react-router-dom";
const Nav2 = ({ user, setUser }) => {
  const logOutHandeler = () => {
    setUser();
  };
  return (
    <div className="nav2">
      <div>
        <NavLink className="list" to="/list" exact="true">
          <button>Shopping List</button>
        </NavLink>
      </div>
      <div className="logout">
        {user}
        {!user && <Navigate to="/signup" />}
        <button onClick={logOutHandeler}>logout</button>
      </div>
    </div>
  );
};

export default Nav2;
