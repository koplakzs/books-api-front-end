import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [showErr, setShowErr] = useState(false);
  const api = "http://127.0.0.1:8000/api/login/";
  const handleSubmit = () => {
    axios
      .post(api, {
        email: email,
        password: pass,
      })
      .then((response) => {
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.user.password[0]);
        setShowErr(true);
      });
  };
  return (
    <div className="register container">
      <div className="form bg-light p-5 rounded-5 text-center">
        <h3 className="fw-bold">Welcome, Please Login</h3>
        <p>Login</p>
        {showErr && (
          <div
            className="alert alert-danger d-flex align-items-center"
            role="alert"
          >
            <div>Login Gagal. {error} </div>
          </div>
        )}

        <div className="mb-3">
          <input
            type="email"
            className="form-control border-0 border-bottom shadow-none bg-light"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control border-0 border-bottom shadow-none bg-light"
            id="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="btn btn-primary mt-3 mb-3 col-12"
        >
          Login
        </button>
        {/* {error ? <span>Somwthing Error</span> : ""} */}

        <p>
          Belum ada akun ??<Link to="/register"> Login Skuy </Link>
        </p>
      </div>
    </div>
  );
};
// Login.propTypes = {
//   setToken: checkPropTypes.func.isRequired,
// };
export default Login;
