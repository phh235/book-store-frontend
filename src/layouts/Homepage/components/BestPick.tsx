function BestPick() {
  return (
    <div className="container mt-12">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
          <h6 className="heading-xxs mb-3 text-gray-400">New Collection</h6>
          <h2 className="mb-4">Best Picks 2019</h2>
          <p className="mb-10 text-gray-500">
            Appear, dry there darkness they're seas, dry waters thing fly midst. Beast, above fly
            brought Very green.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 col-lg-4 d-flex flex-column">
          <div
            className="card mb-7 text-white"
            style={{
              minHeight: "400px",
              backgroundImage: "url(src/assets/img/products/product-1.jpg)",
            }}
          >
            <div className="card-bg">
              <div
                className="card-bg-img bg-cover"
                style={{ backgroundImage: "url(src/src/assets/img/products/product-1.jpg)" }}
              ></div>
            </div>
            <div className="card-body my-auto text-center">
              <h4 className="mb-0">Bags Collection</h4>
              <a className="btn btn-link stretched-link text-reset" href="shop.html">
                Shop Now <i className="fe fe-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-8 d-flex flex-column">
          <div className="card mb-7 text-body" style={{ minHeight: "400px" }}>
            <div className="card-bg">
              <div
                className="card-bg-img bg-cover"
                style={{
                  backgroundImage: "url(src/assets/img/products/product-2.jpg)",
                }}
              ></div>
            </div>
            <div className="card-body my-auto px-md-10 text-center text-md-start">
              <div className="card-circle card-circle-lg card-circle-end">
                <strong>save</strong>
                <span className="fs-4 fw-bold">30%</span>
              </div>
              <h4 className="mb-0">Printed men’s Shirts</h4>
              <a className="btn btn-link stretched-link px-0 text-reset" href="shop.html">
                Shop Now <i className="fe fe-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-8 d-flex flex-column">
          <div className="card mb-7 mb-md-0 text-body" style={{ minHeight: "400px" }}>
            <div className="card-bg">
              <div
                className="card-bg-img bg-cover"
                style={{
                  backgroundImage: "url(src/assets/img/products/product-3.jpg)",
                }}
              ></div>
            </div>
            <div className="card-body my-auto px-md-10 text-center text-md-start">
              <h4 className="mb-0">Basic women’s Dresses</h4>
              <a className="btn btn-link stretched-link px-0 text-reset" href="shop.html">
                Shop Now <i className="fe fe-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-4 d-flex flex-column">
          <div className="card text-white" style={{ minHeight: "400px" }}>
            <div className="card-bg">
              <div
                className="card-bg-img bg-cover"
                style={{
                  backgroundImage: "url(src/assets/img/products/product-4.jpg)",
                }}
              ></div>
            </div>
            <div className="card-body my-auto text-center">
              <h4 className="mb-0">Sweatshirts</h4>
              <a className="btn btn-link stretched-link text-reset" href="shop.html">
                Shop Now <i className="fe fe-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestPick;
