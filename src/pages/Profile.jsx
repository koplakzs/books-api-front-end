import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({
    id: 0,
    name: "",
    email_verified_at: "",
    created_at: "",
    updated_at: "",
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const header = { Authorization: `Bearer ${token}` };
  const fetchUser = () => {
    // Kirim permintaan GET untuk mendapatkan data pengguna terkait
    axios
      .get("http://127.0.0.1:8000/api/user/", { headers: header })
      .then((response) => {
        setUser(response.data);
      });
  };
  const handleLogout = () => {
    axios
      .delete("http://127.0.0.1:8000/api/user/logout", { headers: header })
      .then(() => {
        localStorage.removeItem("token");
        navigate("/");
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-8 mx-auto">
            <h1 className="fw-light">Hi {user.name}</h1>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              aliquid enim dolore in alias odio at numquam, cum est ipsa
              perferendis optio magni accusamus sed. Consectetur reiciendis
              beatae labore voluptate?
            </p>
            <button onClick={handleLogout} className="btn btn-danger mt-3">
              Log Out
            </button>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center">
            <ul className="col-md-5">
              <li>ID : {user.id} </li>
              <li>User Name : {user.name} </li>
              <li>Email Verifikasi : {user.email_verified_at} </li>
              <li>Create Account : {user.created_at} </li>
              <li>Update Account : {user.updated_at} </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
