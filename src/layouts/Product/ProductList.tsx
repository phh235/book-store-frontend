import React, { useEffect, useState } from "react";
import BookProps from "./components/BookProps";
import BookModel from "../../models/BookModel";
import { getAllBook } from "../../api/BookAPI";

const ProductList: React.FC = () => {
  const [bookList, setBookList] = useState<BookModel[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getAllBook()
      .then((bookData) => {
        setBookList(bookData);
        setDataLoading(false);
      })
      .catch((error) => {
        setDataLoading(false);
        setErrorMessage(error.message);
      });
  }, []);

  if (dataLoading) {
    return (
      <div>
        <h1>Đang tải dữ liệu</h1>
      </div>
    );
  }
  if (errorMessage) {
    return (
      <div>
        <h1>Gặp lỗi: {errorMessage}</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <section className="py-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2 className="mb-4 text-center">Top sách bán chạy</h2>
              <div className="nav justify-content-center mb-10">
                <a className="nav-link active" href="#topSellersTab" data-bs-toggle="tab">
                  Women
                </a>
                <a className="nav-link" href="#topSellersTab" data-bs-toggle="tab">
                  Men
                </a>
                <a className="nav-link" href="#topSellersTab" data-bs-toggle="tab">
                  Kids
                </a>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="topSellersTab">
              <div className="row">
                {bookList.map((book) => (
                  <BookProps key={book.maSach} book={book} />
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="mt-7 text-center">
                <a className="link-underline" href="#!">
                  Tải thêm
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
