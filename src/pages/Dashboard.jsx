import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [book, setBook] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const api = "http://127.0.0.1:8000/api";
  const token = localStorage.getItem("token");

  const header = { Authorization: `Bearer ${token}` };

  const fetchBook = (page) => {
    try {
      axios
        .get(`${api}/books?page=${page}`, { headers: header })
        .then((response) => {
          const data = response.data;
          setBook(data.data);
          setCurrentPage(data.current_page);
          setLastPage(data.last_page);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < lastPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  const handleDelete = (id) => {
    axios
      .delete(`${api}/books/${id}`, { headers: header })
      .then(() => fetchBook(currentPage))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    fetchBook(currentPage);
  }, [currentPage]);
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-8 mx-auto">
            <h1 className="fw-light">Books List</h1>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              aliquid enim dolore in alias odio at numquam, cum est ipsa
              perferendis optio magni accusamus sed. Consectetur reiciendis
              beatae labore voluptate?
            </p>
          </div>
          <p>
            <button
              className="btn btn-primary me-4"
              data-bs-toggle="modal"
              data-bs-target="#modalAdd"
            >
              Add Book
            </button>
            <Link to={`/dashboard/user/`}>
              <button className="btn btn-info">My Profile</button>
            </Link>
          </p>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-evenly">
            {book &&
              book.map((data, index) => {
                return (
                  <div key={index} className="col" style={{ width: "25rem" }}>
                    <Card
                      data={data}
                      handleDelete={() => handleDelete(data.id)}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <nav>
        <ul className="pagination justify-content-center ">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={handlePrevPage}>
              Previous
            </button>
          </li>
          <li
            className={`page-item ${
              currentPage === lastPage ? "disabled" : ""
            }`}
          >
            <button className="page-link" onClick={handleNextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
      {/* modal */}
      <div
        className="modal fade"
        id="modalAdd"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <Modal handleData={() => fetchBook(currentPage)} />
      </div>
    </main>
  );
};

export default Dashboard;
