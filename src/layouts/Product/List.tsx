/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import BookProps from "./components/BookProps";
import Book from "../../models/Book";

const List: React.FC = () => {
  const books: Book[] = [
    {
      id: 1,
      title: "Book 1",
      description: "Description for Book 1",
      originalPrice: 50000,
      price: 45000,
      imageUrl: "src/assets/img/products/product-5.jpg",
    },
    {
      id: 1,
      title: "Book 1",
      description: "Description for Book 2",
      originalPrice: 50000,
      price: 45000,
      imageUrl: "src/assets/img/products/product-5.jpg",
    },
    {
      id: 1,
      title: "Book 1",
      description: "Description for Book 3",
      originalPrice: 50000,
      price: 45000,
      imageUrl: "src/assets/img/products/product-6.jpg",
    },
    {
      id: 1,
      title: "Book 1",
      description: "Description for Book 1",
      originalPrice: 50000,
      price: 45000,
      imageUrl: "src/assets/img/products/product-7.jpg",
    },
    {
      id: 1,
      title: "Book 1",
      description: "Description for Book 2",
      originalPrice: 50000,
      price: 45000,
      imageUrl: "src/assets/img/products/product-5.jpg",
    },
    {
      id: 1,
      title: "Book 1",
      description: "Description for Book 3",
      originalPrice: 50000,
      price: 45000,
      imageUrl: "src/assets/img/products/product-6.jpg",
    },
    {
      id: 1,
      title: "Book 1",
      description: "Description for Book 1",
      originalPrice: 50000,
      price: 45000,
      imageUrl: "src/assets/img/products/product-7.jpg",
    },
    {
      id: 1,
      title: "Book 1",
      description: "Description for Book 2",
      originalPrice: 50000,
      price: 45000,
      imageUrl: "src/assets/img/products/product-8.jpg",
    },
  ];

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
                {books.map((book) => (
                  <BookProps key={book.id} book={book} />
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

export default List;
