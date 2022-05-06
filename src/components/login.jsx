import img1 from "../Images/noodles.png";

const Login = ({
  handler,
  setIsclicked,

  setUsername,

  setPassword,
}) => {
  return (
    <div className="containerf">
      <div className="logside">
        <div className="text">
          <h1>What's Cookin!</h1>
          <h3>Food according to your mood </h3>
        </div>

        <img className="imglogin" src={img1} alt="img" />
      </div>
      <div className="form">
        <form onSubmit={handler}>
          <div>
            {" "}
            <h1>Log in to What's Cookin!</h1>
          </div>
          <div>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="username"
            />
            <br />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
          </div>
          <br />
          <div className="button">
            <button type="submit">log In</button>
          </div>

          <div>
            Don't have account?
            <p className="p" onClick={() => setIsclicked(false)}>
              Sign Up
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
