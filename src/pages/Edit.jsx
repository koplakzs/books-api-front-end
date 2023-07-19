import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  let data = useParams();

  //   const [isbn, setIsbn] = useState("");
  //   const [title, setTitle] = useState("");
  //   const [subtitle, setSubtitle] = useState("");
  //   const [author, setAuthor] = useState("");
  //   const [published, setPublished] = useState("");
  //   const [publisher, setPublisher] = useState("");
  //   const [pages, setPages] = useState(0);
  //   const [description, setDescription] = useState("");
  //   const [website, setWebsite] = useState("");
  //   const [userId, setUserId] = useState("");

  const api = "http://127.0.0.1:8000/api";

  const token = localStorage.getItem("token");

  const header = { Authorization: `Bearer ${token}` };
  const navigate = useNavigate();
  const [bookInfo, setBookInfo] = useState({
    user_id: 0,
    isbn: "",
    title: "",
    subtitle: "",
    author: "",
    published: "",
    publisher: "",
    pages: "",
    description: "",
    website: "",
  });
  //   const fetchUser = () => {
  //     try {
  //       axios.get(`${api}/user/`, { headers: header }).then((response) => {
  //         setUserId(response.data.id);
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  const fetchBook = (id) => {
    try {
      axios
        .get(`${api}/books/${id}`, {
          headers: header,
        })
        .then((response) => setBookInfo(response.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchBook(data.id);
  }, []);
  const handleClick = () => {
    try {
      axios
        .post(
          "http://127.0.0.1:8000/api/books/add",
          {
            user_id: bookInfo.user_id,
            isbn: bookInfo.isbn,
            title: bookInfo.title,
            subtitle: bookInfo.subtitle,
            author: bookInfo.author,
            published: bookInfo.published,
            publisher: bookInfo.publisher,
            pages: bookInfo.pages,
            description: bookInfo.description,
            website: bookInfo.website,
          },
          { headers: header }
        )
        .then(() => {
          navigate("/dashboard");
          //   setIsbn("");
          //   setTitle("");
          //   setSubtitle("");
          //   setAuthor("");
          //   setPublished("");
          //   setPublisher("");
          //   setPages("");
          //   setDescription("");
          //   setWebsite("");
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-8 mx-auto">
            <h1 className="fw-light">Edit Books</h1>
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
            <div className="col col-md-9">
              <div className="mb-3">
                <label htmlFor="isbn" className="form-label">
                  ISBN
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="isbn"
                  defaultValue={bookInfo.isbn}
                  onChange={(e) =>
                    setBookInfo({ ...bookInfo, isbn: e.target.value })
                  }
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
                  defaultValue={bookInfo.title}
                  onChange={(e) =>
                    setBookInfo({ ...bookInfo, title: e.target.value })
                  }
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
                  defaultValue={bookInfo.subtitle}
                  onChange={(e) =>
                    setBookInfo({ ...bookInfo, subtitle: e.target.value })
                  }
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
                  defaultValue={bookInfo.author}
                  onChange={(e) =>
                    setBookInfo({ ...bookInfo, author: e.target.value })
                  }
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
                  defaultValue={bookInfo.published}
                  onChange={(e) =>
                    setBookInfo({ ...bookInfo, published: e.target.value })
                  }
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
                  defaultValue={bookInfo.publisher}
                  onChange={(e) =>
                    setBookInfo({ ...bookInfo, publisher: e.target.value })
                  }
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
                  defaultValue={bookInfo.pages}
                  onChange={(e) =>
                    setBookInfo({ ...bookInfo, pages: e.target.value })
                  }
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
                  defaultValue={bookInfo.description}
                  onChange={(e) =>
                    setBookInfo({ ...bookInfo, description: e.target.value })
                  }
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
                  defaultValue={bookInfo.website}
                  onChange={(e) =>
                    setBookInfo({ ...bookInfo, website: e.target.value })
                  }
                />
              </div>
              <button onClick={handleClick} className="btn btn-primary">
                Update Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Edit;
