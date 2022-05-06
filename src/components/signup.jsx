import img2 from "../Images/salad.png";
const Signup = ({
  setIsclicked,
  handler,
  setEmail,
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
        <img className="imgsignup" src={img2} alt="img" />
      </div>
      <div className="form">
        <form onSubmit={handler}>
          <div>
            {" "}
            <h1>Sign up in to What's Cookin</h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
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
            <button type="submit">Sign Up</button>
          </div>
          <div>
            Already have account?
            <p className="p" onClick={(e) => setIsclicked(true)}>
              Log In
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
