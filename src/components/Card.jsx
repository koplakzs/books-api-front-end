import PropTypes from "prop-types";
// import axios from "axios";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import axios from "axios";
// import { useState } from "react";

const Card = ({ data, handleDelete }) => {
  //   const navigate = useNavigate();
  //   const api = "http://127.0.0.1:8000/api";
  //   const token = localStorage.getItem("token");

  //   const header = { Authorization: `Bearer ${token}` };
  //   const [book, setBook] = useState({
  //     // id: null,
  //     // user_id: null,
  //     // isbn: "",
  //     // title: "",
  //     // subtitle: "",
  //     // author: "",
  //     // published: "",
  //     // publisher: "",
  //     // pages: null,
  //     // description: "",
  //     // website: "",
  //     // created_at: "",
  //     // updated_at: "",
  //   });
  //   const fetchBook = (id) => {
  //     navigate(`/dashboard/detail/${id}`);
  //   };
  //   useEffect(() => {
  //     // console.log(book);
  //   }, [book]);
  return (
    <div>
      <div className="card shadow-sm">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"> {data.title} </h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {data.subtitle}
            </h6>
            <p className="card-text">{data.description}</p>
            <button onClick={handleDelete} className="btn btn-danger me-2">
              Delete
            </button>
            <Link to={`/dashboard/edit/${data.id}`}>
              <button className="btn btn-warning me-2">Edit</button>
            </Link>
            <Link to={`/dashboard/detail/${data.id}`}>
              <button className="btn btn-info">Detail</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default Card;
