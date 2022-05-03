import { Navigate, NavLink } from "react-router-dom";
const Nav2 = ({ user, setUser }) => {
  const logOutHandeler = () => {
    setUser();
  };
  return (
    <div>
      {!user && <Navigate to="/signup" />}

      <button onClick={logOutHandeler}>logout</button>

      <NavLink className="nav-link" to="/list" exact>
        <button>Shopping List</button>
      </NavLink>
    </div>
  );
};

export default Nav2;
