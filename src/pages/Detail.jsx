import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  let data = useParams();
  const [bookInfo, setBookInfo] = useState({});
  const api = "http://127.0.0.1:8000/api";
  const token = localStorage.getItem("token");

  const header = { Authorization: `Bearer ${token}` };
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
    fetchBook(data.id);
  }, []);
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-8 mx-auto">
            <h1 className="fw-light">Books Information</h1>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              aliquid enim dolore in alias odio at numquam, cum est ipsa
              perferendis optio magni accusamus sed. Consectetur reiciendis
              beatae labore voluptate?
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center">
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
    </main>
  );
};

export default Detail;
