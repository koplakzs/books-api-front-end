import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [showErr, setShowErr] = useState(false);
  const api = "http://127.0.0.1:8000/api/register/";
  const handleSubmit = () => {
    axios
      .post(api, {
        name: name,
        email: email,
        password: pass,
        password_confirmation: confirm,
      })
      .then((response) => {
        setName("");
        setEmail("");
        setPass("");
        setConfirm("");
        console.log(response);
        setShowErr(false);
        setShow(true);
      })
      .catch((err) => {
        console.log(err.response.data);
        setError(err.response.data.user.password[0]);
        setShowErr(true);
        setShow(false);
      });
  };
  return (
    <div className="register container">
      <div className="form bg-light p-5 rounded-5 text-center">
        <h3 className="fw-bold">Please Register First</h3>
        <p>Register</p>
        {show && (
          <div
            className="alert alert-success d-flex align-items-center"
            role="alert"
          >
            <div>
              Register Berhasil, Silahkan <Link to="/">Login</Link>
            </div>
          </div>
        )}
        {showErr && (
          <div
            className="alert alert-danger d-flex align-items-center"
            role="alert"
          >
            <div>Register Gagal. {error} </div>
          </div>
        )}
        <div className="mb-3">
          <input
            type="text"
            className="form-control border-0 border-bottom shadow-none bg-light"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <div className="mb-3">
          <input
            type="password"
            className="form-control border-0 border-bottom shadow-none bg-light"
            id="password"
            placeholder="Confirmation Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="btn btn-primary mt-3 mb-3 col-12"
        >
          Register
        </button>
        {/* {error ? <span>Somwthing Error</span> : ""} */}

        <p>
          Sudah ada akun ??<Link to="/"> Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
