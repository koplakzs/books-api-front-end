import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ handleData }) => {
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pages, setPages] = useState(0);
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [userId, setUserId] = useState("");

  const token = localStorage.getItem("token");

  const header = { Authorization: `Bearer ${token}` };
  const fetchUser = () => {
    try {
      axios
        .get("http://127.0.0.1:8000/api/user/", { headers: header })
        .then((response) => {
          setUserId(response.data.id);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = () => {
    try {
      axios
        .post(
          "http://127.0.0.1:8000/api/books/add",
          {
            user_id: userId,
            isbn: isbn,
            title: title,
            subtitle: subtitle,
            author: author,
            published: published,
            publisher: publisher,
            pages: pages,
            description: description,
            website: website,
          },
          { headers: header }
        )
        .then(() => {
          handleData();
          setIsbn("");
          setTitle("");
          setSubtitle("");
          setAuthor("");
          setPublished("");
          setPublisher("");
          setPages("");
          setDescription("");
          setWebsite("");
        });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Add Book
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="isbn" className="form-label">
              ISBN
            </label>
            <input
              type="text"
              className="form-control"
              id="isbn"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subtitle" className="form-label">
              Subtitle
            </label>
            <input
              type="text"
              className="form-control"
              id="subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="published" className="form-label">
              Published
            </label>
            <input
              type="date"
              className="form-control"
              id="published"
              value={published}
              onChange={(e) => setPublished(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="PUBLISHER" className="form-label">
              Publisher
            </label>
            <input
              type="text"
              className="form-control"
              id="PUBLISHER"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="pages" className="form-label">
              Pages
            </label>
            <input
              type="text"
              className="form-control"
              id="pages"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="website" className="form-label">
              Website
            </label>
            <input
              type="text"
              className="form-control"
              id="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button
            onClick={handleClick}
            className="btn btn-primary"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
};
Modal.propTypes = {
  handleData: PropTypes.func.isRequired,
};
export default Modal;
