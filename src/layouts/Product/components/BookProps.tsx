import React, { useEffect, useState } from "react";
import BookModel from "../../../models/BookModel";
import ImageModel from "../../../models/ImageModel";
import { getAllImage } from "../../../api/ImageAPI";

interface BookPropsInterface {
  book: BookModel;
}

const BookProps: React.FC<BookPropsInterface> = (props) => {
  const maSach: number = props.book.maSach;

  const [imageList, setImageList] = useState<ImageModel[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getAllImage(maSach)
      .then((imageData) => {
        setImageList(imageData);
        setDataLoading(false);
      })
      .catch((error) => {
        setDataLoading(false);
        setErrorMessage(error.message);
      });
  }, []); // chỉ gọi 1 lần

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

  let duLieuAnh:string = "";
  if (imageList[0] && imageList[0].duLieuAnh) {
    duLieuAnh = imageList[0].duLieuAnh;
  }
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="card mb-7">
        <div className="card-img">
          <a className="card-img-hover" href="product.html">
            <img
              className="card-img-top card-img-back"
              src={duLieuAnh}
              alt={props.book.tenSach}
              style={{ height: "380px" }}
            />
            <img
              className="card-img-top card-img-front"
              src={duLieuAnh}
              alt={props.book.tenSach}
              style={{ height: "380px" }}
            />
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
              {props.book.tenSach}
            </a>
          </div>
          <div className="fw-bold">
            <a className="text-body" href="product.html">
              {props.book.moTa}
            </a>
          </div>
          <div className="fw-bold text-muted" style={{ textDecoration: "line-through" }}>
            {props.book.giaNiemYet}
          </div>
          <div className="fw-bold text-muted">{props.book.giaBan}</div>
        </div>
      </div>
    </div>
  );
};
export default BookProps;
