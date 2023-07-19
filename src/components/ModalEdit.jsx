import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import axios from "axios";

const ModalEdit = (id) => {
  console.log(id);
  //   const [isbn, setIsbn] = useState("");
  //   const [title, setTitle] = useState("");
  //   const [subtitle, setSubtitle] = useState("");
  //   const [author, setAuthor] = useState("");
  //   const [published, setPublished] = useState("");
  //   const [publisher, setPublisher] = useState("");
  //   const [pages, setPages] = useState(0);
  //   const [description, setDescription] = useState("");
  //   const [website, setWebsite] = useState("");

  //   const userId = data.user_id;
  const api = "http://127.0.0.1:8000/api";

  const token = localStorage.getItem("token");

  const header = { Authorization: `Bearer ${token}` };
  const [bookInfo, setBookInfo] = useState({});

  const fetchBook = async (id) => {
    try {
      const response = await axios.get(`${api}/books/${id}`, {
        headers: header,
      });

      setBookInfo(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchBook(id);
  }, []);
  //   const handleClick = () => {
  //     try {
  //       axios
  //         .post(
  //           "http://127.0.0.1:8000/api/books/add",
  //           {
  //             user_id: userId,
  //             isbn: isbn,
  //             title: title,
  //             subtitle: subtitle,
  //             author: author,
  //             published: published,
  //             publisher: publisher,
  //             pages: pages,
  //             description: description,
  //             website: website,
  //           },
  //           { headers: header }
  //         )
  //         .then(() => {
  //           handleData();
  //           setIsbn("");
  //           setTitle("");
  //           setSubtitle("");
  //           setAuthor("");
  //           setPublished("");
  //           setPublisher("");
  //           setPages("");
  //           setDescription("");
  //           setWebsite("");
  //         });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

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
          <ul className="col-md-7">
            <li>ID : {bookInfo.id} </li>
            <li>User Id : {bookInfo.user_id} </li>
            <li>ISBN : {bookInfo.isbn} </li>
            <li>Title : {bookInfo.title} </li>
            <li>Subtitle : {bookInfo.subtitle} </li>
            <li>Author : {bookInfo.author}</li>
            <li>Published : {bookInfo.published}</li>
            <li>Publisher : {bookInfo.publisher}</li>
            <li>Pages :{bookInfo.pages} </li>
            <li>Description :{bookInfo.description} </li>
            <li>
              Website : <a href={bookInfo.website}>{bookInfo.website}</a>
            </li>
            <li>Created At : {bookInfo.created_at}</li>
            <li>Updated At : {bookInfo.updated_at}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
// ModalEdit.propTypes = {
//   id: PropTypes.number.isRequired,
//   //   data: PropTypes.shape({
//   //     title: PropTypes.string.isRequired,
//   //     subtitle: PropTypes.string.isRequired,
//   //     description: PropTypes.string.isRequired,
//   //     user_id: PropTypes.string.isRequired,
//   //     author: PropTypes.string.isRequired,
//   //     isbn: PropTypes.string.isRequired,
//   //     website: PropTypes.string.isRequired,
//   //     pages: PropTypes.number.isRequired,
//   //     published: PropTypes.string.isRequired,
//   //     publisher: PropTypes.string.isRequired,
//   //   }).isRequired,
//   handleData: PropTypes.func.isRequired,
//};

export default ModalEdit;
