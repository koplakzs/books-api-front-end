import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Register from "./pages/Register";
import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
const App = () => {
  // const token = localStorage.getItem("token");
  // const navigate = useNavigate();
  // if (!token) {
  //   navigate("/");
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/detail/:id" element={<Detail />} />
        <Route path="/dashboard/edit/:id" element={<Edit />} />
        <Route path="/dashboard/user" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
