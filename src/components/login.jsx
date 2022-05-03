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
          <h1>Whats-Chef</h1>
          <h3>Desire Acording to your mood </h3>
        </div>
        <div>
          <img src={img1} alt="img" />
        </div>
      </div>
      <div className="form">
        <form onSubmit={handler}>
          <h1>Log in to whats-Chef</h1>
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
          <br />
          <button type="submit">log In</button>

          <div>
            Dont have account?
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
