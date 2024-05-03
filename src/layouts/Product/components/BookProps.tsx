import React from "react";
import Book from "../../../models/Book";

interface BookProps {
  book: Book;
}

const BookProps: React.FC<BookProps> = ({ book }) => {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="card mb-7">
        <div className="card-img">
          <a className="card-img-hover" href="product.html">
            <img className="card-img-top card-img-back" src={book.imageUrl} alt="..." />
            <img className="card-img-top card-img-front" src={book.imageUrl} alt="..." />
          </a>
          <div className="card-actions">
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalProduct"
              >
                <i className="fe fe-eye"></i>
              </button>
            </span>
            <span className="card-action">
              <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                <i className="fe fe-shopping-cart"></i>
              </button>
            </span>
            <span className="card-action">
              <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                <i className="fe fe-heart"></i>
              </button>
            </span>
          </div>
        </div>
        <div className="card-body px-0">
          <div className="fs-xs">
            <a className="text-muted" href="shop.html">
              {book.title}
            </a>
          </div>
          <div className="fw-bold">
            <a className="text-body" href="product.html">
              {book.description}
            </a>
          </div>
          <div className="fw-bold text-muted" style={{ textDecoration: "line-through" }}>
            {book.originalPrice}
          </div>
          <div className="fw-bold text-muted">{book.price}</div>
        </div>
      </div>
    </div>
  );
};
export default BookProps;
